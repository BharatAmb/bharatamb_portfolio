"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Layers3,
  Palette,
  Link2,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Monitor,
      title: "Frontend Development",
      desc: "Responsive, pixel-perfect UIs with React, Next.js and modern CSS.",
      bg: "bg-[#eef6ff]",
      iconBg: "bg-[#dceeff]",
      iconColor: "text-[#2385de]",
    },
    {
      icon: Layers3,
      title: "Web Applications",
      desc: "Scalable and performant web apps with real-world functionality.",
      bg: "bg-[#effaf8]",
      iconBg: "bg-[#daf4ef]",
      iconColor: "text-[#20a79b]",
    },
    {
      icon: Palette,
      title: "UI Development",
      desc: "Clean, accessible and user-friendly interfaces.",
      bg: "bg-[#fff1f1]",
      iconBg: "bg-[#ffe1e3]",
      iconColor: "text-[#ef6670]",
    },
    {
      icon: Link2,
      title: "Integration & APIs",
      desc: "Integrate REST APIs, handle state management and optimize performance.",
      bg: "bg-[#f5efff]",
      iconBg: "bg-[#e9ddff]",
      iconColor: "text-[#7e55d9]",
    },
  ];

  return (
    <section className="bg-[#fbfcfd] py-4">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT */}
          <div className="lg:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.14em] font-semibold text-emerald-600 mb-3">
              # Services
            </div>

            <h2 className="font-serif text-[44px] sm:text-[50px] leading-[0.98] tracking-[-0.03em] text-[#102039]">
              What I Can
              <br />
              Help You With
            </h2>

            <p className="text-sm leading-6 text-slate-500 mt-5 max-w-[250px]">
              From idea to deployment, I can help you build modern and
              scalable web solutions.
            </p>
          </div>

          {/* CARDS */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  whileHover={{ y: -4 }}
                  className={`${service.bg} min-h-[190px] rounded-2xl border border-slate-100 p-5`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${service.iconBg} ${service.iconColor} flex items-center justify-center mb-5`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-sm font-bold text-[#102039] leading-5">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[11px] leading-5 text-slate-500">
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}