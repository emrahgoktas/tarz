"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryItem } from "@/lib/content";
import { services } from "@/lib/services";

const filters = [{ slug: "tumu", title: "Tümü" }, ...services.map((service) => ({ slug: service.slug, title: service.title }))];

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState("tumu");
  const visible = active === "tumu" ? items : items.filter((item) => item.service === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Görünüm filtresi">
        {filters.map((filter) => {
          const selected = active === filter.slug;
          return (
            <button
              key={filter.slug}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(filter.slug)}
              className={`min-h-10 px-4 text-sm font-semibold ${
                selected ? "bg-gold text-dark" : "border border-black/10 text-dark hover:border-gold"
              }`}
            >
              {filter.title}
            </button>
          );
        })}
      </div>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <li key={item.src + item.title} className="bg-white">
            <div className="relative aspect-[4/3] bg-soft">
              <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
            </div>
            <p className="px-1 py-4 text-sm font-semibold text-dark">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
