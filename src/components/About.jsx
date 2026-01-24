import img1 from '../../public/1.png'
import img2 from '../../public/2.png'
import img3 from '../../public/3.jpeg' 

const About = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto"
      aria-labelledby="about-heading"
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
          I am a creator, an innovator, and a disruptor of the digital realm. With
          over 3 years of experience in web development and AI integration, I
          transform ambitious ideas into powerful digital experiences that leave
          lasting impressions.
        </p>

        <p className="text-base md:text-lg text-zinc-300 leading-relaxed hover:text-white transition-colors duration-500">
          My passion is to build digital experiences that not only meet your
          business goals but exceed your wildest expectations. I believe in the
          power of technology to revolutionize industries and create meaningful
          connections between brands and their audiences.
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
          My approach is to build digital experiences that not only meet your
          business goals but exceed your wildest expectations. I believe in the
          power of technology to revolutionize industries and create meaningful
          connections.
        </p>

        <p className="text-base md:text-lg text-zinc-300 leading-relaxed hover:text-white transition-colors duration-500">
          From concept to deployment, I ensure every pixel serves a purpose and
          every interaction tells your story. Let's create something
          extraordinary together.
        </p>

        <figure className="aspect-square bg-zinc-800 rounded-lg overflow-hidden hover-lift">
          <img
            src={img3}
            alt="Detail shot representing attention to nuance"
            loading="lazy"
            width={600}
            height={600}
            decoding="async"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
          />
        </figure>
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
