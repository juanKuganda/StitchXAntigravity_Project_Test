"use client";

import { capabilitiesData } from "@/data/mockData";
import { useScrollReveal } from "@/hooks/useAnimations";

export default function Capabilities() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="bg-[#f5f5f0] py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-12">
        {/* Main editorial headline */}
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
          <p className="text-[clamp(1.4rem,2.8vw,2rem)] font-bold leading-[1.45] text-foreground max-w-3xl italic">
            {capabilitiesData.headline}
          </p>
        </div>

        {/* Client logos strip */}
        <div className="mt-16 flex items-center gap-6 flex-wrap">
          {capabilitiesData.clients.map((client) => (
            <div
              key={client}
              className="h-10 w-10 rounded bg-foreground/5 flex items-center justify-center text-[9px] font-bold text-foreground/25 hover:bg-foreground/10 hover:text-foreground/50 transition-all duration-300 cursor-default"
            >
              {client.substring(0, 2).toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
