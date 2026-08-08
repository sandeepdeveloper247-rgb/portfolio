// const Navbar = () => {
//   return (
//     <header className="fixed top-0 left-0 z-50 w-full">
//       <nav className="mx-auto mt-5 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl">
//         <h1 className="text-2xl font-bold tracking-wide">
//           Sandeep<span className="text-cyan-400">.</span>
//         </h1>

//         <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
//           <a
//             href="#about"
//             className="transition-colors hover:text-cyan-400 cursor-pointer transition duration-300"
//           >
//             About
//           </a>
//           <a
//             href="#skills"
//             className="transition-colors hover:text-cyan-400 cursor-pointer transition duration-300"
//           >
//             Skills
//           </a>
//           <a
//             href="#projects"
//             className="transition-colors hover:text-cyan-400 cursor-pointer transition duration-300"
//           >
//             Projects
//           </a>
//           <a href="#contact" className="transition-colors hover:text-cyan-400 cursor-pointer transition duration-300">
//             Contact
//           </a>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  /* Detect scrolling */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Detect active section */
  useEffect(() => {
    const handleActiveSection = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = "about";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section && scrollPosition >= section.offsetTop) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleActiveSection);

    handleActiveSection();

    return () => {
      window.removeEventListener("scroll", handleActiveSection);
    };
  }, []);

  /* Navigation click */
  const handleNavigation = (id) => {
    setMenuOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 md:px-6">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-500 ${
          scrolled
            ? "border-white/10 bg-slate-950/80 shadow-2xl shadow-black/20 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-black tracking-wide text-white"
        >
          SANDEEP
          <span className="text-cyan-400">.</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className="relative px-1 py-2 text-sm font-medium text-gray-400 transition hover:text-white"
            >
              {item.name}

              {/* Active indicator */}
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 mx-auto h-0.5 rounded-full bg-cyan-400"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => handleNavigation("contact")}
          className="hidden rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 md:block"
        >
          Let's Talk
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`flex w-full items-center rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                  activeSection === item.id
                    ? "bg-cyan-400/10 text-cyan-400"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => handleNavigation("contact")}
              className="mt-2 w-full rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950"
            >
              Let's Talk
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
