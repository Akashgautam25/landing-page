"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const RevealWord = ({ word, index, total, scrollYProgress }) => {
  const opacity = useTransform(
    scrollYProgress,
    [index / total, (index + 1) / total],
    [0.3, 1]
  );

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {word}
      {index < total - 1 && <span>&nbsp;</span>}
    </motion.span>
  );
};

const TextScrollReveal = ({ text }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 40%"],
  });

  const words = text.trim().split(/\s+/);

  return (
    <div
      ref={ref}
      className="py-32 px-4 sm:px-12 xl:px-32 text-xl sm:text-2xl md:text-3xl lg:text-4xl flex flex-wrap leading-snug text-foreground"
    >
      {words.map((word, i) => (
        <RevealWord
          key={i}
          word={word}
          index={i}
          total={words.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
};

export default TextScrollReveal;
