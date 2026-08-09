// import Button from "./Button";
// import { motion } from "framer-motion";
// import TechOrbit from "./TechOrbit";

// const Hero = () => {
//   return (
//     // <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-28">
//     <section className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24 sm:px-6 sm:pt-28">
//       {/* Background Glow */}
//       <div className="absolute left-[-200px] top-[-150px] h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[150px]" />

//       <div className="absolute right-[-200px] bottom-[-150px] h-[450px] w-[450px] rounded-full bg-purple-500/20 blur-[150px]" />

//       <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

//       {/* Main Container */}
//       {/* <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-2"> */}
//       <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 sm:gap-12 md:grid-cols-2">
//         {/* Left Side */}
//         <motion.div
//           initial={{ opacity: 0, x: -80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//         >
//           <p className="mb-4 text-lg font-medium text-cyan-400">Hello, I'm</p>

//           <h1 className="text-6xl font-black leading-none md:text-8xl">
//             SANDEEP
//           </h1>

//           <h1 className="bg-gradient-to-r from-white via-cyan-300 to-cyan-500 bg-clip-text text-6xl font-black leading-none text-transparent md:text-8xl">
//             PRADHAN
//           </h1>

//           <h2 className="mt-3 mb-6 text-2xl font-semibold text-gray-300 md:text-4xl">
//             Full Stack Developer
//           </h2>

//           <p className="w-full max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
//             I build scalable web applications with modern technologies, focusing
//             on creating clean user experiences and solving real-world problems.
//           </p>

//           <div className="mt-10 flex flex-wrap gap-4">
//             <a href="#projects">
//               <Button
//                 onClick={() => {
//                   document.getElementById("projects")?.scrollIntoView({
//                     behavior: "smooth",
//                     block: "start",
//                   });
//                 }}
//               >
//                 View Projects
//               </Button>
//             </a>

//             <a
//               href="/Sandeep_Pradhan_Resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Button variant="secondary">View Resume</Button>
//             </a>
//           </div>
//         </motion.div>

//         {/* Right Side */}
//         <motion.div
//           className="flex items-center justify-center  pt-2 sm:pt-4"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 0.2 }}
//         >
//           <div className="relative flex h-[500px] w-[500px] items-center justify-center">
//             <motion.div
//               animate={{
//                 scale: [1, 1.12, 1],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//               }}
//               className="absolute h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
//             />

//             <div className="absolute h-96 w-96 rounded-full border border-cyan-400/10"></div>

//             <div className="absolute h-80 w-80 rounded-full border border-cyan-400/20"></div>

//             <div className="absolute h-64 w-64 rounded-full border border-cyan-400/40"></div>

//             <div className="absolute h-48 w-48 rounded-full border border-cyan-400/70"></div>
//             <TechOrbit />
//             <div className="absolute flex h-36 w-36 items-center justify-center rounded-full bg-slate-900 text-5xl shadow-[0_0_60px_rgba(34,211,238,0.35)]">
//               {"</>"}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import Button from "./Button";
import { motion } from "framer-motion";
import TechOrbit from "./TechOrbit";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-4 pb-10 pt-24 sm:px-6 sm:pt-28 md:pb-20">
      {/* Background Glow */}
      <div className="absolute left-[-200px] top-[-150px] h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="absolute bottom-[-150px] right-[-200px] h-[450px] w-[450px] rounded-full bg-purple-500/20 blur-[150px]" />

      <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 sm:gap-12 md:grid-cols-2 md:gap-16">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="mb-4 text-base font-medium text-cyan-400 sm:text-lg">
            Hello, I'm
          </p>

          <h1 className="text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-8xl">
            SANDEEP
          </h1>

          <h1 className="bg-gradient-to-r from-white via-cyan-300 to-cyan-500 bg-clip-text text-4xl font-black leading-[0.95] tracking-tight text-transparent sm:text-6xl md:text-8xl">
            PRADHAN
          </h1>

          <h2 className="mb-5 mt-3 text-xl font-semibold text-gray-300 sm:mb-6 sm:text-2xl md:text-4xl">
            Full Stack Developer
          </h2>

          <p className="w-full max-w-2xl text-sm leading-6 text-gray-400 sm:text-lg sm:leading-8">
            I build scalable web applications with modern technologies, focusing
            on creating clean user experiences and solving real-world problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            <a href="#projects">
              <Button
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                View Projects
              </Button>
            </a>

            <a
              href="/Sandeep_Pradhan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">View Resume</Button>
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="flex items-center justify-center pt-0 sm:pt-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* 
            The container changes size on mobile,
            while the actual orbit is scaled as one unit.
            Desktop remains exactly 500x500.
          */}
          <div className="flex h-[300px] w-[300px] items-center justify-center sm:h-[380px] sm:w-[380px] md:h-[500px] md:w-[500px]">
            <div className="relative flex h-[500px] w-[500px] shrink-0 scale-[0.58] items-center justify-center sm:scale-[0.74] md:scale-100">
              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
              />

              <div className="absolute h-96 w-96 rounded-full border border-cyan-400/10" />

              <div className="absolute h-80 w-80 rounded-full border border-cyan-400/20" />

              <div className="absolute h-64 w-64 rounded-full border border-cyan-400/40" />

              <div className="absolute h-48 w-48 rounded-full border border-cyan-400/70" />

              <TechOrbit />

              <div className="absolute flex h-36 w-36 items-center justify-center rounded-full bg-slate-900 text-5xl shadow-[0_0_60px_rgba(34,211,238,0.35)]">
                <img
                  src="/profile.png"
                  alt="Sandeep Pradhan"
                  className="h-full w-full object-cover object-[50%_30%]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
