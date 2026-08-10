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
        <p className="mb-2 font-[family-name:var(--oxpins-font-three)] text-2xl text-[var(--oxpins-primary)]">
          {site.name}
        </p>
        <h1 className="mb-4 font-[family-name:var(--oxpins-font-two)] text-4xl font-extrabold md:text-5xl">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-2 text-sm text-white/85">
          {items.map((item, idx) => (
            <span key={`${item.label}-${idx}`} className="inline-flex items-center gap-2">
              {item.href ? (
                <Link href={item.href} className="hover:text-[var(--oxpins-primary)]">
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
              {idx < items.length - 1 && <span>/</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
