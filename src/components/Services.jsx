// import img4 from '../../public/4.png'
// import img5 from '../../public/5.png'
// import img6 from '../../public/6.png'

import img4 from '../../public/one.jpg'
import img5 from '../../public/I.jpeg'
import img6 from '../../public/J.jpeg'

const Services = () => {
  return (
    <section
      id="services"
      className="px-4 md:px-6 max-w-7xl mx-auto overflow-x-hidden"
    >
      {/* HEADER */}
      <header className="text-center mb-16 md:mb-24">
        <h2
          id="services-heading"
          className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4
          text-white transition-transform duration-300 hover:scale-[1.03]"
        >
          Services
        </h2>
        <p className="text-base md:text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          Comprehensive digital services designed to strengthen your brand and deliver measurable outcomes.
        </p>
      </header>

      <div className="space-y-20 md:space-y-28">
        {/* SERVICE 1 */}
        <article className="grid grid-cols-12 items-center gap-8 md:gap-12">
          <figure className="col-span-12 md:col-span-6 order-2 md:order-1">
            <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-900 transition-transform duration-500 hover:scale-[1.02]">
              <img
                src={img4}
                alt="Source mapping and strategic visualization"
                loading="lazy"
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </figure>

          <div className="col-span-12 md:col-span-6 order-1 md:order-2 md:pl-6 lg:pl-12">
            <h3 className="font-semibold text-2xl md:text-3xl mb-4 text-white">
              Web Design &amp; User Experience
            </h3>
            <p className="text-base md:text-lg text-zinc-300 mb-6 leading-relaxed max-w-xl">
              Designing intuitive, visually refined user experiences that engage users and drive conversions. Every decision is guided by research, usability principles, and modern design systems.
            </p>
            <ul className="space-y-2 text-sm md:text-base text-zinc-400">
              <li><span className="text-[#DAA520] mr-2">•</span>UI/UX Strategy &amp; Research</li>
              <li><span className="text-[#DAA520] mr-2">•</span>Wireframing &amp; Prototyping</li>
              <li><span className="text-[#DAA520] mr-2">•</span>Visual Design &amp; Branding</li>
              <li><span className="text-[#DAA520] mr-2">•</span>High-Fidelity Interface Design</li>
            </ul>
          </div>
        </article>

        {/* SERVICE 2 */}
        <article className="grid grid-cols-12 items-center gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-6 md:pr-6 lg:pr-12">
            <h3 className="font-semibold text-2xl md:text-3xl mb-4 text-white">
              Full-Stack Web Development
            </h3>
            <p className="text-base md:text-lg text-zinc-300 mb-6 leading-relaxed max-w-xl">
              Developing reliable, scalable web applications using proven technologies, covering everything from planning to deployment and long-term stability.
            </p>
            <ul className="space-y-2 text-sm md:text-base text-zinc-400">
              <li><span className="text-[#DAA520] mr-2">•</span>Frontend (React, Next.js)</li>
              <li><span className="text-[#DAA520] mr-2">•</span>Backend (Node.js, APIs)</li>
              <li><span className="text-[#DAA520] mr-2">•</span>Database Design &amp; Management</li>
              <li><span className="text-[#DAA520] mr-2">•</span>Performance Optimization</li>
              <li><span className="text-[#DAA520] mr-2">•</span>Deployment &amp; DevOps</li>
            </ul>
          </div>

          <figure className="col-span-12 md:col-span-6">
            <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-900 transition-transform duration-500 hover:scale-[1.02]">
              <img
                src={img5}
                alt="Full-stack architecture visualization"
                loading="lazy"
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </figure>
        </article>

        {/* SERVICE 3 */}
        <article className="grid grid-cols-12 items-center gap-8 md:gap-12">
          <figure className="col-span-12 md:col-span-6 order-2 md:order-1">
            <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-900 transition-transform duration-500 hover:scale-[1.02]">
              <img
                src={img6}
                alt="AI engineering and integration"
                loading="lazy"
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </figure>

          <div className="col-span-12 md:col-span-6 order-1 md:order-2 md:pl-6 lg:pl-12">
            <h3 className="font-semibold text-2xl md:text-3xl mb-4 text-white">
              AI Engineering &amp; Integration
            </h3>
            <p className="text-base md:text-lg text-zinc-300 mb-6 leading-relaxed max-w-xl">
              Implementing intelligent systems that enhance products through automation, personalization, and data-driven decision making.
            </p>
            <ul className="space-y-2 text-sm md:text-base text-zinc-400">
              <li><span className="text-[#DAA520] mr-2">•</span>AI-Powered Applications</li>
              <li><span className="text-[#DAA520] mr-2">•</span>Chatbot Development</li>
              <li><span className="text-[#DAA520] mr-2">•</span>Machine Learning Integration</li>
              <li><span className="text-[#DAA520] mr-2">•</span>Automation &amp; Data Processing</li>
            </ul>
          </div>
        </article>
      </div>

      
    </section>
  );
};

export default Services;
