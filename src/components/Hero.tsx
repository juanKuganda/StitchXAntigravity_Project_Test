"use client";

import { heroData } from "@/data/mockData";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#f5f5f0] overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-12 w-full pt-28 pb-20">
        {/* Top label with red dot */}
        <div
          className="flex items-center gap-3 mb-10 animate-slide-left"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-foreground">
            {heroData.topLabel}
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className="display-heading text-[clamp(2.8rem,6.5vw,5.5rem)] text-foreground max-w-3xl animate-slide-up"
          style={{ animationDelay: "0.2s", lineHeight: "0.95" }}
        >
          {heroData.headline}
        </h1>

        {/* Description */}
        <p
          className="mt-12 text-[15px] leading-[1.7] text-foreground/50 max-w-sm animate-slide-up"
          style={{ animationDelay: "0.5s" }}
        >
          {heroData.description}
        </p>

        {/* CTA Button */}
        <div
          className="mt-8 animate-slide-up"
          style={{ animationDelay: "0.7s" }}
        >
          <a href="#results" className="inline-flex items-center gap-4 group">
            <span className="btn-red py-3.5 px-7 text-[12px]">
              {heroData.cta}
            </span>
            <span className="text-primary group-hover:translate-x-2 transition-transform duration-300">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-foreground line-sweep"
        style={{ animationDelay: "1s" }}
      />
    </section>
  );
}
