// import { motion } from "framer-motion";

// const stats = [
//   {
//     value: "8.71",
//     label: "CGPA",
//     description: "B.Tech CSE",
//   },
//   {
//     value: "300+",
//     label: "LeetCode",
//     description: "Problems solved",
//   },
//   {
//     value: "98.03",
//     label: "JEE Percentile",
//     description: "Mains",
//   },
// ];

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="relative scroll-mt-24 overflow-hidden px-6 py-32"
//     >
//       {/* Background glow */}
//       <div className="absolute left-[-200px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

//       <div className="relative z-10 mx-auto max-w-7xl">
//         {/* Section Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7 }}
//         >
//           <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
//             About Me
//           </p>

//           <h2 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
//             Building things,
//             <span className="text-cyan-400"> learning constantly.</span>
//           </h2>
//         </motion.div>

//         {/* Main Content */}
//         <div className="mt-16 grid gap-12 md:grid-cols-2">
//           {/* About Text */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.7 }}
//             className="space-y-6"
//           >
//             <p className="text-lg leading-8 text-gray-300">
//               I'm Sandeep Pradhan, a Computer Science student at IIIT Una who
//               enjoys turning ideas into practical web applications.
//             </p>

//             <p className="text-lg leading-8 text-gray-400">
//               My current focus is full-stack development, where I'm working with
//               React, Node.js, Express and MongoDB to build complete applications
//               from the frontend to the backend.
//             </p>

//             <p className="text-lg leading-8 text-gray-400">
//               Alongside development, I regularly practice Data Structures and
//               Algorithms and work on projects that help me understand how
//               real-world systems are built.
//             </p>

//             <div className="pt-4">
//               <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
//                 <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
//                 Currently building & learning
//               </span>
//             </div>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.7, delay: 0.1 }}
//             className="grid gap-4 sm:grid-cols-3 md:grid-cols-1"
//           >
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 whileHover={{ y: -5 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 300,
//                   damping: 20,
//                 }}
//                 className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md"
//               >
//                 <div className="flex items-end justify-between">
//                   <div>
//                     <p className="text-4xl font-bold text-white">
//                       {stat.value}
//                     </p>

//                     <p className="mt-1 text-cyan-400">{stat.label}</p>
//                   </div>

//                   <span className="text-2xl text-gray-600 transition group-hover:text-cyan-400">
//                     0{index + 1}
//                   </span>
//                 </div>

//                 <p className="mt-3 text-sm text-gray-500">{stat.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import { motion } from "framer-motion";
import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden px-6 py-32"
    >
      {/* Background glow */}
      <div className="absolute right-[-180px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            More than just{" "}
            <span className="text-cyan-400">code.</span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="mt-16 grid gap-10 lg:grid-cols-5">

          {/* Main text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-10">

              <p className="text-lg leading-8 text-gray-300">
                I'm Sandeep Pradhan, a Computer Science undergraduate at
                IIIT Una with a strong interest in building full-stack web
                applications and solving challenging problems.
              </p>

              <p className="mt-6 text-base leading-8 text-gray-400">
                I enjoy taking an idea from a simple concept to a working
                application — designing the interface, building the backend,
                connecting databases, and making everything work together.
              </p>

              <p className="mt-6 text-base leading-8 text-gray-400">
                Alongside development, I consistently practice Data
                Structures and Algorithms and enjoy learning technologies
                by building real projects rather than only following
                tutorials.
              </p>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Full Stack Development",
                  "Problem Solving",
                  "React",
                  "Node.js",
                  "MongoDB",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400 transition hover:border-cyan-400/30 hover:text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats / profile cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-1"
          >

            {/* Education */}
            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20">
              <FaGraduationCap className="text-2xl text-cyan-400" />

              <p className="mt-5 text-sm text-gray-500">
                Education
              </p>

              <h3 className="mt-1 text-xl font-bold text-white">
                B.Tech CSE
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                IIIT Una
              </p>
            </div>

            {/* Coding */}
            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20">
              <FaCode className="text-2xl text-cyan-400" />

              <p className="mt-5 text-sm text-gray-500">
                Problem Solving
              </p>

              <h3 className="mt-1 text-xl font-bold text-white">
                300+ Problems
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                LeetCode
              </p>
            </div>

            {/* Focus */}
            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20">
              <FaLaptopCode className="text-2xl text-cyan-400" />

              <p className="mt-5 text-sm text-gray-500">
                Currently focused on
              </p>

              <h3 className="mt-1 text-xl font-bold text-white">
                Full Stack
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                React · Node · MongoDB
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;