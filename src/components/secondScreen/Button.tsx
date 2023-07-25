import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

type Props = {
  center?: boolean;
};
export default function Button({ center = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const handleResize = () => {
      if (!ref.current) return;
      setWidth(ref.current?.clientWidth);
    };
    handleResize(); // Initial measurement
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref]);

  return (
    <motion.div
      ref={ref}
      className={`flex h-full w-full ${
        center ? "items-center" : ""
      } justify-center`}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0, y: "-100%" }}
        transition={{ duration: 1.2 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
      >
        <motion.a
          style={{
            width: width * 0.4,
            minWidth: 80,
            height: Math.min(width * 0.12, 75),
            fontSize: width * 0.05,
          }}
          href="#"
          className="getStarted flex items-center justify-center rounded-full border border-green"
        >
          Get started
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
