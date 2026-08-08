// import { motion } from "framer-motion";
// import {
//   FaGithub,
//   FaLinkedinIn,
//   FaEnvelope,
//   FaPaperPlane,
// } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <section
//       id="contact"
//       className="relative scroll-mt-24 overflow-hidden px-6 py-32"
//     >
//       {/* Background glow */}
//       <div className="absolute right-[-200px] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

//       <div className="relative z-10 mx-auto max-w-7xl">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7 }}
//         >
//           <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
//             Contact
//           </p>

//           <h2 className="text-4xl font-bold md:text-6xl">
//             Let's build something{" "}
//             <span className="text-cyan-400">great.</span>
//           </h2>

//           <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
//             Have an opportunity, project idea, or just want to connect?
//             Feel free to reach out.
//           </p>
//         </motion.div>

//         {/* Contact Area */}
//         <div className="mt-16 grid gap-8 lg:grid-cols-5">

//           {/* Left — Connect */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.7 }}
//             className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl lg:col-span-2"
//           >
//             <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5">
//               <FaEnvelope className="text-cyan-400" />
//             </div>

//             <h3 className="mt-7 text-2xl font-bold text-white">
//               Get in touch
//             </h3>

//             <p className="mt-4 leading-7 text-gray-400">
//               I'm currently open to internship opportunities,
//               collaborations and interesting projects.
//             </p>

//             {/* Email */}
//             <a
//               href="mailto:sandeep.developer247@gmail.com"
//               className="mt-8 flex items-center gap-3 text-gray-300 transition hover:text-cyan-400"
//             >
//               <FaEnvelope className="text-cyan-400" />
//               sandeep.developer247@gmail.com
//             </a>

//             {/* Socials */}
//             <div className="mt-8 flex gap-3">

//               <a
//                 href="https://github.com/sandeepdeveloper247-rgb"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
//               >
//                 <FaGithub />
//               </a>

//               <a
//                 href="https://www.linkedin.com/in/sandeep-pradhan-554b2731a/"
//                 className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
//               >
//                 <FaLinkedinIn />
//               </a>

//             </div>
//           </motion.div>

//           {/* Right — Message */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.7, delay: 0.1 }}
//             className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl lg:col-span-3"
//           >
//             <form
//               action="https://formsubmit.co/sandeep.developer247@gmail.com"
//               method="POST"
//               className="space-y-6"
//             >
//               <input
//                 type="hidden"
//                 name="_subject"
//                 value="New Portfolio Contact"
//               />

//               <input
//                 type="hidden"
//                 name="_captcha"
//                 value="false"
//               />

//               {/* Name */}
//               <div>
//                 <label className="mb-2 block text-sm text-gray-400">
//                   Name
//                 </label>

//                 <input
//                   type="text"
//                   name="name"
//                   required
//                   placeholder="Your name"
//                   className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 transition focus:border-cyan-400/50"
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="mb-2 block text-sm text-gray-400">
//                   Email
//                 </label>

//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   placeholder="you@example.com"
//                   className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 transition focus:border-cyan-400/50"
//                 />
//               </div>

//               {/* Message */}
//               <div>
//                 <label className="mb-2 block text-sm text-gray-400">
//                   Message
//                 </label>

//                 <textarea
//                   name="message"
//                   required
//                   rows="5"
//                   placeholder="Tell me about your idea..."
//                   className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 transition focus:border-cyan-400/50"
//                 />
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 className="inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
//               >
//                 Send Message
//                 <FaPaperPlane className="text-sm" />
//               </button>
//             </form>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/sandeep.developer247@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `Portfolio Contact — ${formData.name}`,
            _replyto: formData.email,
            _template: "table",
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden px-6 py-32"
    >
      {/* Background glow */}
      <div className="absolute right-[-200px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Let's build something <span className="text-cyan-400">great.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            Have an opportunity, project idea, or just want to connect? Feel
            free to send me a message.
          </p>
        </motion.div>

        {/* Contact content */}
        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <p className="text-lg leading-8 text-gray-300">
                I'm always open to discussing internships, interesting projects,
                collaborations, and opportunities to learn and build something
                meaningful.
              </p>

              <div className="mt-8 space-y-5">
                {/* Email */}
                <a
                  href="mailto:YOUR_EMAIL_HERE"
                  className="block rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
                >
                  <p className="text-sm text-gray-500">Email</p>

                  <p className="mt-1 break-all text-gray-300 transition hover:text-cyan-300">
                    sandeep.developer@gmail.com
                  </p>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/sandeepdeveloper247-rgb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
                >
                  <p className="text-sm text-gray-500">GitHub</p>

                  <p className="mt-1 text-gray-300 transition hover:text-cyan-300">
                    github.com/sandeepdeveloper247-rgb
                  </p>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@gmail.com"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your opportunity or project..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30"
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>

                  {/* Success message */}
                  {status === "success" && (
                    <p className="text-sm font-medium text-emerald-400">
                      ✓ Message sent successfully! I'll get back to you soon.
                    </p>
                  )}

                  {/* Error message */}
                  {status === "error" && (
                    <p className="text-sm font-medium text-red-400">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
