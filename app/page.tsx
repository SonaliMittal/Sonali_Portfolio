"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Task Management App",
    desc: "Jira-like app with drag-drop, filters, and state management.",
    github: "https://github.com/your-repo-1",
  },
  {
    title: "Analytics Dashboard",
    desc: "Charts + API integration with performance optimizations.",
    github: "https://github.com/your-repo-2",
  },
  {
    title: "E-commerce UI",
    desc: "Cart, filters, and responsive UI with modern UX.",
    github: "https://github.com/your-repo-3",
  },
];

export default function Portfolio() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "bg-gray-900 text-white" : "bg-white text-black"}>
      <div className="min-h-screen p-6 transition-all duration-500">

        {/* Toggle */}
        <div className="flex justify-end">
          <button
            onClick={() => setDark(!dark)}
            className="px-4 py-2 rounded-xl border"
          >
            {dark ? "Light Mode ☀️" : "Dark Mode 🌙"}
          </button>
        </div>

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-20"
        >
          <h1 className="text-5xl font-bold">Hi, I'm Sonali 👋</h1>
          <p className="mt-4 text-lg">Frontend Developer (React & Angular)</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-6 px-6 py-3 bg-blue-500 rounded-2xl shadow-lg"
          >
            View Projects
          </motion.button>
        </motion.section>

        {/* About */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="py-10 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className="mt-4 opacity-80">
            I build scalable, high-performance frontend applications using React and Angular. Passionate about clean UI and great user experience.
          </p>
        </motion.section>

        {/* Skills */}
        <section className="py-10">
          <h2 className="text-3xl font-semibold">Skills</h2>
          <div className="flex gap-4 mt-6 flex-wrap">
            {["React", "Angular", "TypeScript", "Next.js", "Tailwind"].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gray-700 rounded-xl"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="py-10">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-gray-800 p-6 rounded-2xl shadow-xl"
              >
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-2 opacity-70">{p.desc}</p>
                <a
                  href={p.github}
                  target="_blank"
                  className="mt-4 inline-block text-blue-400"
                >
                  GitHub →
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="py-16 text-center"
        >
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p className="mt-4">sonali@email.com</p>
        </motion.section>
      </div>
    </div>
  );
}
