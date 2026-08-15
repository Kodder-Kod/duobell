"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const SUBJECTS = [
  "Construction",
  "Consultancy",
  "Project Management",
  "General Enquiry",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [subject, setSubject] = useState(SUBJECTS[0]);

  function handleSubmit(e) {
    e.preventDefault();
    // Front-end only: wire this up to your email/CRM endpoint of choice.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-ink text-paper p-10 md:p-12 flex flex-col items-center text-center gap-4">
        <CheckCircle2 size={40} className="text-amber" />
        <h3 className="font-display uppercase text-2xl tracking-wide">
          Message received
        </h3>
        <p className="text-paper/65 max-w-sm leading-relaxed">
          Thank you for reaching out to Duo-Bell Structures Ltd. Our team
          will get back to you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-3 font-display uppercase tracking-[0.15em] text-sm text-amber border-b-2 border-amber pb-1"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-ink text-paper p-8 md:p-10">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber mb-6">
        Send an enquiry
      </p>

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="name" className="block text-xs uppercase tracking-widest text-paper/50 mb-2">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Otieno"
            className="w-full bg-transparent border border-paper/25 px-4 py-3 text-sm placeholder:text-paper/30 focus:border-amber outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-paper/50 mb-2">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+254 720 179 305 / +254 729 468 264 / +254 73 817 304"
            className="w-full bg-transparent border border-paper/25 px-4 py-3 text-sm placeholder:text-paper/30 focus:border-amber outline-none transition-colors"
          />
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="block text-xs uppercase tracking-widest text-paper/50 mb-2">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="w-full bg-transparent border border-paper/25 px-4 py-3 text-sm placeholder:text-paper/30 focus:border-amber outline-none transition-colors"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-paper/50 mb-2">
          I&apos;m enquiring about
        </label>
        <select
          id="subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full bg-ink border border-paper/25 px-4 py-3 text-sm focus:border-amber outline-none transition-colors"
        >
          {SUBJECTS.map((s) => (
            <option key={s} value={s} className="bg-ink">
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-7">
        <label htmlFor="message" className="block text-xs uppercase tracking-widest text-paper/50 mb-2">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your project, location and timeline..."
          className="w-full bg-transparent border border-paper/25 px-4 py-3 text-sm placeholder:text-paper/30 focus:border-amber outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-amber text-ink font-display uppercase tracking-[0.15em] text-sm px-7 py-4 hover:bg-paper transition-colors"
      >
        Send Message
        <Send size={16} />
      </button>
    </form>
  );
}
