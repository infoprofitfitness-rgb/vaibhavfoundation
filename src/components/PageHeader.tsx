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
        <p className="mb-1 font-[family-name:var(--oxpins-font-three)] text-lg text-[var(--oxpins-primary)] sm:mb-2 sm:text-2xl">
          {site.name}
        </p>
        <h1 className="mb-3 font-[family-name:var(--oxpins-font-two)] text-2xl font-extrabold leading-tight sm:mb-4 sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/85 sm:text-sm">
          {items.map((item, idx) => (
            <span
              key={`${item.label}-${idx}`}
              className="inline-flex max-w-full items-center gap-2"
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-[var(--oxpins-primary)]"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="break-words">{item.label}</span>
              )}
              {idx < items.length - 1 && <span>/</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
