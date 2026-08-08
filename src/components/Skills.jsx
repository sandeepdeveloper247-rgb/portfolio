// import { motion } from "framer-motion";
// import {
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
//   FaGithub,
//   FaJava,
// } from "react-icons/fa";

// import {
//   SiExpress,
//   SiMongodb,
//   SiTailwindcss,
//   SiJavascript,
//   SiHtml5,
//   SiCss,
//   SiCplusplus,
//   SiPostman,
//   SiVercel,
//   SiRender,
// } from "react-icons/si";

// const skillGroups = [
//   {
//     title: "Frontend",
//     description: "Building responsive and interactive user interfaces.",
//     skills: [
//       { name: "React", icon: FaReact, color: "#61DAFB" },
//       { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
//       { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
//       { name: "CSS3", icon: SiCss, color: "#1572B6" },
//       { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
//     ],
//   },

//   {
//     title: "Backend",
//     description: "Developing APIs and server-side applications.",
//     skills: [
//       { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
//       { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
//       { name: "MongoDB", icon: SiMongodb, color: "#13AA52" },
//       { name: "REST APIs", icon: SiPostman, color: "#FF6C37" },
//     ],
//   },

//   {
//     title: "Languages & Tools",
//     description: "Problem solving, development and deployment tools.",
//     skills: [
//       { name: "C++", icon: SiCplusplus, color: "#00599C" },
//       { name: "Java", icon: FaJava, color: "#F89820" },
//       { name: "Git", icon: FaGitAlt, color: "#F1502F" },
//       { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
//       { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
//       { name: "Render", icon: SiRender, color: "#46E3B7" },
//     ],
//   },
// ];

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="relative scroll-mt-24 overflow-hidden px-6 py-32"
//     >
//       {/* Background glow */}
//       <div className="absolute right-[-200px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-500/10 blur-[150px]" />

//       <div className="relative z-10 mx-auto max-w-7xl">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7 }}
//         >
//           <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
//             Skills
//           </p>

//           <h2 className="text-4xl font-bold md:text-6xl">
//             My <span className="text-cyan-400">toolkit.</span>
//           </h2>

//           <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
//             Technologies and tools I use to build, debug and deploy
//             full-stack applications.
//           </p>
//         </motion.div>

//         {/* Skill Groups */}
//         <div className="mt-16 grid gap-6 lg:grid-cols-3">
//           {skillGroups.map((group, groupIndex) => (
//             <motion.div
//               key={group.title}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{
//                 duration: 0.7,
//                 delay: groupIndex * 0.12,
//               }}
//               whileHover={{ y: -8 }}
//               className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl"
//             >
//               {/* Category */}
//               <div className="mb-8">
//                 <h3 className="text-2xl font-semibold text-white">
//                   {group.title}
//                 </h3>

//                 <p className="mt-2 text-sm leading-6 text-gray-500">
//                   {group.description}
//                 </p>
//               </div>

//               {/* Skills */}
//               <div className="flex flex-wrap gap-3">
//                 {group.skills.map((skill) => {
//                   const Icon = skill.icon;

//                   return (
//                     <motion.div
//                       key={skill.name}
//                       whileHover={{
//                         scale: 1.05,
//                         y: -3,
//                       }}
//                       className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2"
//                     >
//                       <Icon
//                         size={20}
//                         style={{ color: skill.color }}
//                       />

//                       <span className="text-sm text-gray-300">
//                         {skill.name}
//                       </span>
//                     </motion.div>
//                   );
//                 })}
//               </div>

//               {/* Bottom accent */}
//               <div className="mt-8 h-px w-full bg-gradient-to-r from-cyan-400/40 via-purple-400/20 to-transparent" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaServer,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiVite,
  SiPostman,
  SiRender,
  SiVercel,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      { name: "React", icon: FaReact },
      { name: "JavaScript", icon: FaJs },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    description: "Building APIs and server-side applications.",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "REST APIs", icon: FaServer },
    ],
  },
  {
    title: "Tools & Platforms",
    description: "Tools I use to build, test and deploy applications.",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Vite", icon: SiVite },
      { name: "Render", icon: SiRender },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 overflow-hidden px-6 py-32"
    >
      {/* Background glow */}
      <div className="absolute left-[-200px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            My <span className="text-cyan-400">toolkit.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            Technologies and tools I use to turn ideas into functional,
            scalable applications.
          </p>
        </motion.div>

        {/* Skill groups */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/20"
            >
              {/* Group heading */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {group.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {group.description}
                  </p>
                </div>

                <span className="text-sm font-medium text-cyan-400/60">
                  0{index + 1}
                </span>
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-white/10" />

              {/* Skills */}
              <div className="grid grid-cols-2 gap-3">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="group/skill flex items-center gap-3 rounded-xl border border-white/5 bg-black/20 px-3 py-3 transition duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/5"
                    >
                      <Icon className="text-lg text-gray-400 transition duration-300 group-hover/skill:text-cyan-400" />

                      <span className="text-sm font-medium text-gray-400 transition duration-300 group-hover/skill:text-gray-200">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tech statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 text-center"
        >
          <p className="text-sm text-gray-500">
            Always learning, always building.
            <span className="ml-2 text-cyan-400">
              Currently exploring more of the modern web ecosystem.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;