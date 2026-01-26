// import Background from '../../public/Background.mp4'
import { useMemo } from "react";
import A1 from "../../public/A1.mp4";
import A2 from "../../public/A2.mp4";
import A3 from "../../public/A3.mp4";
import A4 from "../../public/A4.mp4";

const videos = [A1, A2, A3, A4];

const Hero = () => {
  const randomVideo = useMemo(
    () => videos[Math.floor(Math.random() * videos.length)],
    []
  );
  return (
    <section className='w-full h-screen relative overflow-hidden'>
        {/* Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover "
        // src={Background}
        src={randomVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Optional overlay (for darkening / tint)
      <div className="absolute inset-0 bg-black/10" /> */}

      {/* Optional content on top */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 text-center">
        {/* <h1 className="max-w-3xl text-2xl max-sm:text-xl md:text-3xl font-light tracking-wide text-zinc-300">
            Building the <em className="italic text-white">future</em>, one paradigm{" "}
            <em className="italic text-white">shift at a time</em>
        </h1> */}
        {/* ding */}
        <h1 className="rounded-lg backdrop-blur-sm max-w-3xl text-2xl max-sm:text-xl md:text-3xl font-light tracking-wide text-zinc-900">
          Engineering <em className="italic ">digital experiences</em>, one{" "}
          <em className="italic ">breakthrough</em> at a time
        </h1>


        <p className="text-sm md:text-base font-medium tracking-widest text-zinc-400 uppercase">
            Web Designer • Developer • AI Developer
        </p>

        <a
            className="
            relative mt-4 px-8 py-3
            text-md font-semibold tracking-wide italic
            text-white
            bg-[#0e100f]
            rounded-lg
            border border-white/30
            transition-all duration-300 ease-out
            hover:-translate-y-1
            hover:border-[#DAA520]
            hover:shadow-[0_12px_35px_rgba(218,165,32,0.35)]
            focus:outline-none
            "
            href={`#contact`}
        >
            Get a quote
        </a>
        </div>

    </section>
  )
}

export default Hero