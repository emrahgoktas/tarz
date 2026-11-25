import type { MetadataRoute } from "next";
import { areas } from "@/lib/areas";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = ["", "/hizmetler", "/referanslar", "/hakkimizda", "/iletisim", "/bolgeler"];

  const entries: MetadataRoute.Sitemap = paths.map((path) => ({
    url: `${site.url}${path || "/"}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  for (const service of services) {
    entries.push({
      url: `${site.url}/hizmetler/${service.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  for (const area of areas) {
    entries.push({
      url: `${site.url}/bolgeler/${area.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    });
    for (const service of services) {
      entries.push({
        url: `${site.url}/bolgeler/${area.slug}/${service.slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
  }

  return entries;
}
