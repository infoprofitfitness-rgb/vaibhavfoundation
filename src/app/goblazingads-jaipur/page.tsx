import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GoBlazing Ads Jaipur",
  description:
    "Social media marketing services by GoBlazing Ads - digital marketing agency in Jaipur.",
};

const GOBLAZING_URL = "https://www.goblazingads.com/";

export default function GoBlazingAdsJaipurPage() {
  return (
    <>
      <PageHeader title="GoBlazing Ads Jaipur" />

      <section className="section-pad">
        <div className="container-site max-w-3xl">
          <p className="eyebrow mb-2">Digital Marketing Partner</p>
          <h2 className="heading mb-5 text-2xl sm:text-3xl md:text-4xl">
            GoBlazing Ads — Digital Marketing Agency In Jaipur
          </h2>

          <p className="mb-6 text-lg leading-relaxed text-[var(--oxpins-gray)]">
            <a
              href={GOBLAZING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--oxpins-base)] underline decoration-[var(--oxpins-primary)] underline-offset-4 transition hover:text-[var(--oxpins-black)]"
            >
              Social media marketing services by GoBlazing Ads - digital
              marketing agency in Jaipur very well executed and complied with
              our company
            </a>
          </p>

          <p className="mb-8 text-[var(--oxpins-gray)]">
            Visit{" "}
            <a
              href={GOBLAZING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[var(--oxpins-base)] hover:underline"
            >
              https://www.goblazingads.com/
            </a>{" "}
            to learn more about their performance marketing, SEO, social media,
            branding, and web development services in Jaipur.
          </p>

          <a
            href={GOBLAZING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-base"
          >
            Visit GoBlazing Ads
          </a>
        </div>
      </section>
    </>
  );
}
