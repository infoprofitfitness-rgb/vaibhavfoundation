import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Donate Now",
};

const helpAreas = [
  "Education support for children",
  "Food and essential item distribution",
  "Healthcare awareness activities",
  "Women empowerment programmes",
  "Child welfare support",
  "Community welfare drives",
];

export default function DonateNowPage() {
  return (
    <>
      <PageHeader title="Donate Now" />

      <section className="section-pad">
        <div className="container-site grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="eyebrow mb-2">Make A Donation</p>
            <h2 className="heading mb-4 text-2xl sm:text-3xl md:text-4xl">
              Your Support Can Help Someone In Need
            </h2>
            <p className="mb-6 text-[var(--oxpins-gray)]">
              Your contribution can support Vaibhav Foundation Welfare Society in
              carrying out social welfare activities for education, healthcare
              awareness, women empowerment, food support and community
              development.
            </p>
            <Link href="#donate-methods" className="btn btn-base">
              Donate Now
            </Link>
          </div>
          <Image
            src="/images/view-hands-holding-red-heart-represent-affection_23-2151728375.jpg"
            alt="Donate now"
            width={640}
            height={420}
            className="rounded-[30px] object-cover"
          />
        </div>
      </section>

      <section id="donate-methods" className="section-pad bg-[var(--oxpins-extra)]">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-5 sm:rounded-[28px] sm:p-6 md:p-8">
            <h3 className="heading mb-3 text-xl sm:text-2xl">Donate Via UPI</h3>
            <p className="mb-5 text-sm text-[var(--oxpins-gray)] sm:text-base">
              Scan the QR Code below using any UPI-enabled app such as Google
              Pay, PhonePe, Paytm, BHIM, or your banking app.
            </p>
            <Image
              src={site.qrImage}
              alt="UPI QR Code"
              width={320}
              height={320}
              className="mx-auto mb-5 h-auto w-full max-w-[260px] rounded-2xl border border-[var(--oxpins-bdr-color)] sm:max-w-[320px]"
            />
            <p className="mb-1 text-sm text-[var(--oxpins-gray)]">UPI ID:</p>
            <p className="mb-4 break-all font-bold text-[var(--oxpins-base)]">
              {site.upiId}
            </p>
            <p className="text-sm text-[var(--oxpins-gray)]">Account Name:</p>
            <p className="font-bold">{site.bank.accountName}</p>
          </div>

          <div className="rounded-2xl bg-white p-5 sm:rounded-[28px] sm:p-6 md:p-8">
            <h3 className="heading mb-3 text-xl sm:text-2xl">
              Donate Via Bank Transfer
            </h3>
            <p className="mb-5 text-[var(--oxpins-gray)]">Bank Details</p>
            <dl className="space-y-4">
              {[
                ["Account Name", site.bank.accountName],
                ["Bank Name", site.bank.bankName],
                ["Account Number", site.bank.accountNumber],
                ["IFSC Code", site.bank.ifsc],
                ["Branch", site.bank.branch],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-sm text-[var(--oxpins-gray)]">{label}</dt>
                  <dd className="font-bold text-[var(--oxpins-black)]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="heading mb-4 text-3xl">Your Support Matters</h2>
            <p className="mb-6 text-[var(--oxpins-gray)]">
              Together, we can create opportunities, uplift communities, and
              bring positive change to countless lives. Thank you for supporting
              Vaibhav Foundation Welfare Society and helping us continue our
              mission of service and compassion.
            </p>
            <h3 className="heading mb-4 text-2xl">Where Your Donation Helps</h3>
            <ul className="space-y-3">
              {helpAreas.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--oxpins-primary)] text-xs font-bold">
                    ✓
                  </span>
                  <span className="text-[var(--oxpins-gray)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[28px] bg-[var(--oxpins-base)] p-8 text-white">
            <h3 className="mb-3 font-[family-name:var(--oxpins-font-two)] text-2xl font-extrabold">
              Registered Welfare Society
            </h3>
            <p className="mb-4 text-white/90">
              Vaibhav Foundation Welfare Society is a registered welfare society
              based in Jaipur, working with a purpose to support people in need
              through meaningful social welfare initiatives.
            </p>
            <p className="font-bold text-[var(--oxpins-primary)]">
              Reg. No.: {site.regNo}
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--oxpins-extra-two)]">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-2">Contact Us</p>
            <h2 className="heading mb-3 text-3xl">Contact For Donation</h2>
            <h3 className="mb-4 text-xl font-bold">Need Help With Donation?</h3>
            <p className="mb-6 text-[var(--oxpins-gray)]">
              For donation details, payment confirmation or support-related
              queries, you can contact us directly.
            </p>
            <p className="mb-2">
              <strong>Mobile:</strong> {site.phone}
            </p>
            <p className="mb-2">
              <strong>Email:</strong> {site.email}
            </p>
            <p>
              <strong>Address:</strong> {site.address}
            </p>
          </div>
          <div
            className="rounded-[28px] p-8 text-white"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(0,113,93,0.92), rgba(20,17,15,0.9)), url(/images/portrait-school-kids_1030147-7737.jpg)",
              backgroundSize: "cover",
            }}
          >
            <h3 className="mb-3 font-[family-name:var(--oxpins-font-two)] text-2xl font-extrabold">
              Together, We Can Make A Difference
            </h3>
            <p className="mb-6 text-white/90">
              Your support can bring hope, care and opportunity to people who
              need it the most.
            </p>
            <Link href="#donate-methods" className="btn btn-primary">
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
