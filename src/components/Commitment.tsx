"use client";

import { commitmentData } from "@/data/mockData";
import { useScrollReveal } from "@/hooks/useAnimations";

export default function Commitment() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="commitment" className="bg-[#f5f5f0] py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-12">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
          {/* Centered heading */}
          <div className="text-center mb-8">
            <h2 className="display-heading text-[clamp(2.5rem,6vw,4.5rem)] text-foreground">
              {commitmentData.sectionTitle}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground/50 max-w-lg mx-auto">
              {commitmentData.sectionDescription}
            </p>
          </div>

          {/* Pricing cards */}
          <div className="mt-14 grid lg:grid-cols-2 gap-6">
            {commitmentData.models.map((model) => (
              <div
                key={model.type}
                className={`${model.bgColor} p-10 lg:p-12 hover-lift text-center`}
              >
                <h3
                  className={`text-xl lg:text-2xl font-bold ${model.textColor}`}
                >
                  {model.type}
                </h3>
                <p
                  className={`mt-2 text-[11px] tracking-[0.15em] uppercase ${model.textColor} opacity-40`}
                >
                  {model.subtitle}
                </p>
                <p
                  className={`mt-6 text-sm leading-relaxed ${model.textColor} opacity-60 max-w-xs mx-auto`}
                >
                  {model.description}
                </p>
                <a
                  href="#"
                  className="mt-8 btn-red inline-flex text-[11px] py-3 px-6"
                >
                  {model.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
