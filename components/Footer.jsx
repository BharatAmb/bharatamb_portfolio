"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#fcfdfd]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-6 pb-5 sm:flex-row lg:px-10">
        
        {/* Brand */}
        <div className="flex items-center gap-2.5">
        <span className="text-sm text-[#7b8797]">
            © {new Date().getFullYear()} Bharat Amb.
          </span>
        </div>

        {/* Navigation */}
        <div className="flex gap-5 text-md text-[#58677b]">
          <a
            href="#home"
            className="transition hover:text-[#14725e]"
          >
            Home
          </a>

          <a
            href="#projects"
            className="transition hover:text-[#14725e]"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="transition hover:text-[#14725e]"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="transition hover:text-[#14725e]"
          >
            Contact
          </a>
        </div>

        {/* Socials + Copyright */}
        <div className="flex items-center gap-4">

          {/* LinkedIn */}
          <a
            href="www.linkedin.com/in/bharat-jatav-27716a28a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#29415c] transition hover:text-[#14725e]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/BharatAmb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#29415c] transition hover:text-[#14725e]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M12 .7C5.73.7.65 5.78.65 12.05c0 5.01 3.25 9.26 7.76 10.76.57.1.78-.25.78-.55v-2.16c-3.16.69-3.83-1.34-3.83-1.34-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.66 1.24 3.31.95.1-.74.4-1.24.72-1.52-2.52-.29-5.17-1.26-5.17-5.61 0-1.24.44-2.25 1.17-3.05-.12-.29-.51-1.45.11-3.01 0 0 .95-.3 3.12 1.17A10.9 10.9 0 0 1 12 6.08c.97 0 1.94.13 2.85.38 2.17-1.47 3.12-1.17 3.12-1.17.62 1.56.23 2.72.11 3.01.73.8 1.17 1.81 1.17 3.05 0 4.36-2.65 5.31-5.18 5.6.41.35.77 1.05.77 2.12v3.15c0 .3.21.66.78.55 4.5-1.5 7.75-5.75 7.75-10.76C23.35 5.78 18.27.7 12 .7z" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:bharatamb26.com"
            aria-label="Email"
            className="text-[#29415c] transition hover:text-text-[#14725e]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
              />

              <path d="M3 7l9 6 9-6" />
            </svg>
          </a>

        
        </div>
      </div>
    </footer>
  );
}