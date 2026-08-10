"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "Always donate for childrens",
    title: "Serving Humanity With Purpose And Passion",
    cta: { label: "Donate Now", href: "/donate-now/" },
    image:
      "/images/young-girl-selling-oranges-bustling-marketplace-symbolizing-belief-making-difference_1166177-19635.jpg",
    shape: "/images/main-slider-1-1.png",
  },
  {
    eyebrow: "Always donate for childrens",
    title: "Together We Can Build A Better Tomorrow",
    cta: { label: "Join As Volunteer", href: "/volunteer/" },
    image:
      "/images/child-poverty-slum-sunset-helping-hand-hope_204719-172341.jpg",
    shape: "/images/main-slider-1-3.png",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((v) => (v + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative overflow-hidden bg-[var(--oxpins-extra)]">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "url(/images/main-slider-shape-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container-site relative grid min-h-[78vh] items-center gap-8 py-16 lg:grid-cols-2">
        <div key={slide.title} className="hero-slide z-10 max-w-xl">
          <p className="eyebrow mb-3">{slide.eyebrow}</p>
          <h1 className="heading mb-8 text-4xl md:text-5xl lg:text-[3.5rem]">
            {slide.title}
          </h1>
          <Link href={slide.cta.href} className="btn btn-base">
            {slide.cta.label}
          </Link>
          <div className="mt-8 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index
                    ? "w-8 bg-[var(--oxpins-base)]"
                    : "w-2.5 bg-[var(--oxpins-gray2,#CAB3A8)]"
                }`}
              />
            ))}
          </div>
        </div>

        <div key={`${slide.title}-img`} className="relative hero-slide">
          <div className="relative mx-auto aspect-[4/5] max-w-[480px] overflow-hidden rounded-[40%_40%_40%_40%/45%_45%_35%_35%] shadow-[0_30px_80px_rgba(0,113,93,0.25)]">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 480px"
              priority={index === 0}
            />
          </div>
          <Image
            src="/images/main-slider-shape-2.png"
            alt=""
            width={120}
            height={120}
            className="float-soft absolute -left-2 top-8 w-20 md:w-28"
          />
          <Image
            src={slide.shape}
            alt=""
            width={160}
            height={160}
            className="absolute -bottom-4 -right-2 w-28 opacity-90 md:w-36"
          />
        </div>
      </div>
    </section>
  );
}
