"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";

export default function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-4">
      {faqs.map((item, idx) => {
        const active = open === idx;
        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-[20px] border border-[var(--oxpins-bdr-color)] bg-white"
          >
            <button
              type="button"
              className="flex w-full items-start justify-between gap-3 px-4 py-3.5 text-left font-[family-name:var(--oxpins-font-two)] text-base font-bold text-[var(--oxpins-black)] sm:items-center sm:gap-4 sm:px-5 sm:py-4 sm:text-lg"
              onClick={() => setOpen(active ? -1 : idx)}
              aria-expanded={active}
            >
              <span className="min-w-0 flex-1 pr-1">{item.q}</span>
              <span
                className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm ${
                  active
                    ? "bg-[var(--oxpins-base)] text-white"
                    : "bg-[var(--oxpins-extra)] text-[var(--oxpins-base)]"
                }`}
              >
                {active ? "−" : "+"}
              </span>
            </button>
            {active && (
              <div className="border-t border-[var(--oxpins-bdr-color)] px-4 py-3.5 text-sm text-[var(--oxpins-gray)] sm:px-5 sm:py-4 sm:text-base">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
