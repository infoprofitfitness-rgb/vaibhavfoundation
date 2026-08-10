import PageHeader from "@/components/PageHeader";
import PolicyContent from "@/components/PolicyContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsConditionsPage() {
  return (
    <>
      <PageHeader title="Terms & Conditions" />
      <PolicyContent
        sections={[
          {
            title: "Description",
            paragraphs: [
              "Welcome to the official website of Vaibhav Foundation Welfare Society. By using this website, submitting forms, contacting us, donating or volunteering, you agree to follow the terms and conditions mentioned on this page.",
            ],
          },
          {
            title: "Website Usage",
            paragraphs: [
              "The content on this website is provided for general information about our foundation, activities, initiatives, donation options and volunteering opportunities. Visitors are requested to use the website only for lawful and genuine purposes.",
            ],
          },
          {
            title: "Donation Terms",
            paragraphs: [
              "Any donation made to Vaibhav Foundation Welfare Society should be made voluntarily. Donations received may be used for education support, healthcare awareness, women empowerment, food distribution, child welfare, community development and other social welfare activities.",
              "Donation details, receipts or confirmations may be shared as per the process followed by the foundation.",
            ],
          },
          {
            title: "Volunteer Terms",
            paragraphs: [
              "Anyone joining as a volunteer must participate responsibly and respectfully. Volunteer participation does not create any employment, salary, payment or permanent membership obligation from the foundation.",
            ],
          },
          {
            title: "Accuracy Of Information",
            paragraphs: [
              "We try to keep the website information accurate and updated. However, programme details, initiatives, activities, dates and content may change from time to time based on availability, planning and community needs.",
            ],
          },
          {
            title: "Content Rights",
            paragraphs: [
              "All text, images, logos, graphics and content available on this website belong to Vaibhav Foundation Welfare Society or are used for foundation-related purposes. Website content should not be copied, misused or reproduced without permission.",
            ],
          },
          {
            title: "External Links",
            paragraphs: [
              "Our website may contain links to third-party websites, payment platforms or social media pages. Vaibhav Foundation Welfare Society is not responsible for the content, privacy policies or practices of third-party websites.",
            ],
          },
          {
            title: "Limitation Of Liability",
            paragraphs: [
              "Vaibhav Foundation Welfare Society shall not be responsible for any loss, issue or inconvenience caused due to website usage, technical errors, third-party links, payment gateway issues or incorrect information submitted by users.",
            ],
          },
          {
            title: "Updates To Terms & Conditions",
            paragraphs: [
              "We may update these Terms & Conditions from time to time. Any changes will be posted on this page.",
            ],
          },
          {
            title: "Contact For Terms Related Queries",
            paragraphs: [
              "For any questions related to these Terms & Conditions, you can contact us at:",
            ],
          },
        ]}
      />
    </>
  );
}
