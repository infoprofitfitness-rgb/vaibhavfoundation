import Image from "next/image";
import Link from "next/link";
import { footerLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-[var(--oxpins-black2)] text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(20,17,15,0.92), rgba(20,17,15,0.94)), url(${site.footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-site section-pad !pb-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src={site.logo}
              alt={site.name}
              width={170}
              height={70}
              className="mb-5 h-16 w-auto object-contain brightness-0 invert"
            />
            <p className="mb-6 text-[var(--oxpins-gray2,#CAB3A8)]">
              Vaibhav Foundation Welfare Society is a Jaipur-based welfare
              society working for education, healthcare, women empowerment, and
              community support.
            </p>
            <Link href="/donate-now/" className="btn btn-primary">
              Donate Now
            </Link>
          </div>

          <div>
            <h3 className="mb-5 font-[family-name:var(--oxpins-font-two)] text-xl font-800 font-extrabold">
              Links
            </h3>
            <ul className="space-y-3 text-[var(--oxpins-gray2,#CAB3A8)]">
              {footerLinks.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[var(--oxpins-primary)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-[family-name:var(--oxpins-font-two)] text-xl font-extrabold">
              Get Involved
            </h3>
            <ul className="space-y-3 text-[var(--oxpins-gray2,#CAB3A8)]">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[var(--oxpins-primary)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-4 mt-8 font-[family-name:var(--oxpins-font-two)] text-xl font-extrabold">
              Legal Policies
            </h3>
            <ul className="space-y-3 text-[var(--oxpins-gray2,#CAB3A8)]">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[var(--oxpins-primary)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-[family-name:var(--oxpins-font-two)] text-xl font-extrabold">
              Contact
            </h3>
            <p className="mb-4 text-[var(--oxpins-gray2,#CAB3A8)]">{site.address}</p>
            <p className="mb-2">
              <a
                href={`mailto:${site.email}`}
                className="text-[var(--oxpins-primary)] hover:underline"
              >
                {site.email}
              </a>
            </p>
            <p>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="text-[var(--oxpins-primary)] hover:underline"
              >
                {site.phone}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-5 text-sm text-[var(--oxpins-gray2,#CAB3A8)] md:flex-row md:items-center md:justify-between">
          <p>© All Copyright 2026 by {site.name}</p>
          <div className="flex flex-col gap-1 md:items-end">
            <a
              href={site.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--oxpins-primary)]"
            >
              WebsiteDevelopmentServicesInJaipurByFlowrushTechnologies
            </a>
            <a
              href={site.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--oxpins-primary)]"
            >
              WebsiteMaintenanceServicesInJaipurByFlowrushTechnologies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
