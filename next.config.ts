import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    const isDev = process.env.NODE_ENV !== "production";
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Content-Security-Policy",
            value:
              `default-src 'self'; ` +
              `img-src 'self' data: https://images.unsplash.com https://lh3.googleusercontent.com; ` +
              `style-src 'self' 'unsafe-inline'; ` +
              `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}; ` +
              `font-src 'self' data:; ` +
              `frame-src https://www.google.com https://maps.google.com; ` +
              `connect-src 'self';`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
