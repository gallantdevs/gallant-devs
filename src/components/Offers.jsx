import React from "react";
import { FaGift, FaArrowRight } from "react-icons/fa";
import offer from '../../public/offer.jpg'

const Offers = () => {
  return (
    <section className="relative py-10 ">
      <div className="max-w-7xl px-4 md:px-6 mx-auto grid md:grid-cols-2 gap-12 items-center rounded-3xl 
        bg-gradient-to-r from-[#F7E7B4] via-[#DAA520] to-[#B8860B] shadow-xl text-[#0e100f]">

        {/* Left: Textual Offer */}
        <div className=" space-y-6">
          <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 w-max">
            <FaGift className=" text-lg" />
            <span className="font-medium text-sm uppercase tracking-widest">
              Exclusive Offer
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            First Customer Gets{" "}
            <span className=" underline decoration-white/50">
              50% Off
            </span>
          </h2>

          <p className=" text-lg md:text-xl max-w-xl">
            Be among our first customers and enjoy a refined, limited-time
            discount crafted especially for you.
          </p>

          <button className="mt-6 inline-flex items-center gap-3 
            bg-white text-[#B8860B] font-semibold px-7 py-3 rounded-full
            hover:bg-white/90 transition-all shadow-md hover:shadow-xl">
            Claim Offer <FaArrowRight />
          </button>
        </div>

        {/* Right: Image */}
        <div className="relative w-full h-96 md:h-[400px] overflow-hidden bg-[#0e100f] shadow-2xl">
          <img
            src={offer}
            alt="akshi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>

      {/* Soft decorative glow */}
      <div className="absolute -top-20 -left-20 w-48 h-48 bg-[#DAA520]/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#B8860B]/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Offers;
