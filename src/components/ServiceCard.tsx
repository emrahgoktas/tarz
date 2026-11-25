import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";

export function ServiceCard({ service, href }: { service: Service; href?: string }) {
  const to = href ?? `/hizmetler/${service.slug}`;

  return (
    <article className="flex flex-col">
      <Link href={to} className="relative aspect-[4/3] overflow-hidden bg-soft">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          className="object-cover transition-transform duration-500 hover:scale-[1.03]"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
      </Link>
      <div className="flex flex-1 flex-col pt-5">
        <h3 className="text-lg font-bold tracking-tight text-dark">
          <Link href={to} className="hover:text-dark">
            {service.title}
          </Link>
        </h3>
        <span className="mt-3 block h-0.5 w-10 bg-gold" aria-hidden />
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{service.summary}</p>
        <Link
          href={to}
          className="mt-5 inline-flex min-h-11 w-fit items-center bg-gold px-4 text-sm font-semibold text-dark transition-colors hover:bg-gold-dark"
        >
          Detaylı Bilgi
        </Link>
      </div>
    </article>
  );
}
