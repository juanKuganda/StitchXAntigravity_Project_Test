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
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        <div className="flex h-16 items-center justify-between">
          {/* Logo — red italic bold */}
          <a
            href="#"
            className="brand-logo text-[15px] tracking-wide hover:opacity-80 transition-opacity"
          >
            {siteConfig.name}
          </a>

          {/* Right side: CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#commitment"
              className="hidden sm:inline-flex h-8 items-center justify-center rounded-full bg-primary px-5 text-[10px] font-bold tracking-[0.12em] uppercase text-white hover:bg-primary-hover hover:scale-105 transition-all duration-300"
            >
              Work with us
            </a>

            {/* Hamburger icon */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex flex-col gap-[5px] p-2 group"
              aria-label="Menu"
            >
              <span
                className={`block h-[2px] w-5 bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""} group-hover:w-4`}
              />
              <span
                className={`block h-[2px] w-5 bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-[2px] w-5 bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""} group-hover:w-3`}
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
