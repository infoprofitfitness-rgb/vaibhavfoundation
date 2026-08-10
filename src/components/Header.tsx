"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.replace(/\/$/, ""));
  };

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
    <header className="sticky top-0 z-50 bg-white shadow-[0_10px_30px_rgba(40,55,52,0.08)]">
      <div className="border-b border-[var(--oxpins-bdr-color)] bg-[var(--oxpins-extra)]">
        <div className="container-site flex items-center justify-between gap-3 py-2 text-xs text-[var(--oxpins-gray)] sm:text-sm">
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="font-bold text-[var(--oxpins-black)]"
          >
            {site.phone}
          </a>
          <Link
            href="/become-volunteer/"
            className="hidden font-semibold text-[var(--oxpins-base)] sm:inline"
          >
            Become a volunteers
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="truncate font-bold text-[var(--oxpins-black)] max-w-[55%] sm:max-w-none"
          >
            {site.email}
          </a>
        </div>
      </div>

      <div className="container-site flex items-center justify-between gap-3 py-2.5 sm:py-3">
        <Link href="/" className="relative z-10 min-w-0 shrink">
          <Image
            src={site.logo}
            alt={site.name}
            width={160}
            height={70}
            className="h-11 w-auto max-w-[140px] object-contain sm:h-14 sm:max-w-none md:h-16"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {navLinks.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropOpen(true)}
                onMouseLeave={() => setDropOpen(false)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 px-3 py-2 font-[family-name:var(--oxpins-font-two)] text-[15px] font-bold transition ${
                    isActive(item.href)
                      ? "text-[var(--oxpins-base)]"
                      : "text-[var(--oxpins-black)] hover:text-[var(--oxpins-base)]"
                  }`}
                >
                  {item.label}
                  <span className="text-xs">▾</span>
                </button>
                {dropOpen && (
                  <div className="absolute left-0 top-full min-w-[240px] rounded-xl bg-white p-3 shadow-[0_20px_50px_rgba(40,55,52,0.15)]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-[var(--oxpins-black)] hover:bg-[var(--oxpins-extra)] hover:text-[var(--oxpins-base)]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 font-[family-name:var(--oxpins-font-two)] text-[15px] font-bold transition ${
                  isActive(item.href)
                    ? "text-[var(--oxpins-base)]"
                    : "text-[var(--oxpins-black)] hover:text-[var(--oxpins-base)]"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/donate-now/"
            className="btn btn-primary !min-h-10 !px-3 !text-xs sm:!min-h-12 sm:!px-5 sm:!text-sm"
          >
            DONATE
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--oxpins-bdr-color)] text-lg text-[var(--oxpins-black)] xl:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[min(80vh,560px)] overflow-y-auto border-t border-[var(--oxpins-bdr-color)] bg-white xl:hidden">
          <div className="container-site flex flex-col gap-1 py-4 pb-6">
            {navLinks.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block py-3 text-base font-bold text-[var(--oxpins-black)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="mb-2 ml-3 flex flex-col gap-1 border-l border-[var(--oxpins-bdr-color)] pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="py-2 text-sm font-semibold text-[var(--oxpins-gray)]"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/donate-now/"
              className="btn btn-primary mt-3 w-full"
              onClick={() => setOpen(false)}
            >
              DONATE NOW
            </Link>
            <Link
              href="/become-volunteer/"
              className="btn btn-outline mt-2 w-full sm:hidden"
              onClick={() => setOpen(false)}
            >
              Become a volunteers
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
