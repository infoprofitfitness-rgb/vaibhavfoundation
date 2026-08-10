import FaqAccordion from "@/components/FaqAccordion";
import HeroSlider from "@/components/HeroSlider";
import { focusAreas, initiatives, site } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
const helpWays = [
  {
    title: "Donate",
    text: "Your contribution can help us support education, food, healthcare awareness and welfare activities.",
    href: "/donate-now/",
  },
  {
    title: "Volunteer",
    text: "Join us and give your time to support social causes and community programmes.",
    href: "/volunteer/",
  },
  {
    title: "Partner",
    text: "Businesses, schools, colleges and local groups can collaborate with us for welfare drives.",
    href: "/contact/",
  },
  {
    title: "Spread Awareness",
    text: "Share our mission with your friends, family and community to help us reach more people.",
    href: "/news/",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* About */}
      <section className="section-pad relative overflow-hidden">
        <div className="container-site grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-[30px]">
              <Image
                src="/images/vaibhav_foundation_high_quality.jpg.webp"
                alt={site.name}
                width={640}
                height={720}
                className="h-auto w-full object-cover"
              />
            </div>
            <Image
              src="/images/about-one-shape-2.png"
              alt=""
              width={120}
              height={120}
              className="float-soft absolute -left-4 top-10 hidden w-20 sm:block"
            />
            <Image
              src="/images/curved-circle-icon.png"
              alt=""
              width={140}
              height={140}
              className="absolute -bottom-6 right-6 hidden w-28 sm:block"
            />
          </div>

          <div className="fade-up">
            <p className="eyebrow mb-2">{site.name}</p>
            <h2 className="heading mb-4 text-2xl sm:mb-5 sm:text-3xl md:text-4xl">
              About Vaibhav Foundation Welfare Society
            </h2>
            <p className="mb-4 text-[var(--oxpins-gray)]">
              Vaibhav Foundation Welfare Society is a new welfare foundation
              started with the purpose of helping people in need and supporting
              society through meaningful social initiatives. We aim to work with
              honesty, care and responsibility to create a positive impact in the
              community.
            </p>
            <p className="mb-6 font-semibold text-[var(--oxpins-base)]">
              {site.regLabel}
            </p>

            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[20px] bg-[var(--oxpins-extra)] p-5">
                <h3 className="mb-1 font-[family-name:var(--oxpins-font-two)] text-lg font-extrabold">
                  Join our team
                </h3>
                <p className="text-sm text-[var(--oxpins-gray)]">
                  Together, we can make a difference.
                </p>
              </div>
              <div className="rounded-[20px] bg-[var(--oxpins-extra)] p-5">
                <h3 className="mb-1 font-[family-name:var(--oxpins-font-two)] text-lg font-extrabold">
                  Start donating
                </h3>
                <p className="text-sm text-[var(--oxpins-gray)]">
                  Your support can change lives.
                </p>
              </div>
            </div>

            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="heading mb-2 text-xl">Mission</h3>
                <p className="text-sm text-[var(--oxpins-gray)]">
                  Our mission is to support underprivileged people through
                  education, healthcare awareness, food support, women
                  empowerment and community welfare activities.
                </p>
              </div>
              <div>
                <h3 className="heading mb-2 text-xl">Vision</h3>
                <p className="text-sm text-[var(--oxpins-gray)]">
                  Our vision is to build a better society where every person gets
                  dignity, care, support and equal opportunities for a better
                  life.
                </p>
              </div>
            </div>

            <Link href="/about/" className="btn btn-base">
              Know More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section
        className="section-pad relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(249,244,232,0.95), rgba(249,244,232,0.95)), url(/images/service-bg-1.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="container-site">
          <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
            <p className="eyebrow mb-2">{site.name}</p>
            <h2 className="heading mb-4 text-2xl sm:text-3xl md:text-4xl">
              Our Focus Areas
            </h2>
            <p className="text-[var(--oxpins-gray)]">
              We focus on key areas that help improve lives, strengthen
              communities, and provide support to those who need it most. Through
              dedicated welfare initiatives, we strive to create a more caring,
              inclusive, and empowered society.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area, idx) => (
              <Link
                key={area.title}
                href={area.href}
                className="group rounded-2xl bg-white p-5 shadow-[0_15px_40px_rgba(40,55,52,0.06)] transition hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(0,113,93,0.12)] sm:rounded-[24px] sm:p-7"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--oxpins-extra)] text-2xl text-[var(--oxpins-base)] transition group-hover:bg-[var(--oxpins-base)] group-hover:text-white">
                  {idx + 1}
                </div>
                <h3 className="heading mb-2 text-xl">{area.title}</h3>
                <p className="text-[var(--oxpins-gray)]">{area.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Support */}
      <section className="section-pad">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-2">Why Support Us</p>
            <h2 className="heading mb-4 text-2xl sm:mb-5 sm:text-3xl md:text-4xl">
              Why Support Vaibhav Foundation Welfare Society?
            </h2>
            <p className="mb-6 text-[var(--oxpins-gray)]">
              Join hands with a trusted organization dedicated to uplifting
              communities through responsible and transparent welfare activities.
              Together, we can bring positive change to more lives.
            </p>
            <ul className="mb-8 space-y-3">
              {[
                "Registered welfare society based in Jaipur.",
                "Focused on real social welfare activities.",
                "Working with honesty and transparency.",
                "Open for volunteers, donors and social partners.",
                "Committed to serving people with care and responsibility.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[var(--oxpins-gray)]">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--oxpins-primary)] text-xs font-bold text-[var(--oxpins-black)]">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/volunteer/" className="btn btn-base">
              Become A Volunteer
            </Link>
          </div>
          <div
            className="relative overflow-hidden rounded-2xl p-6 text-white sm:rounded-[30px] sm:p-10"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(0,113,93,0.92), rgba(40,55,52,0.9)), url(/images/why-choose-bg.png)",
              backgroundSize: "cover",
            }}
          >
            <Image
              src="/images/high-angle-people-celebrating-eid-al-fitr_23-2151205071.jpg"
              alt="Community support"
              width={640}
              height={420}
              className="mb-5 h-44 w-full rounded-2xl object-cover sm:mb-6 sm:h-56 sm:rounded-[24px]"
            />
            <div className="text-4xl font-extrabold text-[var(--oxpins-primary)] sm:text-5xl">
              00 +
            </div>
            <p className="mt-2 font-[family-name:var(--oxpins-font-two)] text-xl font-bold">
              Years of Experience
            </p>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="section-pad bg-[var(--oxpins-extra)]">
        <div className="container-site">
          <div className="mb-8 text-center sm:mb-12">
            <p className="eyebrow mb-2">Initiatives</p>
            <h2 className="heading text-2xl sm:text-3xl md:text-4xl">
              Our Initiatives
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {initiatives.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[24px] bg-white shadow-[0_15px_40px_rgba(40,55,52,0.06)]"
              >
                <div className="relative h-52">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="heading mb-2 text-xl">{item.title}</h3>
                  <p className="text-sm text-[var(--oxpins-gray)]">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="section-pad">
        <div className="container-site">
          <div className="mb-8 text-center sm:mb-12">
            <h2 className="heading text-2xl sm:text-3xl md:text-4xl">
              How You Can Help
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {helpWays.map((item, idx) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-[24px] border border-[var(--oxpins-bdr-color)] bg-[var(--oxpins-extra)] p-6 transition hover:border-[var(--oxpins-base)] hover:bg-white"
              >
                <div className="mb-4 text-3xl font-extrabold text-[var(--oxpins-base)]">
                  0{idx + 1}
                </div>
                <h3 className="heading mb-2 text-xl">{item.title}</h3>
                <p className="text-sm text-[var(--oxpins-gray)]">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-14 text-white sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,113,93,0.92), rgba(20,17,15,0.88)), url(/images/view-hands-holding-red-heart-represent-affection_23-2151728375.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-site max-w-3xl text-center fade-up">
          <p className="eyebrow mb-3 !text-[var(--oxpins-primary)]">
            Be A Part Of A Better Tomorrow
          </p>
          <h2 className="mb-6 font-[family-name:var(--oxpins-font-two)] text-xl font-extrabold leading-snug sm:text-3xl md:text-4xl">
            Your support can help us bring care, hope and opportunity to people
            who need it the most. Join Vaibhav Foundation Welfare Society as a
            donor, volunteer or supporter.
          </h2>
          <Link href="/donate-now/" className="btn btn-primary">
            Donate Now
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="section-pad"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.94)), url(/images/faq-one-bg.png)",
          backgroundSize: "cover",
        }}
      >
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-2">Recently asked questions</p>
            <h2 className="heading mb-5 text-2xl sm:text-3xl md:text-4xl">
              Frequently Asked Questions
            </h2>
            <Link href="/contact/" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* Contact strip */}
      <section className="section-pad bg-[var(--oxpins-extra-two)]">
        <div className="container-site">
          <div className="mb-8 max-w-3xl">
            <h2 className="heading mb-3 text-2xl sm:text-3xl md:text-4xl">
              Contact Vaibhav Foundation Welfare Society
            </h2>
            <p className="text-[var(--oxpins-gray)]">
              Connect with us to donate, volunteer, collaborate or support our
              upcoming welfare initiatives.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Address", site.address],
              ["Email", site.email],
              ["Mobile", site.phone],
              ["Reg. No.", site.regNo],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-[20px] bg-white p-5 shadow-[0_10px_30px_rgba(40,55,52,0.05)]"
              >
                <div className="mb-1 text-sm font-bold uppercase tracking-wide text-[var(--oxpins-base)]">
                  {label}
                </div>
                <div className="break-words font-semibold text-[var(--oxpins-black)]">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
