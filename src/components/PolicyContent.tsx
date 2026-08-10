import { site } from "@/lib/site";

type Section = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type Props = {
  introTitle?: string;
  sections: Section[];
  showContact?: boolean;
};

export default function PolicyContent({
  introTitle = "Description",
  sections,
  showContact = true,
}: Props) {
  return (
    <section className="section-pad">
      <div className="container-site max-w-4xl">
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <div key={section.title}>
              <h2
                className={`heading mb-3 ${
                  idx === 0 && section.title === introTitle
                    ? "text-3xl"
                    : "text-2xl"
                }`}
              >
                {section.title}
              </h2>
              {section.paragraphs?.map((p) => (
                <p key={p} className="mb-3 text-[var(--oxpins-gray)]">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="list-disc space-y-2 pl-5 text-[var(--oxpins-gray)]">
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {showContact && (
            <div className="rounded-[20px] bg-[var(--oxpins-extra)] p-6">
              <h3 className="heading mb-3 text-xl">{site.name}</h3>
              <p className="text-[var(--oxpins-gray)]">
                <strong>Address:</strong> {site.address}
              </p>
              <p className="text-[var(--oxpins-gray)]">
                <strong>Mobile:</strong> {site.phone}
              </p>
              <p className="text-[var(--oxpins-gray)]">
                <strong>Email:</strong> {site.email}
              </p>
              <p className="text-[var(--oxpins-gray)]">
                <strong>Reg. No.:</strong> {site.regNo}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
