import Image from "next/image";
import Link from "next/link";
import { areas } from "@/lib/areas";
import { services } from "@/lib/services";
import { addressLine, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Image
            src="/logo.png"
            alt="Tarz Yapı Cam Balkon Sistemleri"
            width={178}
            height={54}
            className="h-[54px] w-[178px]"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            Cam balkon, alüminyum doğrama, PVC kapı-pencere ve sineklik. Atölye Pendik’te, keşif Anadolu Yakası’nda.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold">Hizmetler</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/hizmetler/${service.slug}`} className="hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold">Bölgeler</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/70">
            {areas.slice(0, 8).map((area) => (
              <li key={area.slug}>
                <Link href={`/bolgeler/${area.slug}`} className="hover:text-white">
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/bolgeler" className="mt-4 inline-block text-sm font-semibold text-gold">
            Tüm bölgeler
          </Link>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold">İletişim</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <a href={site.phoneHref} className="font-semibold text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.phone2Href} className="hover:text-white">
                {site.phone2}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>{site.hours}</li>
            <li className="max-w-xs leading-relaxed">{addressLine()}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {year} {site.legalName}
          </p>
          <p>Pendik / İstanbul</p>
        </div>
      </div>
    </footer>
  );
}
