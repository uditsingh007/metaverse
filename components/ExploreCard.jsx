"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "flex-[10] lg:flex-[3.5]" : "flex-[2] lg:flex-[0.5]"
    } flexCenter min-w-[170px] h-[700px] transiton-[flex] duration-[0.7s] ease-out flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute h-full w-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold text-[18px] sm:text-[26px] text-white absolute z-0 lg:bottom-20 lg:-rotate-90 lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col rounded-b-[24px] bg-black bg-opacity-50">
        <div className="flexCenter w-[60px] h-[60px] rounded-[24px] mb-[16px] glassmorphism">
          <img
            src="/headset.svg"
            alt="headset"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
          Enter the metaverse
        </p>
        <h2 className="mt-[24px] font-semibold text-[24px] sm:text-[32px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
