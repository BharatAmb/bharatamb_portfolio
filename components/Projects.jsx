"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Aug CRM",
      category: "Business Tool",
      image: "/portfolioUI.png",
      desc: "CRM with party, vendor, stock, proforma invoice and more.",
      tags: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "EduHR",
      category: "Company Product",
      image: "/portfolioUI.png",
      desc: "HR management module with employee records and reports.",
      tags: ["React", "React Query"],
    },
    {
      title: "EduTex - GST Simulator",
      category: "Company Project",
      image: "/portfolioUI.png",
      desc: "Interactive GST calculator with multiple scenarios and reports.",
      tags: ["React", "TypeScript"],
    },
    {
      title: "Anstracknology",
      category: "E-commerce Project",
      image: "/portfolioUI.png",
      desc: "Custom Shopify theme for GPS tracking devices.",
      tags: ["Shopify", "Liquid", "JavaScript"],
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#fbfcfd] py-6 border-t border-slate-100"
    >
      <div className="w-full px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT */}
          <div className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.14em] font-semibold text-emerald-600 mb-3">
              # Projects
            </div>

            <h2 className="font-serif text-[44px] sm:text-[52px] leading-[0.98] text-[#102039] tracking-[-0.03em]">
              Projects that
              <br />
              create{" "}
              <span className="italic text-[#14725e]">
                real impact.
              </span>
            </h2>

            <p className="mt-5 max-w-[300px] text-sm leading-6 text-slate-500">
              A selection of products and case studies I’ve worked on.
              From dashboards to e-commerce, each project taught me
              something new.
            </p>
          </div>

          {/* RIGHT PROJECT GRID */}
          <div className="lg:col-span-8">
            <div className="flex justify-end mb-4">
              <a
                href="#projects"
                className="text-xs font-semibold text-blue-600 inline-flex items-center gap-1"
              >
                View All Projects
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  whileHover={{ y: -5 }}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-[0_6px_22px_rgba(15,23,42,0.03)]"
                >
                  <div className="relative h-[125px] bg-slate-100 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-bold text-[#102039]">
                          {project.title}
                        </h3>

                        <span className="inline-block mt-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-medium text-emerald-700">
                          {project.category}
                        </span>
                      </div>

                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    </div>

                    <p className="mt-3 text-[10px] leading-4.5 text-slate-500 min-h-[48px]">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-50 text-blue-600 rounded-full px-2 py-1 text-[9px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}