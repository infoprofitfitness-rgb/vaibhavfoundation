import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" />
      <section className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-2">Contact us</p>
            <h2 className="heading mb-4 text-3xl md:text-4xl">
              Contact with us
            </h2>
            <p className="mb-8 text-[var(--oxpins-gray)]">
              Feel free to write us anytime
            </p>

            <div className="space-y-5">
              <div className="rounded-[20px] bg-[var(--oxpins-extra)] p-5">
                <div className="text-sm uppercase tracking-wide text-[var(--oxpins-gray)]">
                  Helpline
                </div>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="text-xl font-extrabold text-[var(--oxpins-black)]"
                >
                  {site.phone}
                </a>
              </div>
              <div className="rounded-[20px] bg-[var(--oxpins-extra)] p-5">
                <div className="text-sm uppercase tracking-wide text-[var(--oxpins-gray)]">
                  Send email
                </div>
                <a
                  href={`mailto:${site.email}`}
                  className="text-xl font-extrabold text-[var(--oxpins-black)]"
                >
                  {site.email}
                </a>
              </div>
              <div className="rounded-[20px] bg-[var(--oxpins-extra)] p-5">
                <div className="text-sm uppercase tracking-wide text-[var(--oxpins-gray)]">
                  Address
                </div>
                <p className="text-lg font-bold text-[var(--oxpins-black)]">
                  21/80, Kaveri Path, Mansarovar,
                  <br />
                  Jaipur - 302020, Rajasthan, India
                </p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
