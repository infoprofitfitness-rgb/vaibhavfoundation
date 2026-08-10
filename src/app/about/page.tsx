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

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About" />

      <section className="section-pad">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/about-four-img-1.jpg"
              alt="About foundation"
              width={360}
              height={420}
              className="h-full rounded-[24px] object-cover"
            />
            <div className="space-y-4 pt-8">
              <Image
                src="/images/about-four-img-2.jpg"
                alt="Community work"
                width={360}
                height={200}
                className="rounded-[24px] object-cover"
              />
              <Image
                src="/images/high-angle-people-celebrating-eid-al-fitr_23-2151205071.jpg"
                alt="Together for change"
                width={360}
                height={220}
                className="rounded-[24px] object-cover"
              />
            </div>
          </div>

          <div>
            <p className="eyebrow mb-2">{site.name}</p>
            <h2 className="heading mb-4 text-3xl md:text-4xl">
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
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-2">About The Foundation</p>
            <h2 className="heading mb-4 text-3xl">Who We Are</h2>
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
          <div className="rounded-[24px] bg-[var(--oxpins-base)] p-8 text-white">
            <div className="mb-2 text-5xl font-extrabold text-[var(--oxpins-primary)]">
              00
            </div>
            <p className="text-xl font-bold">We’ve helped our poor children</p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid gap-8 md:grid-cols-3">
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
              className="rounded-[24px] border border-[var(--oxpins-bdr-color)] p-6"
            >
              <h3 className="heading mb-3 text-2xl">{title}</h3>
              <p className="text-[var(--oxpins-gray)]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-[var(--oxpins-extra-two)]">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="heading mb-6 text-3xl">Our Values</h2>
            <div className="grid grid-cols-2 gap-3">
              {values.map((value) => (
                <div
                  key={value}
                  className="rounded-2xl bg-white px-4 py-3 font-semibold text-[var(--oxpins-black)] shadow-sm"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="heading mb-6 text-3xl">What We Work For</h2>
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

      <section className="section-pad">
        <div className="container-site max-w-4xl text-center">
          <h2 className="heading mb-4 text-3xl">Why We Started</h2>
          <p className="mb-8 text-[var(--oxpins-gray)]">
            Vaibhav Foundation Welfare Society was started with a simple thought
            — to help people, support society and create a platform where
            everyone can contribute towards meaningful social change.
          </p>
          <h3 className="heading mb-3 text-2xl">Join Us In Serving Society</h3>
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
