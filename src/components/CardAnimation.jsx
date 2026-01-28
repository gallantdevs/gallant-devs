import React, { useState } from "react";
import { motion } from "framer-motion";
import ss1 from "../../public/ss1.jpeg";
import ss2 from "../../public/ss2.jpg";
import ss3 from "../../public/ss3.jpg";
import ss4 from "../../public/ss4.jpg";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const cardData = [
  { id: 1, url: ss1 },
  { id: 2, url: ss2 },
  { id: 3, url: ss3 },
  { id: 4, url: ss4 },
  { id: 5, url: ss1 },
];

const SwipeCards = () => {
  const [centerIndex, setCenterIndex] = useState(Math.floor(cardData.length / 2));

  const shiftLeft = () => {
    setCenterIndex((prev) => Math.max(prev - 1, 0));
  };

  const shiftRight = () => {
    setCenterIndex((prev) => Math.min(prev + 1, cardData.length - 1));
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto h-[500px] md:h-[400px] flex items-center justify-center px-4">
      {/* Left Button */}
      <button
        onClick={shiftLeft}
        className="absolute left-2 z-20 h-12 w-12 rounded-full bg-black/50 text-white text-2xl flex items-center justify-center hover:bg-black/70 transition"
      >
        <FaAngleLeft />
      </button>

      {/* Right Button */}
      <button
        onClick={shiftRight}
        className="absolute right-2 z-20 h-12 w-12 rounded-full bg-black/50 text-white text-2xl flex items-center justify-center hover:bg-black/70 transition"
      >
        <FaAngleRight />
      </button>

      {/* Cards */}
      {cardData.map((card, index) => {
        const offsetFromCenter = index - centerIndex;
        return (
          <motion.img
            key={card.id}
            src={card.url}
            alt=""
            initial={{ scale: 1, rotate: 0, x: 0 }}
            animate={{
              x: offsetFromCenter * 50,
              rotate: offsetFromCenter * 8,
              scale: index === centerIndex ? 1.05 : 0.95,
              zIndex: cardData.length - Math.abs(offsetFromCenter),
              opacity: Math.abs(offsetFromCenter) > 2 ? 0 : 1, // hide far cards
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute h-96 w-72 md:h-72 md:w-56 rounded-lg object-cover cursor-pointer shadow-xl"
          />
        );
      })}
    </div>
  );
};

export default SwipeCards;
