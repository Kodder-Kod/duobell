import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative bg-crimson text-paper overflow-hidden">
      <div className="absolute inset-0 bg-blueprint-grid bg-grid opacity-20" />
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20 relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-paper/70 mb-3">
            Ready when you are
          </p>
          <h2 className="font-display uppercase text-3xl sm:text-4xl md:text-5xl tracking-tight text-balance max-w-xl">
            Let&apos;s build your next project on a system you can trust
          </h2>
        </div>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 bg-ink text-paper font-display uppercase tracking-[0.15em] text-sm px-7 py-4 shrink-0 hover:bg-paper hover:text-ink transition-colors"
        >
          Talk to Duo-Bell
          <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  );
}
