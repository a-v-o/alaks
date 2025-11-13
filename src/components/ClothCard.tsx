import { motion } from "motion/react";

export default function ClothCard({
  src,
  alt,
  left,
  top,
}: {
  src: string;
  alt: string;
  left: string;
  top: string;
}) {
  return (
    <motion.div
      className="absolute"
      initial={{ left: "50%", top: "50%", scale: 0, opacity: 0 }}
      whileInView={{ left: left, top: top, scale: 1, opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="w-20 md:w-32 aspect-2/3 rounded-2xl overflow-hidden ring-1 ring-offset-2 ring-[#00F59B] shadow-2xl">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover opacity-85"
        />
      </div>
    </motion.div>
  );
}
