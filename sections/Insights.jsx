"use client";

import { motion } from "framer-motion";
import { TypingText, TitleText, InsightCard } from "../components";
import { insights } from "../constants";
import { staggerContainer } from "../utils/motion";

const Insights = () => (
  <section className="paddings relative z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flex flex-col"
    >
      <TypingText title="Insights" textStyles="text-center" />
      <TitleText title="Insight about metaverse" textStyles="text-center" />
      <div className="mt-[50] flex flex-col gap-[30px]">
        {insights.map((insight, i) => (
          <InsightCard {...insight} key={`insight-${i}`} index={i + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
