"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Feedback = () => (
  <section className="paddings relative z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flex lg:flex-row flex-col gap-6"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex flex-col flex-[0.5] justify-end lg:max-w-[370px] gradient-05 p-4 sm:p-8 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold text-[26px] sm:text-[32px] leading-[36px] sm:leading-[40px] text-white">
            Samantha
          </h4>
          <p className="mt-[8px] font-normal text-[12px] sm:text-[18px] leading-[16px] sm:leading-[22px] text-white">
            Founder | Metaversus
          </p>
        </div>
        <p className="mt-[24px] font-normal text-[18px] sm:text-[24px] leading-[39px] sm:leading-[45px] text-white">
          With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flexCenter flex-1 relative"
      >
        <img
          src="/planet-09.png"
          alt="planet 09"
          className="w-full h-auto lg:h-[610px] min-h-[210px] object-cover rounded-[40px]"
        />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="hidden lg:block absolute -left-[10%] top-[3%]"
        >
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
