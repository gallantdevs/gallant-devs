import { useEffect, useRef, useState } from "react";
// import img7 from "../../public/7.jpg";
import img7 from "../../public/K.jpeg";

const PROJECT_TYPES = [
  "Web Development",
  "UI / UX Design",
  "Mobile App",
  "Backend / API",
  "Consulting",
  "Other",
];

export default function Contact() {
  const [projectType, setProjectType] = useState("");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section
      id="contact"
      className="w-full px-4 md:px-6 py-16 md:py-24"
    >
      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT */}
        <div>
          
          <h2
            id="about-heading"
            className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4
            hover:scale-105 transition-transform duration-300 text-white"
            >
           Let&apos;s Connect
        </h2>

          <p className="text-base md:text-lg text-zinc-300 leading-relaxed hover:text-white transition-colors duration-500mb-10 max-w-xl">
            Ready to build something meaningful? Whether it’s a bold idea, a
            complex system, or a quick hello — I’m all ears.
          </p>

          <form
            action="https://formspree.io/f/xldlqlkv"
            method="POST"
            className="space-y-6"
          >
            {/* Name / Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm text-zinc-400 mb-2">Name</label>
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="px-4 py-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-white placeholder-zinc-500 focus:ring-2 focus:ring-white/10 focus:border-zinc-600 transition hover:border-zinc-600"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-zinc-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="px-4 py-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-white placeholder-zinc-500 focus:ring-2 focus:ring-white/10 focus:border-zinc-600 transition hover:border-zinc-600"
                />
              </div>
            </div>

            {/* Company */}
            <div className="flex flex-col">
              <label className="text-sm text-zinc-400 mb-2">Company</label>
              <input
                name="company"
                placeholder="Company name (optional)"
                className="px-4 py-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-white placeholder-zinc-500 focus:ring-2 focus:ring-white/10 focus:border-zinc-600 transition hover:border-zinc-600 "
              />
            </div>

            {/* Project Type */}
            <div ref={dropdownRef} className="relative flex flex-col">
              <label className="text-sm text-zinc-400 mb-2">Project Type</label>

              <input type="hidden" name="project" value={projectType} />

              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between px-4 py-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-white hover:border-zinc-600 transition"
                
              >
                <span className={projectType ? "text-white" : "text-zinc-500"}>
                  {projectType || "Select project type"}
                </span>
                <span
                  className={`transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {open && (
                <div className="absolute top-full mt-2 w-full bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl z-20">
                  {PROJECT_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        setProjectType(type);
                        setOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-zinc-300 hover:bg-zinc-800 hover:text-white transition"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-sm text-zinc-400 mb-2">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project..."
                className="px-4 py-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-white placeholder-zinc-500 focus:ring-2 focus:ring-white/10 focus:border-zinc-600 transition resize-none hover:border-zinc-600"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full h-full lg:max-w-none aspect-[4/5] rounded-xl overflow-hidden bg-zinc-800">
            <img
              src={img7}
              alt="Connecting ideas"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      
    </section>
  );
}
