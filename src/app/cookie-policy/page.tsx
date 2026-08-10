import PageHeader from "@/components/PageHeader";
import PolicyContent from "@/components/PolicyContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHeader title="Cookie Policy" />
      <PolicyContent
        sections={[
          {
            title: "Description",
            paragraphs: [
              "This Cookie Policy explains how Vaibhav Foundation Welfare Society may use cookies and similar technologies on its website to improve user experience and understand website performance.",
            ],
          },
          {
            title: "About Cookies",
            paragraphs: [
              "Cookies are small files stored on your device when you visit a website. They help the website remember basic information and improve browsing experience.",
            ],
          },
          {
            title: "Use Of Cookies",
            paragraphs: ["Our website may use cookies for:"],
            bullets: [
              "Improving website performance",
              "Understanding visitor activity",
              "Remembering user preferences",
              "Improving page loading and navigation",
              "Basic analytics and website improvement",
              "Maintaining website security",
            ],
          },
          {
            title: "Cookies We May Use",
            paragraphs: [
              "Essential Cookies — These help the website function properly.",
              "Analytics Cookies — These help us understand how visitors use our website.",
              "Preference Cookies — These may remember basic choices such as browser or website preferences.",
              "Third-Party Cookies — Some cookies may be used by third-party tools such as analytics, maps, social media or payment platforms.",
            ],
          },
          {
            title: "Your Cookie Choices",
            paragraphs: [
              "You can choose to accept, block or delete cookies through your browser settings. Please note that disabling some cookies may affect website functionality or user experience.",
            ],
          },
          {
            title: "Third-Party Tools",
            paragraphs: [
              "Our website may use third-party services such as Google Maps, analytics tools, social media links or payment-related platforms. These services may use their own cookies according to their respective policies.",
            ],
          },
          {
            title: "Policy Updates",
            paragraphs: [
              "Vaibhav Foundation Welfare Society may update this Cookie Policy from time to time. Any changes will be posted on this page.",
            ],
          },
          {
            title: "Contact For Cookie Policy Queries",
            paragraphs: [
              "For any questions related to this Cookie Policy, please contact:",
            ],
          },
        ]}
      />
    </>
  );
}
