"use client";
import { motion } from "motion/react";

export default function AnimatedText({ text }: { text: string }) {
  return (
    <div>
      {text.split(" ").map((word, index) => {
        return (
          <span key={word + index} className="overflow-hidden mr-1 inline-flex">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.05 * index,
                ease: "easeOut",
                duration: 0.5,
              }}
              viewport={{ once: true }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
}
