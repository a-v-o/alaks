import { motion } from "motion/react";

export default function CollectionText({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-[65%] md:w-1/2 flex flex-col items-center justify-center gap-8">
      {children}
      <a href="https://mx.shopmythrift.store/alaks">
        <motion.button
          className="cursor-pointer bg-green-300 hover:bg-purple-300 p-3 rounded-3xl transition-all duration-300 shadow"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 1.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Shop now
        </motion.button>
      </a>
    </div>
  );
}
