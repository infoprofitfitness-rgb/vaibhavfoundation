import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Volunteer",
};

const ways = [
  "Education support drives",
  "Food and essential item distribution",
  "Healthcare awareness activities",
  "Women empowerment programmes",
  "Child welfare activities",
  "Community awareness campaigns",
  "Event support and coordination",
];

export default function VolunteerPage() {
  return (
    <>
      <PageHeader title="Volunteer" />

      <section className="section-pad">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-2">Vaibhav Foundation Welfare Society</p>
            <h2 className="heading mb-4 text-3xl md:text-4xl">
              Become A Volunteer And Serve Society
            </h2>
            <p className="mb-6 text-[var(--oxpins-gray)]">
              Join Vaibhav Foundation Welfare Society as a volunteer and support
              our mission to help people through education, healthcare awareness,
              women empowerment, food support and community welfare activities.
            </p>
            <Link href="/become-volunteer/" className="btn btn-base">
              Join As Volunteer
            </Link>
          </div>
          <Image
            src="/images/close-up-people-volunteer-teamwork-putting-finger-star-shapehands-togetherstack-handsunity-teamwork-world-environment-day_640221-299.jpg"
            alt="Volunteers"
            width={640}
            height={420}
            className="rounded-[30px] object-cover"
          />
        </div>
      </section>

      <section className="section-pad bg-[var(--oxpins-extra)]">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <Image
            src="/images/kid-playing-with-paper-plane_23-2151582145.jpg"
            alt="Why volunteer"
            width={640}
            height={420}
            className="rounded-[30px] object-cover"
          />
          <div>
            <p className="eyebrow mb-2">Why Volunteer With Us</p>
            <h2 className="heading mb-4 text-3xl">
              Your Time Can Create A Real Difference
            </h2>
            <p className="mb-6 text-[var(--oxpins-gray)]">
              Volunteering is a meaningful way to give back to society. By
              joining us, you can support social causes, help people in need and
              become a part of positive community change.
            </p>
            <Link href="/contact/" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="heading mb-5 text-3xl">How Volunteers Can Help</h2>
            <ul className="space-y-3">
              {ways.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--oxpins-primary)] text-xs font-bold">
                    ✓
                  </span>
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[28px] bg-[var(--oxpins-base)] p-8 text-white">
            <p className="mb-2 font-[family-name:var(--oxpins-font-three)] text-2xl text-[var(--oxpins-primary)]">
              Who Can Join
            </p>
            <h3 className="mb-3 font-[family-name:var(--oxpins-font-two)] text-2xl font-extrabold">
              Everyone Can Contribute
            </h3>
            <p className="text-white/90">
              Students, professionals, homemakers, social workers and anyone who
              wants to serve society can join us as a volunteer. No special
              experience is required — only dedication, honesty and willingness
              to help.
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-20 text-white"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,113,93,0.92), rgba(20,17,15,0.88)), url(/images/portrait-school-kids_1030147-7737.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-site max-w-3xl text-center">
          <h2 className="mb-4 font-[family-name:var(--oxpins-font-two)] text-3xl font-extrabold">
            Start Your Volunteering Journey With Us
          </h2>
          <p className="mb-6 text-white/90">
            Become a part of Vaibhav Foundation Welfare Society and help us bring
            care, hope and support to people who need it the most.
          </p>
          <a href="tel:+919799599955" className="btn btn-primary">
            Call Now
          </a>
        </div>
      </section>
    </>
  );
}
