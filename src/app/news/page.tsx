import PageHeader from "@/components/PageHeader";
import { newsPosts } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "News",
};

export default function NewsPage() {
  return (
    <>
      <PageHeader title="News" crumbs={[{ label: "Home", href: "/" }, { label: "Media Centre" }]} />
      <section className="section-pad">
        <div className="container-site grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {newsPosts.map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-[24px] border border-[var(--oxpins-bdr-color)] bg-white shadow-[0_15px_40px_rgba(40,55,52,0.05)]"
            >
              <div className="relative h-52">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <div className="mb-2 text-sm text-[var(--oxpins-gray)]">
                  {post.date} · Boss Admin
                </div>
                <h2 className="heading mb-3 text-xl">{post.title}</h2>
                <Link
                  href={`/news/${post.slug}/`}
                  className="font-bold text-[var(--oxpins-base)] hover:underline"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
