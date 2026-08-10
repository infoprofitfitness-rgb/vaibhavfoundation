import PageHeader from "@/components/PageHeader";
import PolicyContent from "@/components/PolicyContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donation Policy",
};

export default function DonationPolicyPage() {
  return (
    <>
      <PageHeader title="Donation Policy" />
      <PolicyContent
        sections={[
          {
            title: "Description",
            paragraphs: [
              "Vaibhav Foundation Welfare Society accepts donations from individuals, well-wishers, volunteers, supporters and organizations who wish to contribute towards social welfare and community development activities.",
            ],
          },
          {
            title: "How Donations Are Used",
            paragraphs: [
              "Donations received by Vaibhav Foundation Welfare Society may be used for:",
            ],
            bullets: [
              "Education support",
              "Healthcare awareness",
              "Women empowerment activities",
              "Food and essential item distribution",
              "Child welfare initiatives",
              "Community welfare programmes",
              "Social development activities",
              "Other foundation-related welfare work",
            ],
          },
          {
            title: "Donation Is Voluntary",
            paragraphs: [
              "All donations made to Vaibhav Foundation Welfare Society are voluntary. Donors are requested to donate only after understanding the purpose of the foundation and the cause they wish to support.",
            ],
          },
          {
            title: "Donation Records",
            paragraphs: [
              "Donation details may be recorded for internal and official foundation purposes. Donors may contact the foundation for donation confirmation or acknowledgement, if required.",
            ],
          },
          {
            title: "Responsible Use Of Donations",
            paragraphs: [
              "Vaibhav Foundation Welfare Society aims to use donations responsibly for welfare activities, operational support, community programmes and foundation-related initiatives.",
            ],
          },
          {
            title: "Cause-Based Donations",
            paragraphs: [
              "Donors may choose to support a specific cause such as education, healthcare awareness, women empowerment, food distribution or general welfare. However, the final use of funds may depend on current needs, availability and programme requirements.",
            ],
          },
          {
            title: "Donation Payment Details",
            paragraphs: [
              "Donation payment details, bank details, UPI details or other payment methods may be shared directly by the foundation through official communication channels.",
              "Donors are requested to confirm payment details before making any donation.",
            ],
          },
          {
            title: "Donation Refunds",
            paragraphs: [
              "Donations are generally considered final and non-refundable. In case of duplicate payment, wrong amount or payment error, donors may contact the foundation for review as per the Refund & Cancellation Policy.",
            ],
          },
          {
            title: "Contact Us",
            paragraphs: [
              "For donation-related questions, confirmation or support, please contact:",
            ],
          },
        ]}
      />
    </>
  );
}
