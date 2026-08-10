import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  eyebrow: string;
  heading: string;
  intro: string;
  supportLabel: string;
  supportHref?: string;
  initiativeTitle: string;
  initiativeHeading: string;
  initiativeText: string;
  listTitle: string;
  items: string[];
  whyTitle: string;
  whyHeading: string;
  whyText: string;
  ctaHeading: string;
  ctaText: string;
  image: string;
  secondaryImage: string;
};

export default function CausePage({
  title,
  eyebrow,
  heading,
  intro,
  supportLabel,
  supportHref = "/donate-now/",
  initiativeTitle,
  initiativeHeading,
  initiativeText,
  listTitle,
  items,
  whyTitle,
  whyHeading,
  whyText,
  ctaHeading,
  ctaText,
  image,
  secondaryImage,
}: Props) {
  return (
    <>
      <PageHeader title={title} />

      <section className="section-pad">
        <div className="container-site grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="eyebrow mb-2">{eyebrow}</p>
            <h2 className="heading mb-4 text-2xl sm:text-3xl md:text-4xl">
              {heading}
            </h2>
            <p className="mb-6 text-[var(--oxpins-gray)]">{intro}</p>
            <Link href={supportHref} className="btn btn-base">
              {supportLabel}
            </Link>
          </div>
          <Image
            src={image}
            alt={heading}
            width={640}
            height={420}
            className="h-auto w-full rounded-2xl object-cover sm:rounded-[30px]"
          />
        </div>
      </section>

      <section className="section-pad bg-[var(--oxpins-extra)]">
        <div className="container-site grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <Image
            src={secondaryImage}
            alt={initiativeHeading}
            width={640}
            height={420}
            className="order-2 h-auto w-full rounded-2xl object-cover sm:rounded-[30px] lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <p className="eyebrow mb-2">{initiativeTitle}</p>
            <h2 className="heading mb-4 text-2xl sm:text-3xl">
              {initiativeHeading}
            </h2>
            <p className="mb-6 text-[var(--oxpins-gray)]">{initiativeText}</p>
            <Link href="/volunteer/" className="btn btn-outline">
              Become A Volunteer
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <h2 className="heading mb-5 text-2xl sm:text-3xl">{listTitle}</h2>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--oxpins-primary)] text-xs font-bold">
                    ✓
                  </span>
                  <span className="font-semibold text-[var(--oxpins-black)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[var(--oxpins-base)] p-6 text-white sm:rounded-[28px] sm:p-8">
            <p className="mb-2 font-[family-name:var(--oxpins-font-three)] text-xl text-[var(--oxpins-primary)] sm:text-2xl">
              {whyTitle}
            </p>
            <h3 className="mb-3 font-[family-name:var(--oxpins-font-two)] text-xl font-extrabold sm:text-2xl">
              {whyHeading}
            </h3>
            <p className="text-white/90">{whyText}</p>
          </div>
        </div>
      </section>

      <section
        className="py-14 text-white sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,113,93,0.92), rgba(20,17,15,0.88)), url(/images/view-hands-holding-red-heart-represent-affection_23-2151728375.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-site max-w-3xl text-center">
          <h2 className="mb-4 font-[family-name:var(--oxpins-font-two)] text-2xl font-extrabold sm:text-3xl">
            {ctaHeading}
          </h2>
          <p className="mb-6 text-white/90">{ctaText}</p>
          <Link href="/donate-now/" className="btn btn-primary">
            Donate Now
          </Link>
        </div>
      </section>
    </>
  );
}
