"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contact" className="py-4 bg-white px-12 pb-5">
      <div className="w-full bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-slate-200/85 rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
        <div className="space-y-4 max-w-xl z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> LET’S WORK TOGETHER
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let’s build something <span className="text-blue-600">great</span>.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            I’m always open to new opportunities and exciting projects.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <motion.a 
              href="mailto:contact@bharatjatav.dev" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-blue-500/25 flex items-center gap-2 transition"
            >
              Get In Touch <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/80 backdrop-blur text-slate-700 border border-slate-200 font-medium px-6 py-3 rounded-xl flex items-center gap-2 transition shadow-xs"
            >
              <Download className="w-4 h-4 text-slate-500" /> Download Resume
            </motion.button>
          </div>
        </div>
        <div className="w-48 h-48 bg-blue-200/50 rounded-full blur-2xl absolute -bottom-10 right-10 pointer-events-none"></div>
      </div>
    </section>
  );
}