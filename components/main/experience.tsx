"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const experiences = [
{
    role: "Junior Frontend Developer (React.js)",
    company: "Qubitse Enterprises Pvt. Ltd.",
    duration: "Feb 2024 - Apr 2026",
    location: "Karachi, Pakistan",
    points: [
      "Architected responsive, scalable UI features using **React.js** and **Tailwind CSS** for **HAR.com**, integrating complex RESTful APIs to optimize dynamic property data rendering and enhance feature delivery speed by 20%.",
      "Streamlined complex global states using **Redux Toolkit** and managed asynchronous API middleware, reducing render-blocking friction and improving data fetching efficiency across high-traffic workflows by 30%.",
      "Implemented secure user authentication workflows and automated client-side data validations using **React Hook Form**, mitigating input vulnerabilities and data submission lag.",
      "Managed end-to-end frontend updates, dynamic form handling, and web performance optimization for various multi-client platforms built on **WordPress** CMS templates."
    ],
  },
{
    role: "Freelance Frontend Engineer (React.js / Next.js)",
    company: "Self-Employed / Independent Contract",
    duration: "2022 - 2024", // 2 Saal ka experience
    location: "Karachi, Pakistan (Remote)",
    points: [
      "Engineered tailored client interfaces using **React.js** and **Next.js**, delivering high-fidelity responsive web applications and component-driven modular systems.",
      "Integrated secure third-party **RESTful APIs**, user authorization, and dynamic dashboard modules, enhancing system processing flow and layout consistency.",
      "Utilized modern CSS architectures including **Tailwind CSS** and **shadcn/ui** to accelerate initial production design delivery times by 25%.",
      "Collaborated closely with small businesses to modernize legacy templates into optimized single-page applications (SPAs) with robust client-side validation."
    ]
  }
];

export const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="experience"
      ref={ref}
      className="w-full overflow-hidden relative px-4 md:px-10 xl:pb-20 xl:pt-16"
    >
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="px-4 text-center"
        >
          <h2 className="text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-purple-400 font-semibold mb-2 md:mb-3">
            Career Path
          </h2>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 flex flex-wrap items-center justify-center gap-2 md:gap-4 leading-[1.1]">
            <span className="inline text-2xl md:text-5xl">💼</span>
            <span>Professional</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Experience
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed md:leading-loose">
            A chronological timeline of my evolution from associate software
            engineering to{" "}
            <span className="text-white font-medium border-b border-purple-500/40 hover:border-purple-500/80 transition pb-0.5">
              full-stack software engineering
            </span>{" "}
            and high-performance{" "}
            <span className="text-white font-medium border-b border-purple-500/40 hover:border-purple-500/80 transition pb-0.5">
              enterprise platform architecture.
            </span>
          </p>

          <div className="relative w-16 md:w-24 h-[2px] mx-auto mt-6 md:mt-8 overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-shimmer" />
            <div className="w-full h-full bg-purple-500/30 blur-[1px]" />
          </div>
        </motion.div>
      </div>

      {/* TIMELINE SECTION */}
      <div className="relative w-full max-w-5xl mx-auto z-10">
        <div className="absolute left-4 md:left-1/2 top-0 w-[3px] h-full bg-white/10 transform md:-translate-x-1/2 rounded-full overflow-hidden">
          <motion.div
            style={{ scaleY }}
            className="w-full h-full bg-gradient-to-b from-purple-500 via-cyan-400 to-purple-600 origin-top shadow-[0_0_15px_rgba(6,182,212,0.8)]"
          />
        </div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`mb-20 flex flex-col md:flex-row items-center w-full relative ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            <div className="absolute left-2.5 md:left-1/2 transform md:-translate-x-1/2 z-20">
              <div className="w-4 h-4 bg-white rounded-full border-2 border-purple-500 shadow-[0_0_10px_#a855f7] animate-pulse" />
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`relative p-[2px] rounded-2xl group w-[90%] ml-12 md:ml-0 md:w-[46%] lg:w-[44%]`}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70 blur-sm group-hover:opacity-100 animate-pulse transition-opacity duration-500" />

              <div className="relative bg-zinc-900/95 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl">
                <div className="mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
                    {exp.role.split("|")[0]}
                    {exp.role.includes("|") && (
                      <span className="text-purple-500 font-medium text-lg md:text-xl ml-2">
                        ~ {exp.role.split("|")[1].trim()}
                      </span>
                    )}
                  </h2>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2">
                    <span className="text-cyan-400 text-sm font-bold uppercase tracking-wider">
                      {exp.company}
                    </span>
                    <span className="hidden sm:block text-gray-600">•</span>
                    <span className="text-gray-400 text-xs font-medium">
                      {exp.duration}
                    </span>
                    <span className="hidden sm:block text-gray-600">•</span>
                    <span className="text-gray-500 text-[11px] uppercase tracking-tighter italic">
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="text-gray-300 text-sm md:text-[14px] space-y-4">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 group/item">
                      <span className="text-purple-500 text-lg leading-none mt-1">
                        ▹
                      </span>
                      <span className="group-hover/item:text-white transition-colors leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* BACKGROUND VIDEO */}
      <div className="w-full h-full absolute inset-0 pointer-events-none opacity-[0.1] flex items-center justify-center z-[-1]">
        <video
          className="w-full max-w-[1400px] h-full object-contain"
          preload="none"
          playsInline
          loop
          muted
          autoPlay
        >
          <source src="/videos/skills-bg.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
};
