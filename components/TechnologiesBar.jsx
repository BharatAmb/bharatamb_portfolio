"use client";

import React from "react";

export default function TechnologiesBar() {
  const techs = [
    { name: "React", slug: "react", hex: "61DAFB" },
    { name: "Next.js", slug: "nextdotjs", hex: "000000" },
    { name: "TypeScript", slug: "typescript", hex: "3178C6" },
    { name: "JavaScript", slug: "javascript", hex: "F7DF1E" },
    { name: "Tailwind CSS", slug: "tailwindcss", hex: "06B6D4" },
    { name: "Redux", slug: "redux", hex: "764ABC" },
    { name: "Node.js", slug: "nodedotjs", hex: "339933" },
    { name: "MongoDB", slug: "mongodb", hex: "47A248" },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-16 bg-[#fcfdfd] py-5"
    >
      <div className="w-full px-6 lg:px-10">
        <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#138469]">
          <span>#</span>
          Technologies
        </div>

        <div className="flex items-end justify-between">
          <h2 className="font-serif text-[38px] leading-none text-[#10213b]">
            Tools I Work With
          </h2>

          <div className="hidden rotate-[-4deg] font-serif text-[15px] italic leading-5 text-[#586b81] sm:block">
            Always learning,
            <br />
            always building.
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="flex h-[62px] items-center justify-center gap-2 rounded-lg border border-[#e4e9ef] bg-white px-3"
            >
              <img
                src={`https://cdn.simpleicons.org/${tech.slug}/${tech.hex}`}
                alt={tech.name}
                className="h-5 w-5"
              />

              <span className="whitespace-nowrap text-[10px] font-semibold text-[#10213b]">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}