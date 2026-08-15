import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Contact Us | Duo-Bell Structures Ltd",
  description:
    "Get in touch with Duo-Bell Structures Ltd for construction, consultancy and project management enquiries in Kenya.",
};

const INFO_CARDS = [
  {
    icon: MapPin,
    label: "Office",
    lines: ["27-40304", "Kandiege, Kenya"],
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["+254 720 179 305 / +254 729 468 264 / +254 73 817 304", ],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["info@duobellstructures.co.ke"],
  },
  {
    icon: Clock,
    label: "Working Hours",
    lines: ["Monday – Friday", "8:00am – 5:00pm"],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumb="Contact Us"
        eyebrow="Get In Touch"
        title="Tell us what you're building"
        description="Reach out for construction, consultancy or project management enquiries — our team responds promptly to every request."
      />

      <section className="bg-paper py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 mb-16">
            {INFO_CARDS.map(({ icon: Icon, label, lines }) => (
              <div key={label} className="bg-paper p-7">
                <div className="w-11 h-11 flex items-center justify-center bg-crimson text-paper mb-5">
                  <Icon size={19} strokeWidth={1.75} />
                </div>
                <h3 className="font-display uppercase tracking-wide text-sm text-steel mb-2">
                  {label}
                </h3>
                {lines.map((l) => (
                  <p key={l} className="text-sm leading-relaxed">
                    {l}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1fr_1fr] gap-10">
            <ContactForm />

            <div className="flex flex-col gap-6">
           <div className="relative flex-1 min-h-[280px] bg-ink overflow-hidden">
  <div className="absolute inset-0 bg-blueprint-grid bg-grid opacity-40" />

  <div className="absolute inset-0 p-4 md:p-6">
    <div className="w-full h-full overflow-hidden rounded-lg border border-white/10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4894.146948688663!2d34.55006762273869!3d-0.42977784246186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182ad378a5265f8f%3A0x19d701c58abe24c0!2sKandiege!5e1!3m2!1sen!2ske!4v1786801040671!5m2!1sen!2ske"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        className="w-full h-full min-h-[280px] md:min-h-[350px]"
      />
    </div>
  </div>
</div>

              <a
                href="mailto:info@duobellstructures.co.ke"
                className="group flex items-center justify-between bg-crimson text-paper px-7 py-6 hover:bg-crimson-dark transition-colors"
              >
                <span className="font-display uppercase tracking-[0.15em] text-sm">
                  Email us directly
                </span>
                <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
