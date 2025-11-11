import { useEffect, useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";

const navVariants = {
  initial: { height: 0 },
  animate: { height: "100vh", transition: { when: "beforeChildren" } },
  exit: { height: 0, transition: { when: "afterChildren" } },
};

const linkVariants = {
  initial: { y: "100%" },
  animate: { y: 0 },
  exit: { y: "100%" },
};

export default function Navbar() {
  const [closed, setClosed] = useState(true);

  const handleClick = () => {
    setClosed(!closed);
  };

  useEffect(() => {
    document.body.style.overflow = closed ? "auto" : "hidden";
  }, [closed]);

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full flex flex-col items-end p-8 z-50">
        <div
          className="flex flex-col gap-1.5 cursor-pointer z-50"
          onClick={handleClick}
        >
          <span
            className={clsx("w-6 h-1 bg-black transition-all duration-500", {
              "rotate-45 translate-y-[5px]": !closed,
            })}
          ></span>

          <span
            className={clsx("w-6 h-1 bg-black transition-all duration-500", {
              "-rotate-45 -translate-y-[5px]": !closed,
            })}
          ></span>
        </div>

        <AnimatePresence mode="wait">
          {!closed && (
            <motion.div
              key="nav"
              className="absolute top-0 left-0 w-screen h-screen bg-white flex justify-center items-center overflow-hidden"
              variants={navVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.ul className="w-full flex flex-col justify-center items-center gap-8">
                {["home", "about", "collection"].map((link, index) => {
                  return (
                    <motion.li className="capitalize overflow-hidden border-b">
                      <motion.a
                        href={`#${link}`}
                        key={link}
                        variants={linkVariants}
                        className="inline-block"
                        transition={{ delay: 0.1 * index, ease: "easeInOut" }}
                        onClick={() => {
                          setClosed(true);
                        }}
                      >
                        {link}
                      </motion.a>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
