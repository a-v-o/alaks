import { BsArrowDown } from "react-icons/bs";
import { motion } from "motion/react";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  return (
    <section
      className="w-full h-screen flex flex-col justify-center items-center bg-black/50 bg- text-white"
      id="home"
    >
      <div>
        <h1 className="uppercase text-8xl font-semibold font-[Lobster_Two]">
          <AnimatedText text="Alaks" />
        </h1>
      </div>
      <div className="p-8 flex flex-col gap-8 items-center">
        <p className="md:text-2xl text-center">
          <AnimatedText text="Break free from the ordinary and unfold your unique style with Alaks" />
        </p>
        <p className="md:text-2xl text-center">
          <AnimatedText text="We're not just a clothing brand, we're a bold statement crafted with care and worn with confidence" />
        </p>

        <motion.div
          className="h-10 w-7 border-2 flex justify-center items-center rounded-xl"
          initial={{ y: 0 }}
          animate={{ y: 10 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
        >
          <BsArrowDown />
        </motion.div>
      </div>
      <div className="absolute w-full h-screen left-0 top-0 overflow-hidden -z-10">
        <img
          src="alaks-7.JPG"
          alt="a model posing in alaks wear"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
