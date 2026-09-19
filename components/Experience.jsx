"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      logo: "E",
      period: "Aug 2025 – Present",
      company: "Educerns Technologies Pvt Ltd",
      role: "Frontend Developer",
      location: "India (On-site)",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      description: [
        "Led end-to-end development of the Educerns website with React, TypeScript and Tailwind.",
        "Built modules with reusable components and optimized performance.",
        "Integrated real-time APIs and delivered a smooth user experience.",
      ],
    },
    {
      logo: "Alg",
      period: "Oct 2024 – Aug 2025",
      company: "Aigetai Pvt Ltd",
      role: "Frontend Developer (Remote)",
      location: "Remote",
      tags: ["React", "Tailwind CSS", "API Integration"],
      description: [
        "Worked on client projects and delivered responsive web applications.",
        "Handled multiple features and collaborated with clients.",
        "Implemented modern UI using React and Tailwind CSS.",
      ],
    },
    {
      logo: "NI",
      period: "Mar 2024 – Sep 2024",
      company: "Numeric Infosystem Pvt Ltd",
      role: "Frontend Developer (Intern)",
      location: "On-site",
      tags: ["React", "JavaScript", "HTML/CSS"],
      description: [
        "Worked on development tasks and improved frontend components.",
        "Gained hands-on experience in React and JavaScript.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-[#fbfcfd] py-5"
    >
      <div className="w-full px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* LEFT INTRO */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="text-[11px] uppercase tracking-[0.14em] font-semibold text-blue-600 mb-3">
              # Experience
            </div>

            <h2 className="font-serif text-[46px] sm:text-[54px] leading-[0.98] tracking-[-0.03em] text-[#102039]">
              A Journey
              <br />
              of{" "}
              <span className="italic text-[#14725e]">
                Growth
              </span>
            </h2>

            <p className="mt-5 max-w-[260px] text-sm leading-6 text-slate-500">
              Each step has shaped me into a better developer,
              collaborator and problem solver.
            </p>

            <a
              href="#experience"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-[#102039] hover:border-blue-300 transition"
            >
              View Full Experience
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* TIMELINE */}
          <div className="lg:col-span-9 relative">
            <div className="absolute hidden md:block left-[126px] top-7 bottom-7 w-px bg-slate-200" />

            <div className="space-y-5">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="grid md:grid-cols-[130px_1fr] gap-4"
                >
                  {/* DATE */}
                  <div className="relative md:pr-7 text-xs text-slate-500 md:text-right">
                    <div className="pt-5 leading-5">
                      {exp.period}
                    </div>

                    <div className="hidden md:block absolute top-7 right-[-5px] w-[10px] h-[10px] rounded-full bg-blue-500 border-[3px] border-[#fbfcfd] ring-1 ring-blue-300" />
                  </div>

                  {/* CARD */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_6px_22px_rgba(15,23,42,0.035)]">
                    <div className="flex flex-col xl:flex-row xl:items-start gap-5">
                      {/* company logo */}
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#173b68] to-[#0470a9] text-white flex items-center justify-center shrink-0 font-bold text-lg">
                        {exp.logo}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                          <div>
                            <h3 className="font-bold text-[#102039] text-sm sm:text-base">
                              {exp.company}
                            </h3>

                            <p className="text-blue-600 font-semibold text-xs mt-0.5">
                              {exp.role}
                            </p>
                          </div>

                          <div className="inline-flex items-center gap-1 text-[11px] text-slate-500 whitespace-nowrap">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </div>
                        </div>

                        <ul className="mt-3 space-y-1">
                          {exp.description.map((item) => (
                            <li
                              key={item}
                              className="text-[11px] sm:text-xs leading-5 text-slate-500 flex gap-2"
                            >
                              <span className="mt-[8px] w-1 h-1 rounded-full bg-slate-400 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-medium text-blue-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}