import { FaGithub, FaLinkedinIn, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">

        {/* Logo / Name */}
        <div>
          <p className="text-lg font-bold tracking-wide text-white">
            SANDEEP<span className="text-cyan-400">.</span>
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Full Stack Developer
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/sandeepdeveloper247-rgb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sandeep-pradhan-554b2731a/"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-cyan-400"
        >
          Back to top
          <FaArrowUp />
        </button>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/5 pt-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Sandeep Pradhan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;