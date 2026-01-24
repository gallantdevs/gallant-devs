import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiSupabase,
  SiFigma,
  SiFramer,
  SiGreensock,
} from "react-icons/si";

const TECH_STACK = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Supabase", icon: SiSupabase },
  { name: "GSAP", icon: SiGreensock },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Figma", icon: SiFigma },
];

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28"
    >
      {/* Header */}
      <div className="mb-16 text-center">
        
        <h2
            
            className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4
            hover:scale-105 transition-transform duration-300 text-white"
        >
           Tools & Technologies
        </h2>
        <p className="text-base md:text-lg text-zinc-300 leading-relaxed hover:text-white transition-colors duration-500">

          The tools I rely on to design and ship modern digital products.
        </p>
      </div>

      {/* Flex list */}
      <div className="flex flex-wrap gap-x-12 gap-y-8 items-center justify-center">
        {TECH_STACK.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="group flex items-center gap-3 text-zinc-500 hover:text-white transition-colors"
          >
            <Icon className="text-2xl md:text-3xl opacity-70 group-hover:opacity-100 transition" />
            <span className="text-xl md:text-2xl font-medium">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
