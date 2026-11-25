"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-dark text-white">
      <div className="h-0.5 bg-gold" />
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-6">
        <Link href="/" className="shrink-0" aria-label="Tarz Yapı ana sayfa">
          <Image
            src="/logo.png"
            alt="Tarz Yapı Cam Balkon Sistemleri"
            width={178}
            height={54}
            className="h-[46px] w-[151px] sm:h-[54px] sm:w-[178px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Ana menü">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className={`text-sm transition-colors hover:text-white ${
                isActive(pathname, item.href) ? "text-white" : "text-white/75"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={site.phoneHref}
            className="hidden text-sm font-semibold tracking-wide text-white sm:inline"
          >
            {site.phone}
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex h-11 w-11 items-center justify-center border border-white/20 sm:hidden"
            aria-label={`Ara: ${site.phone}`}
          >
            <PhoneIcon />
          </a>
          <Link
            href="/iletisim#form"
            className="hidden min-h-11 items-center bg-gold px-4 text-sm font-semibold text-dark transition-colors hover:bg-gold-dark sm:inline-flex"
          >
            Teklif Al
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-white/20 lg:hidden"
            aria-expanded={open}
            aria-controls="mobil-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Menüyü kapat" : "Menüyü aç"}</span>
            {open ? (
              <span className="relative block h-4 w-5" aria-hidden>
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 rotate-45 bg-white" />
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 -rotate-45 bg-white" />
              </span>
            ) : (
              <span className="flex w-5 flex-col gap-1.5" aria-hidden>
                <span className="h-px w-full bg-white" />
                <span className="h-px w-full bg-white" />
                <span className="h-px w-full bg-white" />
              </span>
            )}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobil-menu"
          className="fixed inset-x-0 bottom-0 top-[74px] z-50 overflow-y-auto bg-dark px-5 py-6 lg:hidden"
          aria-label="Mobil menü"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-white/10">
                <Link
                  href={item.href}
                  className="block py-4 text-lg font-semibold"
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/iletisim#form"
            className="mt-6 flex min-h-12 items-center justify-center bg-gold text-sm font-semibold text-dark"
          >
            Teklif Al
          </Link>
          <a href={site.phoneHref} className="mt-4 block text-center text-sm font-semibold">
            {site.phone}
          </a>
        </nav>
      ) : null}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden>
      <path
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 3.5h2.2l1.2 3-1.6 1a12.5 12.5 0 0 0 6.7 6.7l1-1.6 3 1.2V18a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4 6.7 2 2 0 0 1 7 3.5Z"
      />
    </svg>
  );
}
