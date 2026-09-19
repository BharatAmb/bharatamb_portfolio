"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

export default function EducationAndCertifications() {
  const certifications = [
    { title: "Full-Stack Development", issuer: "(PS Softech Pvt Ltd)" },
    { title: "React.js Development", issuer: "(HiTech Choudhary)" },
    { title: "Frontend Development", issuer: "(Educerns Technologies Pvt Ltd)" },
  ];

  return (
    <section id="education" className="py-5 bg-white">
      <div className="w-full px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> EDUCATION
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">My Academic Background</h2>
          </div>

          <div className="bg-slate-50 border border-slate-200/85 rounded-2xl p-6 flex items-start gap-4 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-900 text-base">Bachelor of Computer Science</h3>
              <p className="text-xs text-slate-600 font-medium">Smart Mahatma Gandhi Govt. Model Science College</p>
              <div className="text-xs font-semibold text-blue-600 pt-2">Jun 2021 – Jul 2025</div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> CERTIFICATIONS
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">Certifications.</h2>
          </div>

          <div className="bg-slate-50 border border-slate-200/85 rounded-2xl p-6 flex items-start gap-4 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/20">
              <Award className="w-6 h-6" />
            </div>
            <div className="space-y-3 w-full">
              {certifications.map((cert, i) => (
                <div key={i} className={`${i !== certifications.length - 1 ? 'border-b border-slate-200 pb-2' : ''}`}>
                  <div className="font-bold text-slate-900 text-sm">{cert.title}</div>
                  <div className="text-xs text-slate-500">{cert.issuer}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}