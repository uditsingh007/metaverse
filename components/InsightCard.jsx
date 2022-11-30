"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex flex-col md:flex-row gap-4"
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className="w-full md:w-[270px] h-[250px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex flex-col flex-1 md:ml-[62px] max-w-[650px]">
        <h4 className="font-normal text-[26px] lg:text-[42px] text-white">
          {title}
        </h4>
        <p className="mt-[16px] text-[14px] lg:text-[20px] text-secondary-white font-normal">
          {subtitle}
        </p>
      </div>
      <div className="hidden lg:flex items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
        <img
          src="/arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
