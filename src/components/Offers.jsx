import React from "react";
import { FaGift, FaArrowRight } from "react-icons/fa";
import offer from '../../public/offer.png'

const Offers = () => {
  return (
    <section className="py-8 px-4 md:px-6 max-w-7xl mx-auto">
  <div className="grid md:grid-cols-2 gap-12 items-center rounded-3xl
    bg-gradient-to-r from-[#F7E7B4] via-[#DAA520] to-[#B8860B]
    shadow-xl text-[#0e100f] px-6 py-8">

    {/* Left: Textual Offer */}
    <div className=" space-y-6">
      <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 w-max">
        <FaGift className=" text-lg" />
        <span className="font-medium text-sm uppercase tracking-widest">
          Exclusive Offer
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
        Enjoy{" "}
        <span className="mr-2 underline decoration-black/50">
          10% Off
        </span>
        on Your First Service
      </h2>

      <p className=" text-lg md:text-xl max-w-xl">
        New here? As a welcome, first-time customer receive an exclusive 10% discount on their initial order. <br />
        Your first step with us comes with a 10% welcome discount. Simply, transparent, no gimmicks
      </p>

      <a className="mt-6 inline-flex items-center gap-3 
        bg-white text-[#B8860B] font-semibold px-7 py-3 rounded-full
        hover:bg-white/90 transition-all shadow-md hover:shadow-xl"
        href="#contact">
        Claim 10% Offer <FaArrowRight />
      </a>
      <p className=" text-lg md:text-xl max-w-xl">Get Welcome Discount</p>

    </div>

    {/* Right */}
    {/* <div className="relative w-full h-96 md:h-[400px] overflow-hidden bg-[#0e100f] shadow-2xl">
      <img
        src={offer}
        alt="akshi"
        className="w-full h-full object-cover"
      />
      
    </div> */}
  </div>
</section>
  );
};

export default Offers;





