import CausePage from "@/components/CausePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
};

export default function EducationPage() {
  return (
    <CausePage
      title="Education"
      eyebrow="Vaibhav Foundation Welfare Society"
      heading="Education Support For A Better Future"
      intro="Vaibhav Foundation Welfare Society believes that education is one of the strongest ways to bring positive change in society. We aim to support children and students from underprivileged families with basic educational help and learning resources."
      supportLabel="Support Education"
      initiativeTitle="Education Initiative"
      initiativeHeading="Helping Children Continue Their Learning Journey"
      initiativeText="Volunteering is a meaningful way to give back to society. By joining us, you can support social causes, help people in need and become a part of positive community change."
      listTitle="Our Support Includes"
      items={[
        "Education material support",
        "School bags, books and stationery",
        "Support for underprivileged children",
        "Learning encouragement activities",
        "Community-level education drives",
        "Awareness of importance education",
      ]}
      whyTitle="Why Education Matters"
      whyHeading="Education Creates Opportunity"
      whyText="Education gives children confidence, knowledge and hope for a better future. By supporting a child’s education, we can help them move towards a life filled with better opportunities, dignity and growth."
      ctaHeading="Be A Part Of This Cause"
      ctaText="You can support our education initiative by donating study materials, sponsoring school kits, volunteering in education drives or helping us reach children who need support."
      image="/images/poor-child-doing-his-homework-street-light_75648-769.jpg"
      secondaryImage="/images/black-white-photo-girl-reading-book-with-words-word-bottom_1092575-26443.jpg"
    />
  );
}
