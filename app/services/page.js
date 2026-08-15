import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import {
  Building2,
  Users2,
  ClipboardCheck,
  Wrench,
  Ruler,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Services | Duo-Bell Structures Ltd",
  description:
    "Construction, consultancy and project management services from Duo-Bell Structures Ltd, plus the plant, equipment and survey gear behind every project.",
};

const SERVICES = [
  {
    icon: Building2,
    tag: "01 — Construction",
    title: "Construction",
    image: "/images/workers-wall-2.jpg",
    text: "This section is led by very experienced personnel in the construction industry & discipline — responsible for all construction works and project implementations in Mechanical, Electrical, Building and Civil Engineering works.",
    points: ["Mechanical works", "Electrical works", "Building works", "Civil engineering works"],
  },
  {
    icon: Users2,
    tag: "02 — Consultancy",
    title: "Consultancy",
    image: "/images/slab-formwork.jpg",
    text: "Duo-Bell Structures maintains a highly qualified consortium — Structural / Civil Engineering, Building Services, Architectural Services, Mechanical Services and Quantity Surveying — for our clients who would request design and built services.",
    points: ["Structural / civil engineering", "Architectural services", "Mechanical services", "Quantity surveying"],
  },
  {
    icon: ClipboardCheck,
    tag: "03 — Project Management",
    title: "Project Management",
    image: "/images/worker-concreting.jpg",
    text: "On implementation of any project, our experienced project manager plans and follows up on the quantities, works done, variations and all the communications with the project team — a vital section we also hire out as a key project lead-time and cost-effective determinant.",
    points: ["Quantity & progress tracking", "Variation management", "Project-team communication", "Lead-time & cost control"],
  },
  {
    icon: ClipboardCheck,
    tag: "04 — General Supplies of Hardware and Building Material",
    title: "General Supplies of Hardware and Building Material",
    image: "/images/hardware.png",
    text: "We o er competitive rates and timely delivery of goods to all our customers. work with the theory of volume sales thus you will always nd quality products at a ordable prices and in good time",
    points: [
      "Quality building materials",
      "Competitive pricing",
      "Reliable supply",
      "Timely delivery",
    ],
  },
];

const EQUIPMENT = [
  "Concrete mixers",
  "Roller compactors",
  "Concrete vibrators",
  "Assorted hand power tools",
];

const SURVEY_EQUIPMENT = [
  "Theodolite, complete set",
  "Levelling equipment",
  "Set of 6 ranging rods",
  "Laser beam range finder",
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        crumb="Services"
        eyebrow="What We Do"
        title="Engineering and project management services, end to end"
        description="Duo-Bell Structures is an established Kenyan registered company offering engineering and project management services."
      />

      {/* SERVICES DETAIL */}
      {SERVICES.map(({ icon: Icon, tag, title, image, text, points }, i) => (
        <section
          key={title}
          className={i % 2 === 0 ? "bg-paper" : "bg-concrete"}
        >
          <div className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-24 grid lg:grid-cols-2 gap-14 items-center">
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden blueprint-corners">
                <Image
                  src={image}
                  alt={`${title} works by Duo-Bell Structures Ltd`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40rem, 90vw"
                />
              </div>
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-crimson mb-5">
                {tag}
              </p>
              <div className="w-14 h-14 flex items-center justify-center bg-ink text-amber mb-6">
                <Icon size={26} strokeWidth={1.75} />
              </div>
              <h2 className="font-display uppercase text-3xl sm:text-4xl tracking-tight mb-5 text-balance">
                {title}
              </h2>
              <p className="text-steel leading-relaxed mb-7 max-w-lg">{text}</p>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-lg">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 size={16} className="mt-0.5 text-crimson shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* PLANT & EQUIPMENT */}
      <section className="bg-ink py-24 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid bg-grid opacity-30" />
        <div className="mx-auto max-w-7xl px-5 md:px-8 relative">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-14 items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber mb-4">
                Plant &amp; Equipment
              </p>
              <h2 className="font-display uppercase text-3xl sm:text-4xl tracking-tight text-paper mb-6 text-balance">
                Modern equipment, competitive rates
              </h2>
              <p className="text-paper/65 leading-relaxed mb-10 max-w-md">
                We boast of modern, sophisticated equipment — available
                through both hire and own stock — to guarantee timely and
                efficient delivery at very competitive rates.
              </p>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image
                  src="/images/concrete-mixer.jpg"
                  alt="Concrete mixer on a Duo-Bell Structures Ltd site"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 34rem, 90vw"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-px bg-paper/10">
              <div className="bg-ink p-8">
                <div className="w-11 h-11 flex items-center justify-center bg-crimson text-paper mb-6">
                  <Wrench size={19} strokeWidth={1.75} />
                </div>
                <h3 className="font-display uppercase text-lg text-paper tracking-wide mb-5">
                  General Equipment
                </h3>
                <ul className="space-y-3">
                  {EQUIPMENT.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-paper/70">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-amber shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-ink p-8">
                <div className="w-11 h-11 flex items-center justify-center bg-amber text-ink mb-6">
                  <Ruler size={19} strokeWidth={1.75} />
                </div>
                <h3 className="font-display uppercase text-lg text-paper tracking-wide mb-5">
                  Survey Equipment
                </h3>
                <ul className="space-y-3">
                  {SURVEY_EQUIPMENT.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-paper/70">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-amber shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
