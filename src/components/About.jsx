// import img1 from '../../public/1.png'
// import img2 from '../../public/2.png'
// import img3 from '../../public/3.jpeg' 
import img1 from '../../public/AA34.jpg'
import img2 from '../../public/lcha.jpg'
// import img3 from '../../public/Cta.jpg' 

const About = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto"
>
  <div
    style={{
      translate: "none",
      rotate: "none",
      scale: "none",
      transform: "translate(0px, 0px)",
      opacity: 1,
    }}
  >
    <header className="text-center mb-12 md:mb-16">
      <h2
        id="about-heading"
        className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4
        hover:scale-105 transition-transform duration-300 text-white"
      >
        About me
      </h2>
    </header>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
    {/* LEFT COLUMN */}
    <div
      style={{
        translate: "none",
        rotate: "none",
        scale: "none",
        transform: "translate(0px, 0px)",
        opacity: 1,
      }}
    >
      <article className="space-y-6 md:space-y-8">
        <p className="text-base md:text-lg text-zinc-300 leading-relaxed hover:text-white transition-colors duration-500">
          I am a builder, a strategist, and a problem-solver in the digital space. With over three years of experience in web development and applied AI systems, I turn ambitious concepts into reliable digital products that create real, measurable impact.
        </p>

        <p className="text-base md:text-lg text-zinc-300 leading-relaxed hover:text-white transition-colors duration-500">
          My focus is crafting digital solutions that align with business objectives and deliver long-term value. I believe technology should simplify complexity, strengthen brands, and create meaningful connections between companies and their audiences
        </p>

        <figure className="aspect-[4/3] bg-zinc-800 rounded-lg overflow-hidden hover-lift">
          <img
            src={img2}
            alt="Dynamic portrait representing bold vision and modern aesthetic"
            loading="lazy"
            width={600}
            height={450}
            decoding="async"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
          />
        </figure>
      </article>
    </div>

    {/* RIGHT COLUMN */}
    <div
      style={{
        translate: "none",
        rotate: "none",
        scale: "none",
        transform: "translate(0px, 0px)",
        opacity: 1,
      }}
    >
      <article className="space-y-6 md:space-y-8">
        <figure className="aspect-[5/3] bg-zinc-800 rounded-lg overflow-hidden hover-lift">
          <img
            src={img1}
            alt="Abstract flame texture representing passion and energy"
            loading="lazy"
            width={600}
            height={360}
            decoding="async"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
          />
        </figure>

        <p className="text-base md:text-lg text-zinc-300 leading-relaxed hover:text-white transition-colors duration-500">
          My approach is to design digital products that not only achieve your business goals but scale with them. I believe in using technology thoughtfully to modernize workflows and unlock new opportunities.
        </p>

        <p className="text-base md:text-lg text-zinc-300 leading-relaxed hover:text-white transition-colors duration-500">
          From strategy to deployment, every detail is intentional and every interaction is purposeful. Let’s collaborate to build something refined, effective, and built to last.
        </p>

        {/* <figure className="aspect-square bg-zinc-800 rounded-lg overflow-hidden hover-lift">
          <img
            src={img3}
            alt="Detail shot representing attention to nuance"
            loading="lazy"
            width={600}
            height={600}
            decoding="async"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
          />
        </figure> */}
      </article>
    </div>
  </div>

  <div
    style={{
      translate: "none",
      rotate: "none",
      scale: "none",
      transform: "translate(0px, 0px)",
      opacity: 1,
    }}
  >
    <div className="text-right mt-8 md:mt-12">
      <span
        className="text-sm font-mono opacity-70 hover:opacity-100 transition-opacity duration-300"
        aria-label="Section 2"
      >
        02
      </span>
    </div>
  </div>
</section>

  );
};

export default About;
