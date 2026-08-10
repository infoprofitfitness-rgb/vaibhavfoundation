import PageHeader from "@/components/PageHeader";
import PolicyContent from "@/components/PolicyContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund and Returns Policy",
};

export default function RefundReturnsPage() {
  return (
    <>
      <PageHeader title="Refund and Returns Policy" />
      <PolicyContent
        sections={[
          {
            title: "Description",
            paragraphs: [
              "Vaibhav Foundation Welfare Society values the support of donors, volunteers and well-wishers. This Refund & Cancellation Policy explains the basic terms related to donations made towards our welfare activities.",
            ],
          },
          {
            title: "Cancellation Of Donation",
            paragraphs: [
              "Once a donation is made to Vaibhav Foundation Welfare Society, it is generally considered final. Since donations are made voluntarily for social welfare purposes, cancellation requests may not be accepted after successful payment processing.",
            ],
          },
          {
            title: "Refund Of Donation",
            paragraphs: [
              "Donations made to Vaibhav Foundation Welfare Society are generally non-refundable. However, refund requests may be reviewed only in special cases such as:",
            ],
            bullets: [
              "Duplicate payment",
              "Wrong donation amount entered by mistake",
              "Payment made due to technical error",
              "Incorrect transaction made to the foundation",
            ],
          },
          {
            title: "How To Request A Refund",
            paragraphs: [
              "If you believe there has been a payment error, please contact us with the required details.",
            ],
          },
          {
            title: "Details Required",
            bullets: [
              "Donor name",
              "Mobile number",
              "Email address",
              "Transaction date",
              "Transaction amount",
              "Payment proof or transaction ID",
              "Reason for refund request",
            ],
            paragraphs: [
              "Refund requests will be reviewed by the foundation before any decision is made.",
            ],
          },
          {
            title: "Refund Review Timeline",
            paragraphs: [
              "Refund requests, if eligible, may take reasonable time for verification and processing. The final approval of any refund request will depend on the review of transaction details and foundation records.",
            ],
          },
          {
            title: "Failed Payment Or Pending Transaction",
            paragraphs: [
              "If your payment has failed or is pending, please check with your bank, payment app or payment gateway. Vaibhav Foundation Welfare Society will not be responsible for delays caused by banks, payment platforms or third-party payment services.",
            ],
          },
          {
            title: "Donation Purpose Change",
            paragraphs: [
              "If a donor wishes to change the purpose of donation after payment, they may contact the foundation. Such requests may be considered depending on the current use of funds and programme requirements.",
            ],
          },
          {
            title: "Contact Us",
            paragraphs: [
              "For refund, cancellation or donation-related queries, please contact:",
            ],
          },
        ]}
      />
    </>
  );
}
