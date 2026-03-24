"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
const sectionVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};
const skillsData = [

  {
    title: "Frontend Development",
    description:
      "Angular, React.js, Next.js",
  },
  {
    title: "UI/UX Design",
    description:
      "Photoshop, Figma, Wireframing,Power BI",
  },
  {
    title: "Web Development",
    description:
      "JavaScript (ES6), TypeScript, Node.js, MySQL,HTML5, CSS3, SCSS,Bootstrap, Tailwind CSS, Material UI, Angular Material, Prime NG, Reusable Component Libraries, Responsive Design",
  },
  {
    title: "Development Skills",
    description:
      "Docker, GitHub, Postman, Swagger, REST APIs, Unit Testing, E2E Testing,CI/CD pipeline, Git, Bitbucket, AppDynamics, SonarQube, Adobe Analytics, Splunk, Camunda, Swagger, OpenID, Jenkins, Webpack, GitHub, Agile/Scrum Jira, Confluence",
  },
  {
    title: "Libraries",
    description:
      "Vite,jQuery, RxJS, NgRx, Redux Toolkit, Micro Frontends, Module Federation, Web Components, Ag-grid",
  },
  {
    title: "Backend & API Integration",
    description:
      "REST APIs, GraphQL, Node.js, Express.js, API Error Handling, Secure Authentication & Authorization",
  },
  {
    title: "Testing",
    description:
      "Jasmine, Karma, Playwright, Jest, React Testing Library, Unit Testing, Integration Testing, TDD",
  },
  {
    title: "AI Tools",
    description:
      "ChatGPT, GitHub Copilot, Copilot for Microsoft 365",
  },
  {
    title: "Prompt Engineering",
    description:
      "Task-specific prompt design, AI-assisted code generation, workflow optimization",
  },
  {
    title: "Soft Skills",
    description:
      "Leadership, Planning, Problem-Solving, Teamwork, Analytical Thinking, Team Lead, Stakeholder Management",
  }
];
const experienceData = [
  {
    role: "FRONT-END TEAM LEAD",
    company: "Morgan Stanley",
    duration: "June, 2021 – Present",
    description:
      "Identity and Access management (IAM) is a critical aspect of cybersecurity that focuses on managing and controlling user access to systems, applications, and data. It involves the processes and technologies used to ensure that only authorized individuals can access specific resources while preventing unauthorized access. IAM encompasses various components, including user authentication, authorization, and user management. It helps organizations protect sensitive information, maintain compliance with regulations, and enhance overall security posture by ensuring that users have appropriate access rights based on their roles and responsibilities within the organization.",
  },
  {
    role: "SENIOR FRONT-END/UI DEVELOPER ",
    company: "Flipkart",
    duration: "June, 2020 – May, 2021",
    description:
      "Worked on the Flipkart Seller Hub, a comprehensive platform that empowers sellers to manage their online businesses effectively. The Seller Hub provides a wide range of tools and features to help sellers optimize their operations, track performance, and grow their sales on the Flipkart marketplace.",
  },
  {
    role: "SENIOR FRONT-END DEVELOPER",
    company: "Incedo Technologies",
    duration: "July, 2018 – March, 2020",
    description:
      "Incedo is a product-based company where I worked on internal projects.",
  },
  {
    role: "SENIOR SOFTWARE ENGINEER ",
    company: "Cepgemini",
    duration: "April, 2015 – July, 2018",
    description:
      "Designed and developed user-friendly websites.",
  },
];
const educationData = [
  {
    degree: "Bachelor of Engineering (B.E.) in Computer Science",
    college:
      "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal",
    duration: "Apr, 2008 – May, 2012",
    description: "Outstanding Academic Achievement Award.",
  }
];
const certificates = [
  {
    title: "Certified Scrum Product Owner (CSPO)",
    platform: "Scrum Alliance",
    image: "/CSPO.jpeg",
  },
  {
    title: "Morgan Stanley Do the Right Thing Award",
    platform: "Morgan Stanley",
    image: "/DTRT.jpeg",
  },
  {
    title: "Mogan Stanley Global Excellence Award",
    platform: "Morgan Stanley",
    image: "/GEA.jpeg",
  },
  {
    title: "Mogan Stanley Put Clients First Award",
    platform: "Morgan Stanley",
    image: "/PCF.jpeg",
  },
  {
    title: "Mogan Stanley Lead With Exceptional Ideas Award",
    platform: "Morgan Stanley",
    image: "/LWEI.jpeg",
  },
  {
    title: "Mogan Stanley Global Technology Expo Award",
    platform: "Morgan Stanley",
    image: "/GTE.jpeg",
  }
];
const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
export default function Portfolio() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] text-black font-sans">

      {/* Navbar */}
      <div className="fixed top-0 w-full z-50 border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur">

        <div className="flex justify-between items-center px-6 md:px-10 py-4 max-w-7xl mx-auto">

          {/* Logo */}
          <h1 className="font-bold text-lg">Sonali Mittal.</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm tracking-wide">
            <a href="#about" className="hover:text-purple-600 transition">ABOUT ME</a>
            <a href="#skills" className="hover:text-purple-600 transition">SKILLS</a>
            <a href="#experience" className="hover:text-purple-600 transition">EXPERIENCE</a>
            <a href="#education" className="hover:text-purple-600 transition">EDUCATION</a>
            <a href="#certification" className="hover:text-purple-600 transition">CERTIFICATION</a>
            <a href="#projects" className="hover:text-purple-600 transition">PORTFOLIO</a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setOpen(!open)}
          >
            <span className={`w-6 h-[2px] bg-black dark:bg-white transition ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-[2px] bg-black dark:bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`w-6 h-[2px] bg-black dark:bg-white transition ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>

        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex flex-col gap-4 px-6 pb-6 text-sm bg-white dark:bg-gray-900 border-t">

            <a href="#about" onClick={() => setOpen(false)}>ABOUT ME</a>
            <a href="#skills" onClick={() => setOpen(false)}>SKILLS</a>
            <a href="#experience" onClick={() => setOpen(false)}>EXPERIENCE</a>
            <a href="#education" onClick={() => setOpen(false)}>EDUCATION</a>
            <a href="#certification" onClick={() => setOpen(false)}>CERTIFICATION</a>
            <a href="#projects" onClick={() => setOpen(false)}>PORTFOLIO</a>

          </div>
        </div>

      </div>

      {/* about */}
      <section id="about" className="min-h-screen flex items-center px-10 pt-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <motion.div initial="hidden" animate="visible" variants={sectionVariant}>

            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">
              I Am Sonali Mittal 10+ Years
            </h1>

            <p className="mt-4 text-lg text-gray-700 font-medium">
              <Typewriter
                words={[
                  "React Developer",
                  "Angular Developer",
                  "Frontend Engineer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed">
              I am a frontend developer with 10+ years of experience in building high-performance web applications.
              My core expertise lies in modern JavaScript frameworks, particularly{" "}
              <span className="text-purple-500 font-medium">
                Angular, React, Next.js and Statemanagement libraries like NgRx and Redux Toolkit
              </span>, where I focus on creating scalable, maintainable, and user-friendly interfaces.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              I specialize in developing pixel-perfect, responsive UIs using{" "}
              <span className="text-purple-500 font-medium">
                HTML5, CSS3, Tailwind,JavaScript(ES6+) and TypeScript
              </span>, ensuring seamless user experiences across devices.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Beyond clean code, I focus on understanding user behavior to build intuitive and
              results-driven applications. I actively leverage AI tools like{" "}
              <span className="text-purple-500 font-medium">
                ChatGPT and GitHub Copilot
              </span>{" "}
              to enhance productivity, optimize workflows, and improve development efficiency.
            </p>

            <p className="mt-4 text-gray-600">
              Skilled in <span className="text-purple-500">React, Angular, Next.js, TypeScript</span>
            </p>
            <div className="mt-8 flex items-center gap-4 flex-wrap">

              {/* Download CV Button */}
              <a
                href="/Sonali_10Y+_Frontend_lead.pdf"
                download
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition"
              >
                DOWNLOAD CV
              </a>

              {/* Social Icons */}
              <div className="flex gap-3">

                <a href="https://www.linkedin.com/in/sonali-mittal-641a6a3b/" target="_blank">
                  <FaLinkedin className="text-white bg-purple-500 p-2 w-10 h-10 rounded-md" />
                </a>

                <a href="https://github.com/SonaliMittal?tab=repositories" target="_blank">
                  <FaGithub className="text-white bg-gray-800 p-2 w-10 h-10 rounded-md" />
                </a>

                {/* <a href="https://instagram.com" target="_blank">
                  <FaInstagram className="text-white bg-pink-500 p-2 w-10 h-10 rounded-md" />
                </a> */}

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mittal.sonali221@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdEmail className="text-white bg-gray-600 p-2 w-10 h-10 rounded-md hover:scale-110 transition" />
                </a>
                <a href="https://wa.me/917848042015" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="text-white bg-green-500 p-2 w-10 h-10 rounded-md hover:scale-110 transition" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-96">

              {/* BACK CARD (purple layer) */}
              <div className="absolute top-4 left-4 w-full h-full bg-purple-900 rounded-2xl"></div>

              {/* FRONT CARD (image container) */}
              <div className="relative w-full h-full bg-gray-100 rounded-2xl overflow-hidden shadow-xl">

                <img
                  src="/profile.png"
                  alt="profile"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* Skills */}
      <motion.section
        id="skills"
        className="py-24 max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >

        <motion.div variants={itemVariant} className="mb-12">
          <h2 className="text-3xl font-bold">
            Skills<span className="text-purple-500">.</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl">
            I am eager to apply my expertise to contribute to impactful projects.
            I focus on building scalable, high-performance applications with modern technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              className="pb-6 border-b border-gray-200"
            >
              <h3 className="text-purple-600 font-semibold">
                {skill.title}
              </h3>

              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}

        </div>

      </motion.section>

      {/* Experience */}
      <motion.section
        id="experience"
        className="py-24 max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >

        <motion.div variants={itemVariant} className="mb-12">
          <h2 className="text-3xl font-bold">
            Experience<span className="text-purple-500">.</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl">
            I am eager to apply my expertise to contribute to impactful projects.
            I focus on building scalable, high-performance applications with modern technologies.
          </p>
        </motion.div>

        <div className="space-y-10">

          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="pb-6 border-b border-gray-200"
            >
              {/* Role + Company */}
              <h3 className="text-purple-600 font-semibold text-lg">
                {exp.role}
                <span className="text-gray-600 font-normal ml-2">
                  {exp.company}
                </span>
              </h3>

              {/* Duration */}
              <p className="text-sm text-gray-500 mt-1">
                {exp.duration}
              </p>

              {/* Description */}
              <p className="mt-3 text-gray-600 italic">
                {exp.description}
              </p>
            </motion.div>
          ))}

        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        id="education"
        className="py-24 max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <motion.div variants={itemVariant} className="mb-12">
          <h2 className="text-3xl font-bold">
            Education<span className="text-purple-500">.</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl">
            Throughout my life, I have been motivated by a deep conviction that education holds great significance. I make it a point to acquire new knowledge every day.
          </p>
        </motion.div>

        <div className="space-y-10">

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="pb-6 border-b border-gray-200"
            >
              {/* Degree + College */}
              <h3 className="text-purple-600 font-semibold text-lg">
                {edu.degree}
                <span className="text-gray-600 font-normal ml-2">
                  {edu.college}
                </span>
              </h3>

              {/* Duration */}
              <p className="text-sm text-gray-500 mt-1">
                {edu.duration}
              </p>

              {/* Description */}
              <p className="mt-3 text-gray-600 italic leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}

        </div>
      </motion.section>

      {/* Certification */}
      <motion.section
        id="certification"
        className="py-24 max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <h2 className="text-3xl font-bold mb-12">
          Certification<span className="text-purple-500">.</span>
        </h2>
        <p className="mt-2 mb-4 text-gray-600 leading-relaxed max-w-2xl">
          Throughout my life, I have been motivated by a deep conviction that education holds great significance. I make it a point to acquire new knowledge every day.
        </p>



        {/* TOP GRID */}
        {/* <div className="grid md:grid-cols-2 gap-10 mb-16">

          <div>
            <h3 className="text-purple-600 font-semibold mb-4">
              VIT University Certification
            </h3>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Data Science and Cognitive Computing - 2014</li>
              <li>C Training by IIT Bombay - 2014</li>
              <li>Cisco Network Design & Implementation - 2015</li>
            </ul>

            <div className="border-b mt-6"></div>
          </div>

          <div>
            <h3 className="text-purple-600 font-semibold mb-4">
              VIT University Awards
            </h3>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Awarded 2nd Prize in Project Based Learning (PBL)</li>
              <li>Best PBL Award in Carpooling Android App</li>
            </ul>

            <div className="border-b mt-6"></div>
          </div>

        </div> */}

        {/* CERTIFICATE CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-4">
                <h4 className="font-semibold flex items-center gap-2">
                  {cert.title}
                  {/* <span className="text-purple-500">↗</span> */}
                </h4>

                <p className="text-sm text-gray-500 mt-1">
                  {cert.platform}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </motion.section>

      {/* Projects */}
      {/* <motion.section
        id="projects"
        className="py-24 max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <h2 className="text-3xl font-semibold mb-10">Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((p) => (
            <div key={p} className="border p-6 rounded-xl hover:shadow-xl transition">
              <h3 className="font-bold">Project {p}</h3>
              <p className="text-gray-600 mt-2">Project description</p>
            </div>
          ))}
        </div>
      </motion.section> */}

    </div>
  );
}
