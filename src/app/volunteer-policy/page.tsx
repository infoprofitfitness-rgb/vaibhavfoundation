import PageHeader from "@/components/PageHeader";
import PolicyContent from "@/components/PolicyContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer Policy",
};

export default function VolunteerPolicyPage() {
  return (
    <>
      <PageHeader title="Volunteer Policy" />
      <PolicyContent
        sections={[
          {
            title: "Description",
            paragraphs: [
              "Vaibhav Foundation Welfare Society welcomes individuals who wish to contribute their time, skills and efforts towards social welfare activities. This policy explains the basic guidelines for volunteer participation.",
            ],
          },
          {
            title: "Joining As A Volunteer",
            paragraphs: [
              "Anyone interested in supporting education, healthcare awareness, women empowerment, food distribution, child welfare or community welfare activities may apply to join as a volunteer.",
              "Volunteer participation is voluntary and should be done with honesty, respect and responsibility.",
            ],
          },
          {
            title: "Volunteer Responsibilities",
            paragraphs: ["Volunteers are expected to:"],
            bullets: [
              "Participate responsibly in foundation activities",
              "Respect beneficiaries, team members and communities",
              "Follow instructions given by the foundation team",
              "Maintain discipline during events and drives",
              "Share correct information about the foundation",
              "Avoid any misuse of foundation name or identity",
            ],
          },
          {
            title: "Code Of Conduct",
            paragraphs: [
              "Volunteers must behave respectfully and professionally while representing Vaibhav Foundation Welfare Society. Any rude behaviour, misconduct, misuse of resources or activity against the foundation’s values may lead to removal from volunteer participation.",
            ],
          },
          {
            title: "Volunteering Is Not Employment",
            paragraphs: [
              "Volunteer participation does not create any employment, salary, payment, permanent membership or legal employment relationship with Vaibhav Foundation Welfare Society.",
            ],
          },
          {
            title: "Photos And Activity Media",
            paragraphs: [
              "Photos or videos taken during foundation activities may be used for awareness, reporting, website, social media and foundation communication purposes. Volunteers may inform the foundation if they have any concern regarding use of their image.",
            ],
          },
          {
            title: "Safety During Activities",
            paragraphs: [
              "Volunteers are expected to take care of their own safety and follow instructions during field activities, donation drives, camps or events. The foundation may guide volunteers, but volunteers should participate carefully and responsibly.",
            ],
          },
          {
            title: "Contact For Volunteer Queries",
            paragraphs: ["For volunteer-related questions, please contact:"],
          },
        ]}
      />
    </>
  );
}
