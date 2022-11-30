"use client";

import { motion } from "framer-motion";
import { TypingText, ExploreCard, TitleText } from "../components";
import { staggerContainer } from "../utils/motion";
import { exploreWorlds } from "../constants";
import { useState } from "react";

const Explore = () => {
  const [active, setActive] = useState("world-2");
  return (
    <section className="paddings" id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flex-col"
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want
              <br />
              to explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex flex-col lg:flex-row min-h-[70vh] gap-5">
          {exploreWorlds.map((world, i) => (
            <ExploreCard
              key={i}
              {...world}
              index={i}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default Explore;
