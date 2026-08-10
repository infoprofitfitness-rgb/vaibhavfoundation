import CausePage from "@/components/CausePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Women Empowerment",
};

export default function WomenEmpowermentPage() {
  return (
    <CausePage
      title="Women Empowerment"
      eyebrow="Vaibhav Foundation Welfare Society"
      heading="Empowering Women For A Stronger Society"
      intro="Vaibhav Foundation Welfare Society aims to support women through awareness, confidence-building, skill development and community support initiatives that help them move towards a better and more independent life."
      supportLabel="Support Women Empowerment"
      initiativeTitle="Women Empowerment Initiative"
      initiativeHeading="Supporting Women With Care And Confidence"
      initiativeText="Women play an important role in building families and communities. Through our women empowerment initiative, we aim to encourage women by creating awareness, providing support and helping them gain confidence for personal and social growth."
      listTitle="What We Aim To Do"
      items={[
        "Women awareness programmes",
        "Skill development support",
        "Health and hygiene awareness",
        "Confidence-building activities",
        "Support for underprivileged women",
        "Community-level women welfare drives",
      ]}
      whyTitle="Empowered Women Create Empowered Communities"
      whyHeading="Support strengthens society"
      whyText="When women receive support, respect and opportunities, they can build a better future for themselves, their families and society. Empowering women means strengthening the entire community."
      ctaHeading="Support This Cause"
      ctaText="You can support our women empowerment initiative by donating, volunteering, sponsoring awareness activities or helping us reach women who need guidance, care and support."
      image="/images/photograph-women-who-lift-empower-themselves_731930-127081.jpg"
      secondaryImage="/images/equality-action-women-day_960396-107846.jpg"
    />
  );
}
