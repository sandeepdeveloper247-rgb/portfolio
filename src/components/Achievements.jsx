import { motion } from "framer-motion";
import {
  FaTrophy,
  FaCode,
  FaMedal,
  FaGraduationCap,
} from "react-icons/fa";

const achievements = [
  {
    icon: FaCode,
    number: "400+",
    title: "LeetCode Problems",
    description:
      "Consistent problem solving across data structures and algorithms.",
  },
  {
    icon: FaTrophy,
    number: "98.03",
    title: "JEE Mains Percentile",
    description:
      "Strong performance in one of India's most competitive engineering entrance examinations.",
  },
  {
    icon: FaMedal,
    number: "95.8%",
    title: "Class XII",
    description:
      "Scored 95.8% in CBSE Class XII.",
  },
  {
    icon: FaGraduationCap,
    number: "8.78",
    title: "CGPA",
    description:
      "Maintaining a strong academic record in B.Tech Computer Science.",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative scroll-mt-24 overflow-hidden px-6 py-32"
    >
      {/* Background glow */}
      <div className="absolute left-[-200px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Achievements
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            Numbers that <span className="text-cyan-400">matter.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            A few milestones from my academic journey and
            problem-solving practice.
          </p>
        </motion.div>

        {/* Achievement Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <motion.div
                key={achievement.title}
                initial={{
                  opacity: 0,
                  y: 50,
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
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl"
              >
                {/* Glow */}
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:bg-cyan-400/20" />

                {/* Icon */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5">
                  <Icon className="text-lg text-cyan-400" />
                </div>

                {/* Number */}
                <p className="mt-7 text-4xl font-black text-white">
                  {achievement.number}
                </p>

                {/* Title */}
                <h3 className="mt-2 text-lg font-semibold text-gray-200">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {achievement.description}
                </p>

                {/* Bottom line */}
                <div className="mt-6 h-px w-full bg-gradient-to-r from-cyan-400/40 to-transparent" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;