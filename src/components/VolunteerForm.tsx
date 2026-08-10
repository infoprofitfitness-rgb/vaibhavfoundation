"use client";

import { FormEvent, useState } from "react";

export default function VolunteerForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[24px] bg-white p-6 shadow-[0_20px_60px_rgba(40,55,52,0.1)] md:p-8"
    >
      <h3 className="heading mb-2 text-2xl">Register yourself with us</h3>
      <p className="mb-6 text-[var(--oxpins-gray)]">
        Let’s join our community to become a volunteer
      </p>
      <div className="grid gap-4">
        <input
          required
          name="name"
          placeholder="Full Name"
          className="min-h-12 rounded-xl border border-[var(--oxpins-bdr-color)] bg-[var(--oxpins-extra)] px-4 outline-none focus:border-[var(--oxpins-base)]"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email Address"
          className="min-h-12 rounded-xl border border-[var(--oxpins-bdr-color)] bg-[var(--oxpins-extra)] px-4 outline-none focus:border-[var(--oxpins-base)]"
        />
        <input
          required
          name="phone"
          placeholder="Phone Number"
          className="min-h-12 rounded-xl border border-[var(--oxpins-bdr-color)] bg-[var(--oxpins-extra)] px-4 outline-none focus:border-[var(--oxpins-base)]"
        />
        <textarea
          name="message"
          placeholder="Why do you want to volunteer?"
          rows={4}
          className="rounded-xl border border-[var(--oxpins-bdr-color)] bg-[var(--oxpins-extra)] px-4 py-3 outline-none focus:border-[var(--oxpins-base)]"
        />
        <button type="submit" className="btn btn-base">
          Send a message
        </button>
        {sent && (
          <p className="font-semibold text-[var(--oxpins-base)]">
            Thank you for registering. Our team will contact you soon.
          </p>
        )}
      </div>
    </form>
  );
}
