"use client";

import { commitmentData } from "@/data/mockData";
import { useScrollReveal } from "@/hooks/useAnimations";

export default function Commitment() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [cardsRef, cardsVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="commitment" className="bg-[#f5f5f0] py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-12">
        {/* Centered heading */}
        <div
          ref={headerRef}
          className={`text-center mb-14 reveal ${headerVisible ? "visible" : ""}`}
        >
          <h2 className="display-heading text-[clamp(2.5rem,6vw,4.5rem)] text-foreground">
            {commitmentData.sectionTitle}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-foreground/50 max-w-lg mx-auto">
            {commitmentData.sectionDescription}
          </p>
        </div>

        {/* Pricing cards */}
        <div
          ref={cardsRef}
          className={`grid lg:grid-cols-2 gap-6 stagger-children ${cardsVisible ? "visible" : ""}`}
        >
          {commitmentData.models.map((model) => (
            <div
              key={model.type}
              className={`${model.bgColor} p-10 lg:p-14 hover-lift text-center rounded-sm`}
            >
              <h3
                className={`text-xl lg:text-2xl font-bold ${model.textColor}`}
              >
                {model.type}
              </h3>
              <p
                className={`mt-3 text-[11px] tracking-[0.15em] uppercase ${model.textColor} opacity-40`}
              >
                {model.subtitle}
              </p>
              <p
                className={`mt-8 text-sm leading-relaxed ${model.textColor} opacity-60 max-w-xs mx-auto`}
              >
                {model.description}
              </p>
              <a
                href="#"
                className="mt-10 btn-red inline-flex text-[11px] py-3 px-7"
              >
                {model.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
