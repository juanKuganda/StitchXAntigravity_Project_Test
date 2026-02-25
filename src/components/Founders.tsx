"use client";

import { foundersData } from "@/data/mockData";
import { useScrollReveal } from "@/hooks/useAnimations";

export default function Founders() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      id="founders"
      className="bg-foreground text-white py-20 lg:py-28 relative"
    >
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-8 lg:px-12 reveal ${isVisible ? "visible" : ""}`}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Text content */}
          <div>
            <h2 className="display-heading text-[clamp(2.5rem,6vw,4.5rem)] text-white italic leading-[0.92]">
              {foundersData.sectionTitle}
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-white/40 max-w-xs">
              {foundersData.sectionDescription}
            </p>

            {/* Featured founders info */}
            <div className="mt-12 border-l-2 border-primary pl-6">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary">
                {foundersData.featured.label}
              </span>
              <h3 className="mt-3 text-xl lg:text-2xl font-bold text-white">
                {foundersData.featured.names}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/50">
                {foundersData.featured.description}
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-primary hover:text-primary-hover transition-colors link-hover"
              >
                {foundersData.featured.link}
              </a>
            </div>
          </div>

          {/* Right: Grayscale illustration placeholder */}
          <div className="relative">
            <div className="aspect-[3/4] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-sm overflow-hidden flex items-center justify-center relative group">
              {/* Portrait illustration placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-40 h-40 text-white/5 group-hover:text-white/10 transition-colors duration-700"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>

              {/* Gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
            </div>

            {/* Floating red CTA circle */}
            <a
              href="#commitment"
              className="absolute -bottom-6 -right-6 lg:bottom-4 lg:right-4 h-20 w-20 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold tracking-wider uppercase text-center leading-tight hover:scale-110 hover:bg-primary-hover transition-all duration-500 shadow-lg shadow-primary/30 spin-slow-hover"
              style={{ padding: "12px" }}
            >
              {foundersData.ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
