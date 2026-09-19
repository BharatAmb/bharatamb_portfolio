"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Skills", "#skills"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8edf2] bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[58px] max-w-[1440px] items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#14725e] text-[12px] font-bold text-white">
            BA
          </div>

          <span className="text-sm font-bold text-[#10213b]">
            Bharat{" "}
            <span className="text-[#14725e]">
              Amb
            </span>
          </span>
        </a>

        {/* desktop */}
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href], index) => (
            <a
              key={label}
              href={href}
              className={`relative py-5 text-md font-medium transition ${
                index === 0
                  ? "text-[#10213b]"
                  : "text-[#5d6b80] hover:text-[#14725e]"
              }`}
            >
              {label}

              {index === 0 && (
                <span className="absolute bottom-[10px] left-0 h-[1.5px] w-full bg-[#10213b]" />
              )}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-[#10213b] px-5 py-2.5 text-[11px] font-semibold text-white transition hover:bg-[#19365e] lg:flex"
        >
          Let&apos;s Connect
          <ArrowRight className="h-3.5 w-3.5" />
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-[#10213b] lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <div className="space-y-1 px-6 py-4">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50"
                >
                  {label}
                </a>
              ))}

              <a
                href="#contact"
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#10213b] px-5 py-3 text-sm text-white"
              >
                Let&apos;s Connect
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}