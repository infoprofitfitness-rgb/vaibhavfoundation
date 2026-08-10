import CausePage from "@/components/CausePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare",
};

export default function HealthcarePage() {
  return (
    <CausePage
      title="Healthcare"
      eyebrow="Vaibhav Foundation Welfare Society"
      heading="Healthcare Awareness For Healthier Communities"
      intro="Vaibhav Foundation Welfare Society aims to support communities through healthcare awareness, basic health guidance and welfare initiatives that encourage people to take care of their health and well-being."
      supportLabel="Support Healthcare Initiative"
      initiativeTitle="Healthcare Initiative"
      initiativeHeading="Promoting Basic Health Awareness"
      initiativeText="Many people are not aware of basic healthcare practices, preventive care and regular health checkups. Through our healthcare initiative, we aim to spread awareness and support communities with simple, practical and need-based health activities."
      listTitle="What We Aim To Do"
      items={[
        "Health awareness programmes",
        "Basic health checkup camps",
        "Preventive healthcare awareness",
        "Hygiene and cleanliness awareness",
        "Support for needy individuals",
        "Community health guidance activities",
      ]}
      whyTitle="Good Health Builds A Better Life"
      whyHeading="Healthcare awareness matters"
      whyText="Healthcare awareness helps people understand the importance of prevention, hygiene, regular checkups and timely care. A healthy community can grow stronger, safer and more confident."
      ctaHeading="Support This Cause"
      ctaText="You can help us by supporting healthcare camps, volunteering in awareness activities, sponsoring basic health initiatives or helping us reach communities that need guidance and care."
      image="/images/smiling-young-girl-holding-red-heart-balloon-with-smiley-face_14117-976937.jpg"
      secondaryImage="/images/portrait-woman-working-healthcare-system-as-pediatrician_23-2151686826.jpg"
    />
  );
}
