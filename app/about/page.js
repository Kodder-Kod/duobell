import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Pillars from "@/components/Pillars";
import CTASection from "@/components/CTASection";
import { Target, Telescope } from "lucide-react";

export const metadata = {
  title: "About Us | Duo-Bell Structures Ltd",
  description:
    "Learn about Duo-Bell Structures Ltd's mission, vision, pillars, leadership and the team behind our construction and engineering projects in Kenya.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumb="About Us"
        eyebrow="Who We Are"
        title="A construction partner set on relevance, reliability and integrity"
        description="Every organization has a system. Ours is built for the common good of the stakeholders we serve."
      />

      {/* ABOUT BODY */}
      <section className="bg-paper py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[1fr_0.9fr] gap-14 items-start">
          <div className="space-y-5 text-steel leading-relaxed max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-crimson mb-2">
              About Duo-Bell Structures Ltd
            </p>
            <p>
              Every organization has a system — the difference is however set
              based on relevance, reliability and integrity. It isn&apos;t
              good enough to have a system, but one that focuses on the
              common good of stakeholders.
            </p>
            <p>
              Such a system enhances growth &amp; profitability, and
              strengthens efficiency, transparency and accountability among
              other key professional values.
            </p>
            <p className="text-ink font-medium">
              If these values matter to you, then it is time you chose
              Duo-Bell Structures Ltd.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden blueprint-corners">
            <Image
              src="/images/workers-wall.jpg"
              alt="Duo-Bell Structures Ltd site team at work"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40rem, 90vw"
            />
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-ink py-24 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid bg-grid opacity-30" />
        <div className="mx-auto max-w-7xl px-5 md:px-8 relative">
          <div className="grid md:grid-cols-2 gap-px bg-paper/10">
            <div className="bg-ink p-9 md:p-12">
              <div className="w-11 h-11 flex items-center justify-center bg-crimson text-paper mb-6">
                <Target size={20} strokeWidth={1.75} />
              </div>
              <h3 className="font-display uppercase text-2xl text-paper tracking-wide mb-4">
                Mission
              </h3>
              <p className="text-paper/65 leading-relaxed">
                Empowerment of business in Kenya and globally in the
                construction industry by providing reliable services that
                uniquely meet the needs of our clients.
              </p>
            </div>
            <div className="bg-ink p-9 md:p-12">
              <div className="w-11 h-11 flex items-center justify-center bg-amber text-ink mb-6">
                <Telescope size={20} strokeWidth={1.75} />
              </div>
              <h3 className="font-display uppercase text-2xl text-paper tracking-wide mb-4">
                Vision
              </h3>
              <p className="text-paper/65 leading-relaxed">
                To be the most reliable and revered service and consultancy
                provider in the construction industry, in Kenya and across
                the globe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-paper py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-2xl mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-crimson mb-4">
              Our Pillars
            </p>
            <h2 className="font-display uppercase text-3xl sm:text-4xl md:text-5xl tracking-tight text-balance mb-5">
              Four pillars we deliver results on
            </h2>
            <p className="text-steel leading-relaxed">
              Duo-Bell Structures operates within the following pillars to
              deliver results to clients.
            </p>
          </div>
          <Pillars variant="full" />
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-concrete py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-crimson mb-4">
            Leadership
          </p>
          <h2 className="font-display uppercase text-3xl sm:text-4xl md:text-5xl tracking-tight text-balance mb-14 max-w-2xl">
            Director&apos;s statement
          </h2>

          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
            <div className="grid grid-cols-2 gap-5 max-w-md">
              <div className="hex-frame relative aspect-square">
                <Image
                  src="/images/0077.png"
                  alt="Director, Duo-Bell Structures Ltd"
                  fill
                  className="object-cover"
                  sizes="16rem"
                />
              </div>
              <div className="hex-frame relative aspect-square mt-10">
                <Image
                  src="/images/0033.png"
                  alt="Team member, Duo-Bell Structures Ltd"
                  fill
                  className="object-cover"
                  sizes="16rem"
                />
              </div>
            </div>
            <div className="space-y-5 text-steel leading-relaxed">
              <p>
                Our leadership sets the standard the rest of the firm builds
                on: a system judged not by what it promises, but by what it
                protects — the trust of clients, partners and the
                communities our projects serve.
              </p>
              <p>
                We operate within the legal framework and only partner with
                those who do the same for the services we offer in
                partnership. We ensure we pay taxes as expected of us and
                keep clients updated on any legal expectations that may
                directly affect them, or the services we offer to them.
              </p>
              <p className="text-ink font-medium">
                Our team understands the possible mess a poor system can
                bring into the lives of stakeholders — which is exactly what
                our system is built to prevent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="relative bg-ink py-24 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/rebar-closeup.jpg"
            alt=""
            fill
            aria-hidden
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-ink/85" />
        </div>
        <div className="mx-auto max-w-4xl px-5 md:px-8 relative text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber mb-5">
            Our Team
          </p>
          <p className="font-display uppercase text-2xl sm:text-3xl md:text-4xl text-paper leading-tight text-balance">
            A core team of contemporary professionals — engineers,
            environmentalists, sociologists, surveyors, geologists,
            hydro-geologists and IT specialists
          </p>
          <p className="mt-6 text-paper/60 max-w-2xl mx-auto leading-relaxed">
            The firm has assembled a core team of professionals who are
            renowned experts in their respective fields and are readily
            available to committedly sign up and undertake designated
            assignments under the auspices and leadership of Duo-Bell
            Structures Ltd — forming comprehensive, integrated project teams
            for every assignment.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
