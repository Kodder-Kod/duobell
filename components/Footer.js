import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint-grid bg-grid opacity-40 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 relative">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Duo-Bell Structures Ltd logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="font-display uppercase text-paper text-base tracking-wide">
                Duo-Bell Structures Ltd
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              A Kenyan registered construction and engineering firm delivering
              construction, consultancy and project management services built
              on reliability and integrity.
            </p>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-[0.15em] text-amber text-sm mb-4">
              Navigate
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-paper transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-paper transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-paper transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-paper transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-[0.15em] text-amber text-sm mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>Construction</li>
              <li>Consultancy</li>
              <li>Project Management</li>
              <li>General Supplies of Hardware and Building Material</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-[0.15em] text-amber text-sm mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-amber" />
                <span>27-40304 : Kandiege, Kenya</span>
              </li>
              <li className="flex gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0 text-amber" />
                <span>+254 720 179 305 / +254 729 468 264 / +254 73 817 304</span>
              </li>
              <li className="flex gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-amber" />
                <span>info@duobellstructures.co.ke</span>
              </li>
              <li className="flex gap-2.5">
                <Clock size={16} className="mt-0.5 shrink-0 text-amber" />
                <span>Mon – Fri, 8:00am – 5:00pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-between items-center text-xs text-paper/50">
          <p>&copy; {new Date().getFullYear()} Duo-Bell Structures Ltd. All rights reserved.</p>
          <p className="font-mono tracking-wide">EMPOWERMENT OF BUSINESS · KENYA &amp; BEYOND</p>
        </div>
      </div>
    </footer>
  );
}
