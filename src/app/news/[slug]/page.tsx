import PageHeader from "@/components/PageHeader";
import { newsPosts } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);
  return { title: post?.title ?? "News" };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <PageHeader title={post.title} crumbs={[{ label: "Home", href: "/" }, { label: "News", href: "/news/" }, { label: post.title }]} />
      <section className="section-pad">
        <div className="container-site max-w-3xl">
          <div className="relative mb-8 h-72 overflow-hidden rounded-[28px] md:h-96">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>
          <div className="mb-4 text-sm text-[var(--oxpins-gray)]">
            {post.date} · Boss Admin
          </div>
          <h1 className="heading mb-6 text-3xl md:text-4xl">{post.title}</h1>
          <p className="mb-4 text-[var(--oxpins-gray)]">
            Vaibhav Foundation Welfare Society continues to share updates and
            stories related to social welfare, community support and foundation
            initiatives.
          </p>
          <p className="mb-8 text-[var(--oxpins-gray)]">
            Stay connected with our Media Centre for news about education
            support, healthcare awareness, women empowerment and community
            welfare activities in Jaipur.
          </p>
          <Link href="/news/" className="btn btn-outline">
            Back to News
          </Link>
        </div>
      </section>
    </>
  );
}
