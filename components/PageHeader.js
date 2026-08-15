import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHeader({ eyebrow, title, description, crumb }) {
  return (
    <section className="relative bg-ink pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint-grid bg-grid opacity-40" />
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-crimson/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 md:px-8 relative">
        <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-steel-light mb-6">
          <Link href="/" className="hover:text-amber transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-amber">{crumb}</span>
        </div>
        {eyebrow && (
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display uppercase text-4xl sm:text-5xl md:text-6xl text-paper tracking-tight text-balance max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-paper/70 max-w-xl leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
}
