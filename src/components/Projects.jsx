import urlShortenerImage from "../assets/projects/url-shortener.png";
import collegeManagementImage from "../assets/projects/college-management.png";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiEjs,
  SiTailwindcss,
} from "react-icons/si";

const projects = [
  {
    title: "URL Shortener",
    category: "Full Stack Web Application",
    description:
      "A full-stack URL shortening platform that creates unique short URLs, redirects users efficiently, and tracks visit history through a dedicated analytics system.",
    github: "https://github.com/sandeepdeveloper247-rgb/URL-Shortener",
    live: "https://url-shortener-ea1u.onrender.com",
    image: urlShortenerImage,
    featured: true,
    tech: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "EJS", icon: SiEjs },
    ],
  },

  {
    title: "College Management System",
    category: "Full Stack Web Application",
    description:
      "A full-stack college management platform with role-based authentication and dedicated student and admin dashboards for managing academic information.",
    github:
      "https://github.com/sandeepdeveloper247-rgb/college-management-system",
    live: null,
    image: collegeManagementImage,
    featured: false,
    tech: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-hidden px-6 py-32"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            Things I've <span className="text-cyan-400">built.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            A selection of projects where I applied what I learned to build
            complete, functional applications.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mt-16 space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl ${
                project.featured ? "lg:min-h-[420px]" : ""
              }`}
            >
              {/* Hover glow */}
              <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-cyan-400/10 blur-[100px] transition duration-700 group-hover:bg-cyan-400/20" />

              <div className="grid lg:grid-cols-5">
                {/* Project Visual */}
                <div className="relative min-h-[300px] overflow-hidden border-b border-white/10 lg:col-span-2 lg:border-b-0 lg:border-r">
                  <div className="absolute inset-0 bg-cyan-500/5" />

                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="relative h-full min-h-[300px] w-full object-cover object-top transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  <div className="absolute left-6 top-6 rounded-xl border border-white/10 bg-slate-950/70 px-3 py-2 text-xs font-semibold text-cyan-300 backdrop-blur-md">
                    0{index + 1}
                  </div>
                </div>

                {/* Project Information */}
                <div className="p-8 lg:col-span-3 lg:p-12">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-300">
                      {project.category}
                    </span>

                    {project.featured && (
                      <span className="rounded-full border border-purple-400/20 bg-purple-400/5 px-3 py-1 text-xs font-medium text-purple-300">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="mt-6 text-3xl font-bold text-white md:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.tech.map((tech) => {
                      const Icon = tech.icon;

                      return (
                        <div
                          key={tech.name}
                          className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/20 px-3 py-2"
                        >
                          <Icon className="text-lg text-cyan-400" />

                          <span className="text-sm text-gray-300">
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Links */}
                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
                    >
                      <FaGithub />
                      GitHub
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

// {/* <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden border-b border-white/10 lg:col-span-2 lg:border-b-0 lg:border-r">

//                   <div className="absolute h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />

//                   <div className="relative flex h-44 w-44 items-center justify-center rounded-3xl border border-cyan-400/20 bg-slate-950 shadow-[0_0_80px_rgba(34,211,238,0.12)] transition duration-500 group-hover:scale-105">

//                     <div className="absolute inset-4 rounded-2xl border border-cyan-400/10" />

//                     <span className="text-5xl font-black text-cyan-400">
//                       {index === 0 ? "01" : "02"}
//                     </span>
//                   </div>

//                   {/* Decorative lines */}
//                   <div className="absolute left-8 top-8 h-12 w-12 border-l border-t border-cyan-400/20" />
//                   <div className="absolute bottom-8 right-8 h-12 w-12 border-b border-r border-cyan-400/20" />
//                 </div> */}
