"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        solid ? "bg-ink/95 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Duo-Bell Structures Ltd logo"
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
              priority
            />
            <span className="font-display uppercase leading-tight text-paper">
              <span className="block text-lg tracking-wide">Duo-Bell</span>
              <span className="block text-[10px] tracking-[0.3em] text-amber -mt-1">
                Structures Ltd
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-display text-sm uppercase tracking-[0.15em] py-2 transition-colors ${
                    active ? "text-amber" : "text-paper/80 hover:text-paper"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-amber" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-amber text-amber font-display text-sm uppercase tracking-[0.15em] px-5 py-2.5 hover:bg-amber hover:text-ink transition-colors"
            >
              <PhoneCall size={15} />
              Get a Quote
            </Link>
          </div>

          <button
            className="md:hidden text-paper p-2 -mr-2"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-ink border-t border-white/10">
          <nav className="flex flex-col px-5 py-4">
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-display uppercase tracking-[0.15em] py-3 border-b border-white/10 last:border-none ${
                    active ? "text-amber" : "text-paper/85"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-amber text-ink font-display text-sm uppercase tracking-[0.15em] px-5 py-3"
            >
              <PhoneCall size={15} />
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
