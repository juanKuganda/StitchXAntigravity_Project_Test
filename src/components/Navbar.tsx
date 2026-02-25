"use client";

import { useState, useEffect } from "react";
import { navLinks, siteConfig } from "@/data/mockData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#f5f5f0]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-8 lg:px-12">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="brand-logo text-lg tracking-wide hover:opacity-80 transition-opacity"
          >
            {siteConfig.name}
          </a>

          {/* Right side: CTA + Hamburger */}
          <div className="flex items-center gap-5">
            <a
              href="#commitment"
              className="hidden sm:inline-flex h-9 items-center justify-center rounded-full bg-primary px-6 text-[11px] font-bold tracking-[0.12em] uppercase text-white hover:bg-primary-hover hover:scale-105 transition-all duration-300"
            >
              Work with us
            </a>

            {/* Hamburger icon */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex flex-col gap-[6px] p-2 group"
              aria-label="Menu"
            >
              <span
                className={`block h-[2px] w-6 bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[8px]" : ""} group-hover:w-5`}
              />
              <span
                className={`block h-[2px] w-6 bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-[2px] w-6 bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[8px]" : ""} group-hover:w-4`}
              />
            </button>
          </div>
        </div>

        {/* Mobile/Desktop dropdown menu */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-out ${mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="border-t border-foreground/10 py-8 space-y-6">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium tracking-[0.15em] uppercase text-foreground/50 hover:text-primary transition-colors duration-300"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
