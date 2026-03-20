import { NextResponse } from "next/server";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || now > current.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  current.count += 1;
  rateLimitStore.set(ip, current);
  return true;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function redirectWithStatus(request: Request, status: "success" | "error" | "rate_limited") {
  const referer = request.headers.get("referer");
  const base = referer ? new URL(referer) : new URL("/contact", request.url);
  base.pathname = "/contact";
  base.searchParams.set("status", status);
  return NextResponse.redirect(base);
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (!checkRateLimit(ip)) {
    return redirectWithStatus(request, "rate_limited");
  }

  const formData = await request.formData();
  const fullName = String(formData.get("fullName") || "").trim();
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const businessType = String(formData.get("businessType") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const honeyPot = String(formData.get("companyWebsite") || "").trim();

  if (honeyPot) {
    return redirectWithStatus(request, "success");
  }

  const isValid =
    fullName.length >= 2 &&
    fullName.length <= 120 &&
    isValidEmail(email) &&
    businessType.length >= 2 &&
    businessType.length <= 60 &&
    message.length >= 10 &&
    message.length <= 2000;

  if (!isValid) {
    return redirectWithStatus(request, "error");
  }

  // Placeholder for persistence or notification integration.
  // Keeping response behavior stable until backend transport is wired.
  return redirectWithStatus(request, "success");
}
