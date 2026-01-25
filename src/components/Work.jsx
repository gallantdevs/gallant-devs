import { img } from 'framer-motion/client';
import imgL from '../../public/L.jpeg'
export default function Work() {
  const projects = [
    {
      title: "AI SaaS Platform",
      desc: "Smart automation powered by machine intelligence.",
      tech: "Next.js • OpenAI • Tailwind",
      image: imgL,
    },
    {
      title: "E-Commerce Experience",
      desc: "High-conversion modern storefront.",
      tech: "React • Stripe • Framer",
      image: imgL,
    },
    {
      title: "Analytics Dashboard",
      desc: "Insightful data visualization at scale.",
      tech: "Next.js • D3 • PostgreSQL",
      image: imgL,
    },
    {
      title: "Portfolio Website",
      desc: "Minimal, fast, and elegant personal brand.",
      tech: "Next.js • Tailwind • Motion",
      image: imgL,
    },
  ];

  return (
    <section
      id="tech-stack"
      className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28 overflow-hidden"
    >
      {/* Header */}
      <div className="mb-16 text-center">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-white">
          My Work
        </h2>
        <p className="text-base md:text-lg text-zinc-300">
          Design, code, and intelligence — in motion.
        </p>
      </div>

      {/* Infinite Scroll */}
      <div className="relative">
        <div className="flex gap-6 w-max marquee hover:[animation-play-state:paused]">
          {[...projects, ...projects].map((project, i) => (
            <article
              key={i}
              className="min-w-[300px] md:min-w-[360px]
              rounded-2xl overflow-hidden
              bg-white/5 backdrop-blur-xl
              border border-white/10
              transition-all duration-300
              hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] w-96 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 mb-3">
                  {project.desc}
                </p>
                <span className="text-xs text-zinc-300">
                  {project.tech}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Edge fade */}
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" /> */}
      </div>

      {/* CSS animation */}
      <style jsx>{`
        .marquee {
          animation: scroll 40s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
