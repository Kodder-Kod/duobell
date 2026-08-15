import { Lightbulb, ShieldCheck, HardHat, Scale } from "lucide-react";

export const PILLARS = [
  {
    icon: Lightbulb,
    title: "Innovation & Research",
    text: "A home of excellence comprising highly skilled, technology-savvy and finance experts who employ their skills and experience to design, customize and deliver relevant value and results to clients.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    text: "Every organization needs a vendor they can trust — it saves time and resources when you have reliable business partners. We bank on our reliability to back our service and consultancy provision.",
  },
  {
    icon: HardHat,
    title: "Professional Expertise",
    text: "Our highly experienced professionals have worked across various sectors and understand industrial practice challenges, always providing dependable solutions for the same.",
  },
  {
    icon: Scale,
    title: "Compliance & Integrity",
    text: "We operate within the legal framework and only partner with those who do the same. We stay current on tax and legal obligations and keep clients informed on anything that may affect them.",
  },
];

export default function Pillars({ variant = "full" }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10">
      {PILLARS.map(({ icon: Icon, title, text }) => (
        <div key={title} className="bg-paper p-7 md:p-8 flex flex-col gap-4">
          <div className="w-11 h-11 flex items-center justify-center bg-crimson text-paper">
            <Icon size={20} strokeWidth={1.75} />
          </div>
          <h3 className="font-display uppercase tracking-wide text-lg">{title}</h3>
          {variant === "full" && (
            <p className="text-sm text-steel leading-relaxed">{text}</p>
          )}
        </div>
      ))}
    </div>
  );
}
