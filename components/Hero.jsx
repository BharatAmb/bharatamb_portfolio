"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const stats = [
    {
      value: "2+",
      label: "Years Experience",
    },
    {
      value: "5",
      label: "Products / Apps",
    },
    {
      value: "Open to Relocate",
      label: "Based in India",
    },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#fbfcfd] border-b border-slate-100"
    >
      {/* soft background decoration */}
      <div className="absolute -right-40 top-8 w-[520px] h-[520px] rounded-full bg-blue-50/70 blur-3xl pointer-events-none" />
      <div className="absolute left-[48%] top-24 w-72 h-72 rounded-full bg-emerald-50/40 blur-3xl pointer-events-none" />

      <div className="relative w-full px-6 md:px-10 lg:px-14 py-7">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            {/* availability */}
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-medium text-slate-600 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Available for new opportunities
            </div>

            <h1 className="font-serif text-[54px] sm:text-[68px] lg:text-[78px] leading-[0.92] tracking-[-0.04em] text-[#102039]">
              Hi, I’m
              <br />
              Bharat{" "}
              <span className="text-[#14725e]">
                Amb
              </span>
            </h1>

            <h2 className="mt-5 text-2xl sm:text-3xl font-bold text-[#102039]">
              Frontend Developer
            </h2>

            <p className="mt-4 max-w-xl text-[15px] sm:text-base leading-7 text-slate-600">
              I craft modern, responsive and high-performance web applications
              with React, TypeScript and modern tools. I love turning ideas into
              clean, delightful products that create real impact.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 mt-7">
              <motion.a
                href="#projects"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full bg-[#102039] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-[#17325a]"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="/Bharat_Frontend_Developer.docx"
                download
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-[#102039] shadow-sm transition hover:border-slate-400"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
            </div>

            {/* stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-10 max-w-xl">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="pr-4 border-r last:border-r-0 border-slate-200"
                >
                  <div className="font-bold text-[#102039] text-lg">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="lg:col-span-6 relative min-h-[430px] lg:min-h-[500px]"
          >
            {/* background shape */}
            <div className="absolute inset-x-6 top-10 bottom-0 rounded-[44%_56%_38%_62%/40%_35%_65%_60%] bg-gradient-to-br from-[#eef6ff] via-[#f4f8ff] to-[#eaf5f3]" />

            {/* handwritten left */}
            <div className="hidden md:block absolute left-7 top-16 z-20 rotate-[-5deg] text-slate-500 font-serif italic leading-6">
              Ideas
              <br />
              Code
              <br />
              Products
              <br />
              People
              <div className="mt-2 text-xl">↘</div>
            </div>

            {/* handwritten right */}
            <div className="hidden md:block absolute right-1 top-14 z-20 w-36 rounded-full bg-[#e7f0ff] px-6 py-5 text-center text-[#17325a] font-serif italic leading-5 rotate-[4deg]">
              Turning
              <br />
              ideas into
              <br />
              real products.
            </div>

            {/* descriptor */}
            <div className="hidden lg:block absolute right-6 top-[180px] z-20 border-l border-slate-300 pl-4 text-xs leading-5 font-semibold text-[#102039]">
              Frontend
              <br />
              Developer
              <br />& Lifelong Learner
            </div>

            <div className="absolute inset-0 z-10">
              <Image
                src="/AiBoy.png"
                alt="Bharat Amb Frontend Developer"
                fill
                priority
                className="object-contain object-bottom"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}