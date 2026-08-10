"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_10px_30px_rgba(40,55,52,0.08)]">
      <div className="hidden border-b border-[var(--oxpins-bdr-color)] bg-[var(--oxpins-extra)] lg:block">
        <div className="container-site flex items-center justify-between gap-4 py-2.5 text-sm text-[var(--oxpins-gray)]">
          <Link
            href="/become-volunteer/"
            className="inline-flex items-center gap-2 font-semibold text-[var(--oxpins-base)]"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--oxpins-primary)] text-xs text-[var(--oxpins-black)]">
              ♥
            </span>
            Become a volunteers
          </Link>
          <div className="flex flex-wrap items-center gap-6">
            <div>
              <div className="text-xs uppercase tracking-wide">Helpline</div>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="font-bold text-[var(--oxpins-black)]"
              >
                {site.phoneDisplay}
              </a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide">Send email</div>
              <a
                href={`mailto:${site.email}`}
                className="font-bold text-[var(--oxpins-black)]"
              >
                {site.email}
              </a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide">
                {site.addressShort}
              </div>
              <div className="font-bold text-[var(--oxpins-black)]">
                {site.addressRegion}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-site flex items-center justify-between gap-4 py-3">
        <Link href="/" className="relative z-10 shrink-0">
          <Image
            src={site.logo}
            alt={site.name}
            width={160}
            height={70}
            className="h-14 w-auto object-contain md:h-16"
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
                  className={`flex items-center gap-1 px-3 py-2 font-[family-name:var(--oxpins-font-two)] text-[15px] font-700 font-bold transition ${
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

        <div className="flex items-center gap-3">
          <Link href="/donate-now/" className="btn btn-primary hidden sm:inline-flex">
            DONATE NOW
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--oxpins-bdr-color)] text-[var(--oxpins-black)] xl:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--oxpins-bdr-color)] bg-white xl:hidden">
          <div className="container-site flex flex-col gap-1 py-4">
            {navLinks.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block py-2 font-bold text-[var(--oxpins-black)]"
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
                        className="py-1.5 text-sm font-semibold text-[var(--oxpins-gray)]"
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
              className="btn btn-primary mt-2"
              onClick={() => setOpen(false)}
            >
              DONATE NOW
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
