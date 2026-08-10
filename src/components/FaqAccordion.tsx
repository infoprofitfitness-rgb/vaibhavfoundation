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
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-[family-name:var(--oxpins-font-two)] text-lg font-bold text-[var(--oxpins-black)]"
              onClick={() => setOpen(active ? -1 : idx)}
              aria-expanded={active}
            >
              <span>{item.q}</span>
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
              <div className="border-t border-[var(--oxpins-bdr-color)] px-5 py-4 text-[var(--oxpins-gray)]">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
