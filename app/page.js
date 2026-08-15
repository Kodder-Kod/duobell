import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Users2,
  ClipboardCheck,
  ChevronDown,
} from "lucide-react";
import Pillars from "@/components/Pillars";
import CTASection from "@/components/CTASection";

const SERVICES = [
  {
    icon: Building2,
    title: "Construction",
    text: "Led by experienced personnel responsible for construction works and project implementation in Mechanical, Electrical, Building and Civil Engineering.",
  },
  {
    icon: Users2,
    title: "Consultancy",
    text: "A qualified consortium spanning Structural / Civil Engineering, Architectural Services, Mechanical Services and Quantity Surveying for design-and-build clients.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    text: "Our project managers track quantities, works done and variations, and lead all project-team communication — a key determinant of lead time and cost.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden bg-ink">
        <Image
          src="/images/red.png"
          alt="Multi-storey building constructed by Duo-Bell Structures Ltd"
          fill
          priority
          className="object-cover opacity-100"
          sizes="100vw"
        />
<div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/60 to-ink/15" />
<div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl w-full px-5 md:px-8 pb-24 pt-40">
          <div className="blueprint-corners max-w-3xl animate-fade-up">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-amber mb-5">
              Kenyan Registered &middot; Engineering &amp; Project Management
            </p>
            <h1 className="font-display uppercase text-5xl sm:text-6xl md:text-7xl leading-[0.95] text-paper text-balance">
              Structures built on
              <span className="block text-crimson-light">
                integrity, not shortcuts
              </span>
            </h1>
            <p className="mt-6 text-paper/75 text-base md:text-lg max-w-xl leading-relaxed">
              Duo-Bell Structures Ltd delivers construction, consultancy and
              project management services across Kenya — engineered around
              relevance, reliability and the common good of our clients.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-crimson text-paper font-display uppercase tracking-[0.15em] text-sm px-7 py-4 hover:bg-crimson-dark transition-colors"
              >
                Our Services
                <ArrowUpRight size={18} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-paper/30 text-paper font-display uppercase tracking-[0.15em] text-sm px-7 py-4 hover:border-paper hover:bg-paper/10 transition-colors"
              >
                About the Firm
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 text-paper/60">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-rl]">
            Scroll
          </span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="hex-frame relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/pic001.png"
                alt="Completed classroom renovation project by Duo-Bell Structures Ltd"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 28rem, 90vw"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-crimson mb-4">
              About Duo-Bell Structures Ltd
            </p>
            <h2 className="font-display uppercase text-3xl sm:text-4xl md:text-5xl tracking-tight text-balance mb-6">
              A system built for the common good of our stakeholders
            </h2>
            <p className="text-steel leading-relaxed mb-4">
              Every organization has a system — the difference is what it is
              based on. Ours is set on relevance, reliability and integrity.
              It isn&apos;t good enough to have a system; it has to focus on
              the common good of stakeholders.
            </p>
            <p className="text-steel leading-relaxed mb-8">
              That focus enhances growth &amp; profitability, and builds
              efficiency, transparency and accountability into everything we
              deliver. If these values matter to you, it&apos;s time you
              chose Duo-Bell Structures Ltd.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-display uppercase tracking-[0.15em] text-sm border-b-2 border-crimson pb-1 hover:gap-3 transition-all"
            >
              Read our full story
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="bg-ink py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid bg-grid opacity-30" />
        <div className="mx-auto max-w-7xl px-5 md:px-8 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber mb-4">
                What We Do
              </p>
              <h2 className="font-display uppercase text-3xl sm:text-4xl md:text-5xl tracking-tight text-paper max-w-xl text-balance">
                Engineering and project management services
              </h2>
            </div>
            <p className="text-paper/60 max-w-sm leading-relaxed">
              An established Kenyan registered company offering engineering
              and project management services end to end.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-paper/10">
            {SERVICES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-ink hover:bg-white/[0.03] p-8 md:p-10 flex flex-col gap-5 group transition-colors">
                <div className="w-12 h-12 flex items-center justify-center border border-amber text-amber group-hover:bg-amber group-hover:text-ink transition-colors">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="font-display uppercase text-xl text-paper tracking-wide">
                  {title}
                </h3>
                <p className="text-sm text-paper/60 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-display uppercase tracking-[0.15em] text-sm text-amber border-b-2 border-amber pb-1 hover:gap-3 transition-all"
            >
              Explore all services
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="bg-concrete py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-crimson mb-4">
            Featured Project
          </p>
          <h2 className="font-display uppercase text-3xl sm:text-4xl md:text-5xl tracking-tight text-balance mb-14 max-w-2xl">
            Renovation of classrooms, Rarieda Kaloo Primary School
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-sm overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/project-signboard.jpg"
                  alt="Duo-Bell Structures Ltd project signboard on site"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 20rem, 45vw"
                />
              </div>
              <div className="relative rounded-sm overflow-hidden aspect-[3/4] mt-8">
                <Image
                  src="/images/workers-blocks.jpg"
                  alt="Duo-Bell Structures Ltd team laying blockwork on site"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 20rem, 45vw"
                />
              </div>
            </div>

            <div className="bg-ink text-paper p-8 md:p-10 self-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber mb-6">
                Project Title Block
              </p>
              <dl className="divide-y divide-paper/10 text-sm">
                {[
                  ["Employer", "NG-CDF, Kisumu East Constituency"],
                  ["Tender No.", "KSMEAST/NG-CDF/RARIEDA KALOO-PRJ/CLRMS/19/2021-2022"],
                  ["Project", "Proposed renovation of 5No. classrooms at Rarieda Kaloo Primary School, Kolwa Central Ward"],
                  ["Contractor", "Duo-Bell Structures Ltd"],
                  ["Supervision", "Ministry of Infrastructure, Roads & Public Works and Urban Development"],
                ].map(([label, value]) => (
                  <div key={label} className="grid grid-cols-3 gap-4 py-3.5">
                    <dt className="text-paper/50 uppercase tracking-wide text-xs pt-0.5">{label}</dt>
                    <dd className="col-span-2 leading-relaxed">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS STRIP */}
      <section className="bg-paper py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="dim-line mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.3em] shrink-0">
              Our Pillars
            </span>
          </div>
          <Pillars variant="strip" />
        </div>
      </section>

      <CTASection />
    </>
  );
}
