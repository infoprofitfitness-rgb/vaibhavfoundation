import PageHeader from "@/components/PageHeader";
import VolunteerForm from "@/components/VolunteerForm";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Become volunteer",
};

export default function BecomeVolunteerPage() {
  return (
    <>
      <PageHeader title="Become volunteer" />
      <section className="section-pad">
        <div className="container-site grid items-start gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-2">Become a volunteer</p>
            <h2 className="heading mb-4 text-3xl md:text-4xl">
              Let’s join our community to become a volunteer
            </h2>
            <Image
              src="/images/become-volunteer-img-1.jpg"
              alt="Become a volunteer"
              width={640}
              height={420}
              className="mb-6 rounded-[28px] object-cover"
            />
            <h3 className="heading mb-3 text-2xl">Requirements</h3>
            <p className="mb-4 text-[var(--oxpins-gray)]">
              Join with honesty, care and responsibility. Share your details and
              our team will guide you about upcoming welfare drives and volunteer
              opportunities.
            </p>
            <ul className="mb-6 space-y-2 text-[var(--oxpins-gray)]">
              <li>• Willingness to serve society with dedication</li>
              <li>• Respect for beneficiaries and team members</li>
              <li>• Commitment during events and community drives</li>
            </ul>
            <div className="rounded-[20px] bg-[var(--oxpins-extra)] p-5">
              <div className="text-sm uppercase tracking-wide text-[var(--oxpins-gray)]">
                Call Anytime
              </div>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="text-xl font-extrabold text-[var(--oxpins-black)]"
              >
                {site.phone}
              </a>
            </div>
          </div>
          <VolunteerForm />
        </div>
      </section>
    </>
  );
}
