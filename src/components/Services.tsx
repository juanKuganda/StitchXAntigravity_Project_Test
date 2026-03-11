"use client";

import { servicesData } from "@/data/mockData";
import { useScrollReveal } from "@/hooks/useAnimations";

export default function Services() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="services" className="bg-[#f5f5f0] pb-24 lg:pb-32 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-12">
        {/* Header row */}
        <div
          ref={headerRef}
          className={`flex items-start justify-between gap-8 mb-10 reveal ${headerVisible ? "visible" : ""}`}
        >
          <p className="text-[clamp(1.1rem,2vw,1.4rem)] font-bold leading-[1.5] text-foreground max-w-lg">
            <span className="text-primary">Our services</span> have been
            developed to ignite your next leap forward
          </p>

          {/* Circular + CTA */}
          <a
            href="#commitment"
            className="flex-shrink-0 h-12 w-12 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 group"
          >
            <svg
              className="h-4 w-4 group-hover:rotate-90 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </a>
        </div>

        {/* Services 2×4 grid — clean with borders */}
        <div
          ref={gridRef}
          className={`stagger-children ${gridVisible ? "visible" : ""}`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {servicesData.services.map((service, i) => (
              <div
                key={service}
                className="border-t border-foreground/10 py-6 pr-6 group cursor-pointer hover:bg-foreground/[0.02] transition-colors duration-300"
              >
                <span className="text-[14px] font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {service}
                </span>
              </div>
            ))}
          </div>
          {/* Bottom border */}
          <div className="border-t border-foreground/10" />
        </div>
      </div>
    </section>
  );
}
