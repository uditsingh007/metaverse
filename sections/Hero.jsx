"use client";
import { motion } from "framer-motion";
import { staggerContainer, slideIn, textVariant } from "../utils/motion";
const Hero = () => (
  <section className="yPaddings sm:pl-16 pl-6">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth flex flex-col mx-auto"
    >
      <div className="flexCenter flex-col z-10 relative">
        <motion.h1 variants={textVariant(1.1)} className="heroHeading">
          Metaverse
        </motion.h1>
        <motion.div variants={textVariant(1.2)} className="flexCenter flex-row">
          <h1 className="heroHeading">Ma</h1>
          <div className="heroDText" />
          <h1 className="heroHeading">Ness</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full -mt-[12px] md:-mt-[20px]"
      >
        <div className="absolute -top-[30px] w-full h-[300px] hero-gradient z-0 rounded-tl-[140px]" />
        <img
          src="/cover.png"
          alt="cover"
          className="w-full sm:h-[500px] h-[350px] relative rounded-tl-[140px] object-cover"
        />
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] z-10 relative">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
