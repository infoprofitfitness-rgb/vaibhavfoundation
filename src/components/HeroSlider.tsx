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
        className="absolute inset-0 opacity-30 sm:opacity-40"
        style={{
          backgroundImage: "url(/images/main-slider-shape-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container-site relative grid items-center gap-8 py-10 sm:py-14 lg:min-h-[72vh] lg:grid-cols-2 lg:gap-10 lg:py-16">
        <div key={slide.title} className="hero-slide z-10 order-2 max-w-xl lg:order-1">
          <p className="eyebrow mb-2 sm:mb-3">{slide.eyebrow}</p>
          <h1 className="heading mb-5 text-[1.85rem] leading-tight sm:mb-7 sm:text-4xl md:text-5xl lg:text-[3.4rem]">
            {slide.title}
          </h1>
          <Link href={slide.cta.href} className="btn btn-base">
            {slide.cta.label}
          </Link>
          <div className="mt-6 flex gap-2 sm:mt-8">
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

        <div
          key={`${slide.title}-img`}
          className="relative hero-slide order-1 mx-auto w-full max-w-[320px] sm:max-w-[400px] lg:order-2 lg:max-w-[480px]"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(0,113,93,0.22)] sm:rounded-[40%_40%_40%_40%/45%_45%_35%_35%]">
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
            className="float-soft absolute -left-1 top-6 hidden w-16 sm:block md:w-24"
          />
          <Image
            src={slide.shape}
            alt=""
            width={160}
            height={160}
            className="absolute -bottom-3 -right-1 hidden w-20 opacity-90 sm:block md:w-32"
          />
        </div>
      </div>
    </section>
  );
}
