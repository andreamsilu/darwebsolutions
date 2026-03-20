import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://darwebsolutions.co.tz";
  const now = new Date();

  return [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/problem`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/solution`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/how-it-works`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/demo`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
  ];
}
