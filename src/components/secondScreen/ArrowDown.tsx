import useResizeListener from "../../hooks/useResizeListener";
import { motion } from "framer-motion";

type Props = {};

export default function ArrowDown({}: Props) {
  const { height } = useResizeListener("arrowContainer");
  // const svgH = height * 1;
  const ratio = 88 / 78;
  return (
    <div
      style={{ height: "40%" }}
      className="flex items-center justify-center"
      id="arrowContainer"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0, y: "-100%" }}
        transition={{ duration: 1.2 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
      >
        <svg
          height={height * ratio}
          width={height}
          viewBox={`0 0 ${78} ${98}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="arrowDown overflow-visible transition-all
        duration-700"
        >
          <path
            d="M38.7832 0.999984L38.7832 96.2708"
            stroke="#F5F1E6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-700 hover:translate-y-4"
          />
          <path
            d="M1 65.1875L38.7837 96.2708L76.5674 65.1875"
            stroke="var(--second)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-700 hover:translate-y-4"
          />
        </svg>
      </motion.div>
    </div>
  );
}
