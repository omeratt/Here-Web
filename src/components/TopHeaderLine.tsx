// import { useMemo } from "react";
import AnimatedLine from "./AnimatedLine";
import { motion } from "framer-motion";

export default function TopHeaderLine() {
  // const fontSize = useMemo(() => 0.0625 * 40, []);
  return (
    <div
      className={`z-10 flex h-3 w-full flex-row items-center  justify-between px-9 font-txt text-[0.9em] text-second sm:text-[1.3em]`}
    >
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="fadeIn mr-5 "
      >
        H<span className="text-green">E</span>RE
      </motion.div>
      <div className="flex  h-[0.5px] flex-1 flex-row rounded-lg">
        <AnimatedLine />
      </div>
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="fadeIn ml-5"
      >
        AD(<span className="text-green">H</span>)D
      </motion.div>
    </div>
  );
}
