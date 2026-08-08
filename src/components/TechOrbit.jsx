// import { motion } from "framer-motion";
// import techStack from "../data/techStack";

// const TechOrbit = () => {
//   const radius = 190;

//   return (
//     <motion.div
//       className="absolute inset-0 z-20"
//       animate={{ rotate: 360 }}
//       transition={{
//         duration: 25,
//         repeat: Infinity,
//         ease: "linear",
//       }}
//     >
//       {techStack.map((tech, index) => {
//         const angle = (360 / techStack.length) * index;
//         const Icon = tech.icon;

//         return (
//           <div
//             key={index}
//             className="absolute left-1/2 top-1/2"
//             style={{
//               transform: `rotate(${angle}deg) translateX(${radius}px)`,
//             }}
//           >
//             <div
//               style={{
//                 transform: `rotate(-${angle}deg)`,
//               }}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.25 }}
//                 className="flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-slate-900 shadow-lg backdrop-blur-md"
//                 style={{
//                   boxShadow: `0 0 25px ${tech.color}40`,
//                 }}
//               >
//                 <Icon
//                   size={28}
//                   style={{
//                     color: tech.color,
//                   }}
//                 />
//               </motion.div>
//               </div>
//           </div>
//         );
//       })}
//     </motion.div>
//   );
// };

// export default TechOrbit;
import { motion } from "framer-motion";
import techStack from "../data/techStack";

const TechOrbit = () => {
  const orbitSize = 380;
  const duration = 25;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2"
      animate={{ rotate: 360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {techStack.map((tech, index) => {
        const Icon = tech.icon;
        const angle = (360 / techStack.length) * index;

        return (
          <div
            key={index}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `rotate(${angle}deg) translateY(-${orbitSize / 2}px)`,
            }}
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.25,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
                className="flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-slate-900/95 backdrop-blur-md"
                style={{
                  boxShadow: `0 0 25px ${tech.color}40`,
                }}
              >
                <Icon
                  size={28}
                  style={{
                    color: tech.color,
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default TechOrbit;