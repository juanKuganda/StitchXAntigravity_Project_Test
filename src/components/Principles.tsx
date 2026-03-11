"use client";

import { principlesData } from "@/data/mockData";
import { useScrollReveal } from "@/hooks/useAnimations";

export default function Principles() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="bg-[#f5f5f0] py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-12">
        {/* Centered header — italic red FOUR PRINCIPLES */}
        <div
          ref={headerRef}
          className={`text-center mb-16 reveal ${headerVisible ? "visible" : ""}`}
        >
          <h2 className="display-heading text-[clamp(1.8rem,4vw,3rem)] text-foreground leading-[1.1] max-w-2xl mx-auto">
            <span className="italic text-primary">
              {principlesData.sectionLabel}
            </span>{" "}
            {principlesData.sectionTitle}
          </h2>
        </div>

        {/* 4-column grid — white cards */}
        <div
          ref={gridRef}
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children ${gridVisible ? "visible" : ""}`}
        >
          {principlesData.items.map((item) => (
            <div
              key={item.title}
              className="bg-white p-8 hover-lift cursor-pointer group"
            >
              <h3 className="text-base font-bold text-foreground leading-snug mb-4 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-[13px] leading-[1.7] text-foreground/50">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
