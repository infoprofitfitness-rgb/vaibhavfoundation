import Link from "next/link";
import { site } from "@/lib/site";

type Props = {
  title: string;
  crumbs?: { label: string; href?: string }[];
};

export default function PageHeader({ title, crumbs }: Props) {
  const items = crumbs ?? [
    { label: "Home", href: "/" },
    { label: title },
  ];

  return (
    <section
      className="page-header"
      style={{ backgroundImage: `url(${site.pageHeaderBg})` }}
    >
      <div className="container-site page-header-inner fade-up">
        <div className="page-header-content">
          <p className="mb-2 font-[family-name:var(--oxpins-font-three)] text-lg leading-snug text-[var(--oxpins-primary)] sm:text-2xl">
            {site.name}
          </p>
          <h1 className="font-[family-name:var(--oxpins-font-two)] text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h1>

          <nav className="page-breadcrumb" aria-label="Breadcrumb">
            {items.map((item, idx) => (
              <span
                key={`${item.label}-${idx}`}
                className="inline-flex items-center gap-2"
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="font-semibold text-white transition hover:text-[var(--oxpins-primary)]"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-medium text-white/80">{item.label}</span>
                )}
                {idx < items.length - 1 && (
                  <span className="text-white/45" aria-hidden>
                    /
                  </span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
