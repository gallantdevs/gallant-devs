import { useRef } from "react";
import img1 from "../../public/111a.png";
import img2 from "../../public/222a.png";
import img3 from "../../public/333a.png";
import { FiArrowLeft, FiArrowRight, FiExternalLink } from "react-icons/fi";

export default function Work() {
  const scrollRef = useRef(null);

  const projects = [
    {
  title: "Huly",
  desc: "High-performance SaaS landing page featuring a technical dark-mode interface and fluid motion design.",
  image: img1,
  link: "https://huly.io",
},
{
  title: "Grainne Morton",
  desc: "Custom grid-based luxury storefront focused on minimalist UI and high-end product storytelling.",
  image: img2,
  link: "https://grainnemorton.co.uk",
},
{
  title: "Green Peas for Breakfast",
  desc: "Experimental agency portfolio focused on bold typography, custom micro-interactions, and unique brand identity.",
  image: img3,
  link: "https://greenpeasforbreakfast.com",
},

   
  ];

  return (
    <section
      id="work"
      className="max-w-7xl mx-auto px-4 md:px-6 py-7 md:py-10"
    >
      {/* Header (unchanged) */}
      <div className="mb-16 text-center">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-white transition-transform duration-300 hover:scale-[1.03]">
          Our Work
        </h2>
        <p className="text-base md:text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          Design, code, and intelligence — in motion.
        </p>
      </div>

      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4
        [scrollbar-width:none] [-ms-overflow-style:none]"
      >
        {/* hide scrollbar (webkit) */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {projects.map((project, i) => (
          <article
  key={i}
  className="group relative min-w-[300px] md:min-w-[360px]
  rounded-2xl overflow-hidden
  bg-white/5 backdrop-blur-xl
  border border-white/10
  transition-all duration-500
  hover:-translate-y-3"
>
  {/* Golden Aura */}
  <div
    className="pointer-events-none absolute -inset-[2px] rounded-2xl
    opacity-0 group-hover:opacity-100
    transition duration-700 ease-out
    blur-xl"
    style={{
      background:
        "radial-gradient(60% 60% at 50% 0%, rgba(218,165,32,0.45), transparent 70%)",
    }}
  />

  {/* Inner Card */}
  <div className="relative z-10 rounded-2xl overflow-hidden bg-black/40">
    {/* Image */}
    <div className="relative aspect-[16/10] overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-contain
        transition-transform duration-700 ease-out
        group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
    </div>

    {/* Content */}
    <div className="p-5 space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white tracking-tight">
          {project.title}
        </h3>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400
          transition-all duration-300
          group-hover:text-[#DAA520]
          group-hover:translate-x-0.5"
          aria-label="Visit project"
        >
          <FiExternalLink size={18} />
        </a>
      </div>

      <p className="text-sm text-zinc-400 leading-relaxed">
        {project.desc}
      </p>
    </div>
  </div>
</article>


        ))}
      </div>

      {/* Scroll Controls */}
      <div className="mt-10 flex justify-center items-center gap-10 text-zinc-400">
        <button
          onClick={() =>
            scrollRef.current.scrollBy({ left: -360, behavior: "smooth" })
          }
          className="flex items-center gap-2 hover:text-white transition"
        >
          <FiArrowLeft />
          <span className="text-sm tracking-wide">Scroll Left</span>
        </button>

        <button
          onClick={() =>
            scrollRef.current.scrollBy({ left: 360, behavior: "smooth" })
          }
          className="flex items-center gap-2 hover:text-white transition"
        >
          <span className="text-sm tracking-wide">Scroll Right</span>
          <FiArrowRight />
        </button>
      </div>
    </section>
  );
}
