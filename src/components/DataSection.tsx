"use client";

import { dataData } from "@/data/mockData";
import { useScrollReveal } from "@/hooks/useAnimations";

export default function DataSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="bg-foreground text-white py-20 lg:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-8 lg:px-12 reveal ${isVisible ? "visible" : ""}`}
      >
        <div className="grid lg:grid-cols-3 gap-0">
          {/* Left: Title */}
          <div className="lg:col-span-1 pb-10 lg:pb-0 lg:pr-10">
            <h2 className="display-heading text-[clamp(2rem,4vw,3rem)] text-white leading-[0.95]">
              {dataData.sectionTitle}
            </h2>

            {/* Brand lines with animated dividers */}
            <div className="mt-12 space-y-5">
              {dataData.brandLines.map((line, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-[11px] font-medium tracking-wide text-white/20 whitespace-nowrap">
                    {line}
                  </span>
                  <div
                    className="flex-1 h-px bg-white/10 origin-left"
                    style={{
                      animation: `lineSweep 1.5s ${0.3 + i * 0.2}s cubic-bezier(0.16, 1, 0.3, 1) both`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats 2×2 grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-px bg-white/5">
            {/* 2X */}
            <div className="bg-foreground p-8 lg:p-10">
              <div className="display-heading text-[clamp(2rem,4vw,3.5rem)] text-white">
                {dataData.stats[0].value}
              </div>
              <p className="mt-2 text-[10px] tracking-[0.15em] uppercase text-white/30">
                {dataData.stats[0].label}
              </p>
            </div>

            {/* 6 */}
            <div className="bg-foreground p-8 lg:p-10">
              <div className="display-heading text-[clamp(2rem,4vw,3.5rem)] text-white">
                {dataData.stats[1].value}
              </div>
              <p className="mt-2 text-[10px] tracking-[0.15em] uppercase text-white/30">
                {dataData.stats[1].label}
              </p>
            </div>

            {/* $2.7bn */}
            <div className="bg-foreground p-8 lg:p-10">
              <div className="display-heading text-[clamp(2rem,4vw,3.5rem)] text-white">
                {dataData.stats[2].value}
              </div>
              <p className="mt-2 text-[10px] tracking-[0.15em] uppercase text-white/30">
                {dataData.stats[2].label}
              </p>
            </div>

            {/* Testimonial */}
            <div className="bg-foreground p-8 lg:p-10 flex flex-col justify-between">
              <blockquote className="display-heading text-[13px] lg:text-[14px] italic text-white/80 leading-[1.5]">
                {dataData.testimonial.quote}
              </blockquote>
              <p className="mt-6 text-[10px] tracking-[0.15em] uppercase text-white/30">
                {dataData.testimonial.author}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
