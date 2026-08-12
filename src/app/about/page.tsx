import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

const values = [
  "Compassion",
  "Honesty",
  "Transparency",
  "Social Responsibility",
  "Equality",
  "Service To Humanity",
];

const workFor = [
  "Education Support",
  "Healthcare Awareness",
  "Women Empowerment",
  "Child Welfare",
  "Community Development",
  "Social Welfare Activities",
];

const aboutGallery = Array.from({ length: 15 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/images/about/about-gallery-${n}.jpg`,
    alt: `Vaibhav Foundation Welfare Society community activity ${i + 1}`,
  };
});

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About" />

      <section className="section-pad">
        <div className="container-site grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <Image
              src={aboutGallery[0].src}
              alt={aboutGallery[0].alt}
              width={420}
              height={560}
              className="h-full min-h-[260px] rounded-2xl object-cover sm:min-h-[340px] sm:rounded-[24px]"
            />
            <div className="space-y-3 pt-4 sm:space-y-4 sm:pt-8">
              <Image
                src={aboutGallery[1].src}
                alt={aboutGallery[1].alt}
                width={420}
                height={240}
                className="h-36 w-full rounded-2xl object-cover sm:h-44 sm:rounded-[24px]"
              />
              <Image
                src={aboutGallery[4].src}
                alt={aboutGallery[4].alt}
                width={420}
                height={260}
                className="h-40 w-full rounded-2xl object-cover sm:h-48 sm:rounded-[24px]"
              />
            </div>
          </div>

          <div>
            <p className="eyebrow mb-2">{site.name}</p>
            <h2 className="heading mb-4 text-2xl sm:text-3xl md:text-4xl">
              About Vaibhav Foundation Welfare Society
            </h2>
            <p className="mb-4 text-[var(--oxpins-gray)]">
              Vaibhav Foundation Welfare Society is a registered welfare society
              based in Jaipur, working with a purpose to support people in need
              through education, healthcare awareness, food support, women
              empowerment, child welfare and community welfare initiatives.
            </p>
            <p className="mb-6 font-semibold text-[var(--oxpins-base)]">
              {site.regLabel}
            </p>
            <Link href="/donate-now/" className="btn btn-base">
              Discover More
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--oxpins-extra)]">
        <div className="container-site grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="eyebrow mb-2">About The Foundation</p>
            <h2 className="heading mb-4 text-2xl sm:text-3xl">Who We Are</h2>
            <p className="mb-4 text-[var(--oxpins-gray)]">
              Vaibhav Foundation Welfare Society is a newly established
              foundation started with the aim of serving society and helping
              underprivileged communities. We believe that small efforts can
              create meaningful change when they are done with honesty, care and
              dedication.
            </p>
            <p className="text-[var(--oxpins-gray)]">
              Our focus is to support people through practical welfare activities
              and build a strong network of donors, volunteers and well-wishers
              who want to contribute towards social good.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl sm:rounded-[24px]">
            <Image
              src={aboutGallery[5].src}
              alt={aboutGallery[5].alt}
              width={720}
              height={480}
              className="h-64 w-full object-cover sm:h-80"
            />
            <div className="bg-[var(--oxpins-base)] p-6 text-white sm:p-8">
              <div className="mb-2 text-4xl font-extrabold text-[var(--oxpins-primary)] sm:text-5xl">
                00
              </div>
              <p className="text-lg font-bold sm:text-xl">
                We’ve helped our poor children
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid gap-6 md:grid-cols-3 md:gap-8">
          {[
            [
              "Our Purpose",
              "Our purpose is to bring care, support and hope to people who need it the most. We aim to work for better education, basic healthcare awareness, women support, child welfare and community development.",
            ],
            [
              "Our Mission",
              "To support underprivileged people through meaningful welfare activities and create positive change in society.",
            ],
            [
              "Our Vision",
              "To build a society where every person receives dignity, care, opportunity and support for a better life.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-[var(--oxpins-bdr-color)] p-5 sm:rounded-[24px] sm:p-6"
            >
              <h3 className="heading mb-3 text-xl sm:text-2xl">{title}</h3>
              <p className="text-[var(--oxpins-gray)]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-[var(--oxpins-extra-two)]">
        <div className="container-site">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <p className="eyebrow mb-2">Our Work In Action</p>
            <h2 className="heading text-2xl sm:text-3xl">
              Moments From Our Community Initiatives
            </h2>
            <p className="mt-3 text-[var(--oxpins-gray)]">
              Real moments from Vaibhav Foundation Welfare Society activities in
              Jaipur — serving elders, supporting communities, and building care
              together.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {aboutGallery.map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-2xl bg-[var(--oxpins-extra)]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={480}
                  height={360}
                  className="h-40 w-full object-cover transition duration-500 hover:scale-105 sm:h-44 md:h-48"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="heading mb-6 text-2xl sm:text-3xl">Our Values</h2>
            <div className="grid grid-cols-2 gap-3">
              {values.map((value) => (
                <div
                  key={value}
                  className="rounded-2xl bg-[var(--oxpins-extra)] px-4 py-3 font-semibold text-[var(--oxpins-black)]"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="heading mb-6 text-2xl sm:text-3xl">What We Work For</h2>
            <ul className="space-y-3">
              {workFor.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--oxpins-primary)] text-xs font-bold">
                    ✓
                  </span>
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--oxpins-extra)]">
        <div className="container-site max-w-4xl text-center">
          <h2 className="heading mb-4 text-2xl sm:text-3xl">Why We Started</h2>
          <p className="mb-8 text-[var(--oxpins-gray)]">
            Vaibhav Foundation Welfare Society was started with a simple thought
            — to help people, support society and create a platform where
            everyone can contribute towards meaningful social change.
          </p>
          <h3 className="heading mb-3 text-xl sm:text-2xl">
            Join Us In Serving Society
          </h3>
          <p className="mb-6 text-[var(--oxpins-gray)]">
            Your support can help us reach more people and create a positive
            impact in the community. Join us as a donor, volunteer or supporter.
          </p>
          <Link href="/donate-now/" className="btn btn-base">
            Donate Now
          </Link>
        </div>
      </section>
    </>
  );
}
