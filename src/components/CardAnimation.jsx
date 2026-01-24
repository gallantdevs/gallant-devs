import React from "react";
import { motion } from "framer-motion";

const cardData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2342&auto=format&fit=crop",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2224&auto=format&fit=crop",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2340&auto=format&fit=crop",
  },
];

const containerVariants = {
  closed: {},
  open: {},
};

const cardVariants = {
  closed: (i) => ({
    x: 0,
    rotate: 0,
    scale: 1,
  }),
  open: (i) => ({
    x: (i - cardData.length / 2) * 40,
    rotate: (i - cardData.length / 2) * 6,
    scale: 1.02,
  }),
};

const SwipeCards = () => {
  return (
    <motion.div
      className="relative h-[500px] w-full grid place-items-center bg-neutral-100"
      initial="closed"
      whileHover="open"
      variants={containerVariants}
    >
      {cardData.map((card, index) => (
        <motion.img
          key={card.id}
          src={card.url}
          alt=""
          custom={index}
          variants={cardVariants}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="absolute h-96 w-72 rounded-lg object-cover cursor-pointer"
          style={{
            zIndex: index,
            boxShadow:
              "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)",
          }}
        />
      ))}
    </motion.div>
  );
};

export default SwipeCards;
