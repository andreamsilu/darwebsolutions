import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://darwebsolutions.co.tz/sitemap.xml",
    host: "https://darwebsolutions.co.tz",
  };
}
