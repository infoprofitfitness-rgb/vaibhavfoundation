"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[24px] border border-[var(--oxpins-bdr-color)] bg-white p-6 shadow-[0_20px_60px_rgba(40,55,52,0.08)] md:p-8"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <input
          required
          name="name"
          placeholder="Your Name"
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
          name="phone"
          placeholder="Phone Number"
          className="min-h-12 rounded-xl border border-[var(--oxpins-bdr-color)] bg-[var(--oxpins-extra)] px-4 outline-none focus:border-[var(--oxpins-base)] md:col-span-2"
        />
        <textarea
          required
          name="message"
          placeholder="Write a message"
          rows={5}
          className="rounded-xl border border-[var(--oxpins-bdr-color)] bg-[var(--oxpins-extra)] px-4 py-3 outline-none focus:border-[var(--oxpins-base)] md:col-span-2"
        />
      </div>
      <button type="submit" className="btn btn-base mt-5">
        Send a message
      </button>
      {sent && (
        <p className="mt-4 font-semibold text-[var(--oxpins-base)]">
          Thank you. Your message has been noted. Please also email us at
          vaibhavfoundation@outlook.com.
        </p>
      )}
    </form>
  );
}
