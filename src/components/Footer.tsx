import Image from "next/image";
import Link from "next/link";
import { footerLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white bg-[linear-gradient(160deg,#00715d_0%,#1a3d36_42%,#14110f_100%)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,212,90,0.12),transparent_35%)]" />

      <div className="container-site relative z-10 py-16 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-4">
            <Image
              src={site.logo}
              alt={site.name}
              width={170}
              height={70}
              className="mb-5 h-14 w-auto object-contain brightness-0 invert md:h-16"
            />
            <p className="mb-6 max-w-sm text-[15px] leading-relaxed text-white/75">
              Vaibhav Foundation Welfare Society is a Jaipur-based welfare
              society working for education, healthcare, women empowerment, and
              community support.
            </p>
            <Link href="/donate-now/" className="btn btn-primary">
              Donate Now
            </Link>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 font-[family-name:var(--oxpins-font-two)] text-lg font-extrabold">
              Links
            </h3>
            <ul className="space-y-2.5 text-[15px] text-white/75">
              {footerLinks.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-[var(--oxpins-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 font-[family-name:var(--oxpins-font-two)] text-lg font-extrabold">
              Get Involved
            </h3>
            <ul className="space-y-2.5 text-[15px] text-white/75">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-[var(--oxpins-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 font-[family-name:var(--oxpins-font-two)] text-lg font-extrabold">
              Legal Policies
            </h3>
            <ul className="space-y-2.5 text-[15px] text-white/75">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-[var(--oxpins-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 font-[family-name:var(--oxpins-font-two)] text-lg font-extrabold">
              Contact
            </h3>
            <ul className="space-y-3 text-[15px] text-white/75">
              <li>{site.address}</li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-[var(--oxpins-primary)] transition hover:underline"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="text-[var(--oxpins-primary)] transition hover:underline"
                >
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/15">
        <div className="container-site flex flex-col gap-3 py-5 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
          <p>© All Copyright 2026 by {site.name}</p>
          <div className="flex flex-col gap-1 md:items-end">
            <a
              href={site.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[var(--oxpins-primary)]"
            >
              WebsiteDevelopmentServicesInJaipurByFlowrushTechnologies
            </a>
            <a
              href={site.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[var(--oxpins-primary)]"
            >
              WebsiteMaintenanceServicesInJaipurByFlowrushTechnologies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
