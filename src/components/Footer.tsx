"use client";

import { footerData, siteConfig } from "@/data/mockData";
import { useScrollReveal } from "@/hooks/useAnimations";

export default function Footer() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <footer className="overflow-hidden">
      {/* GROW TODAY + Red WORK WITH US */}
      <div
        ref={ref}
        className={`grid lg:grid-cols-2 gap-0 reveal ${isVisible ? "visible" : ""}`}
      >
        {/* Left: GROW TODAY */}
        <div className="bg-[#f5f5f0] px-8 lg:px-16 py-16 lg:py-24 flex flex-col justify-end min-h-[380px]">
          <h2 className="display-heading text-[clamp(3rem,8vw,6rem)] text-foreground leading-none">
            {footerData.headline}
          </h2>

          {/* Small image placeholders */}
          <div className="mt-10 flex gap-3">
            <div className="h-24 w-20 bg-foreground/5 rounded-sm" />
            <div className="h-24 w-20 bg-primary/10 rounded-sm" />
          </div>
        </div>

        {/* Right: Red WORK WITH US */}
        <div className="bg-primary px-8 lg:px-16 py-16 lg:py-24 flex flex-col justify-between min-h-[380px] group">
          <h3 className="display-heading text-2xl lg:text-3xl text-white">
            {footerData.ctaText}
          </h3>

          <a
            href="#commitment"
            className="self-end mt-8"
          >
            <svg
              className="h-16 w-16 lg:h-20 lg:w-20 text-white/40 group-hover:text-white group-hover:translate-x-2 transition-all duration-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#f5f5f0] border-t border-foreground/10 py-6">
        <div className="mx-auto max-w-[1200px] px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="brand-logo text-sm">{siteConfig.name}</span>
            <span className="text-[11px] text-foreground/30">
              {footerData.copyright}
            </span>
          </div>

          <div className="flex gap-8">
            {footerData.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="link-hover text-[11px] font-medium tracking-[0.1em] uppercase text-foreground/40 hover:text-primary transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
