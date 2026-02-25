"use client";

import { resultsData } from "@/data/mockData";
import { useScrollReveal } from "@/hooks/useAnimations";

export default function Results() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });
  const [bottomRef, bottomVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="results" className="bg-foreground text-white">
      {/* Header area */}
      <div className="mx-auto max-w-[1200px] px-8 lg:px-12 py-20 lg:py-28">
        <div
          ref={headerRef}
          className={`flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 reveal ${headerVisible ? "visible" : ""}`}
        >
          <div>
            <h2 className="display-heading text-[clamp(3rem,7vw,6rem)] text-white leading-[0.9]">
              {resultsData.sectionTitle}
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/40 max-w-xs">
              {resultsData.sectionDescription}
            </p>
          </div>

          {/* Circle arrow CTA */}
          <a
            href="#"
            className="flex-shrink-0 h-16 w-16 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all duration-500 group"
          >
            <svg
              className="h-5 w-5 group-hover:rotate-45 transition-transform duration-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Project grid — 2 columns */}
      <div ref={gridRef} className="mx-auto max-w-[1200px] px-8 lg:px-12 pb-4">
        <div className="grid lg:grid-cols-2 gap-4">
          {resultsData.projects.map((project, i) => (
            <div
              key={project.brand}
              className={`hover-lift group relative overflow-hidden cursor-pointer reveal-scale ${
                gridVisible ? "visible" : ""
              }`}
              style={{
                background: project.color,
                transitionDelay: `${i * 0.15}s`,
              }}
            >
              <div className="p-10 lg:p-12 min-h-[280px] lg:min-h-[320px] flex flex-col justify-end">
                <span
                  className="text-[11px] font-bold tracking-[0.2em] uppercase mb-3"
                  style={{ color: project.labelColor }}
                >
                  {project.label}
                </span>
                {project.tagline && (
                  <h3
                    className="text-lg lg:text-xl font-bold leading-snug max-w-xs"
                    style={{ color: project.textColor }}
                  >
                    {project.tagline}
                  </h3>
                )}
                {!project.tagline && (
                  <h3
                    className="display-heading text-[clamp(3rem,5vw,4.5rem)] italic"
                    style={{ color: project.textColor }}
                  >
                    {project.brand}
                  </h3>
                )}
              </div>

              {/* Hover arrow */}
              <div className="absolute top-6 right-6 h-9 w-9 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 text-white">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row: Extra cards + Quote */}
      <div
        ref={bottomRef}
        className="mx-auto max-w-[1200px] px-8 lg:px-12 pb-4"
      >
        <div className="grid lg:grid-cols-3 gap-4">
          {/* E-commerce card */}
          <div
            className={`bg-[#111] p-10 reveal-scale ${bottomVisible ? "visible" : ""}`}
          >
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary">
              {resultsData.extraCards[0].label}
            </span>
            <p className="mt-auto pt-20 text-[11px] tracking-[0.1em] uppercase text-white/30">
              {resultsData.extraCards[0].stat}
            </p>
          </div>

          {/* Visual card */}
          <div
            className={`bg-[#111] p-10 reveal-scale ${bottomVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary">
              {resultsData.extraCards[1].label}
            </span>
            <h3 className="mt-6 text-lg font-bold text-white leading-snug">
              {resultsData.extraCards[1].title}
            </h3>
          </div>

          {/* Quote on blue */}
          <div
            className={`p-10 flex flex-col justify-between reveal-scale ${bottomVisible ? "visible" : ""}`}
            style={{
              background: resultsData.quote.bgColor,
              transitionDelay: "0.2s",
            }}
          >
            <blockquote className="display-heading text-[clamp(1rem,1.8vw,1.4rem)] italic text-white leading-[1.2]">
              {resultsData.quote.text}
            </blockquote>
            <p className="mt-8 text-[11px] tracking-[0.1em] uppercase text-white/60">
              {resultsData.quote.author}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
