import { motion } from "framer-motion";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
function toggleList(arr: string[], element: Element) {
  arr.forEach((className) => {
    element.classList.toggle(className);
  });
}

export default function AA() {
  const [fontSize, setFontSize] = useState("");
  const [aWidth, setAWidth] = useState(0);
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const Aref = useRef<HTMLHeadingElement>(null);
  const resize = useCallback(() => {
    // setTimeout(() => {
    if (!containerRef.current) return;
    // }, 1000);
    setTimeout(() => {
      if (!containerRef.current) return;
      setFontSize(
        `${Math.min(
          containerRef.current.clientWidth * 0.045 * 16,
          containerRef.current.clientHeight * 0.08 * 16
        )}px`
      );
      setAWidth(
        Math.min(
          containerRef.current.clientWidth * 0.045 * 12,
          containerRef.current.clientHeight * 0.08 * 12
        )
      );
      setWidth(containerRef.current.clientWidth);
      // setAWidth(Aref.current.clientWidth);
    }, 0);
  }, [containerRef]);

  useLayoutEffect(() => {
    window.addEventListener("resize", resize);
    resize();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  interface This {
    target: string[];
    next: string[];
  }
  function onHover(
    this: This,
    e: React.MouseEvent<HTMLHeadingElement, MouseEvent>
  ) {
    toggleList(this.target, e.currentTarget);
    toggleList(this.next, e.currentTarget);
    const prev = e.currentTarget.previousElementSibling;
    if (prev) {
      toggleList(this.target, prev);
      toggleList(this.next, prev);
      return;
    }
    const next = e.currentTarget.nextElementSibling;
    if (next) {
      toggleList(this.target, next);
      toggleList(this.next, next);
      return;
    }
  }

  return (
    <motion.div
      initial={{
        scale: 0,
        opacity: 0,
        filter: "blur(1.3rem)",
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ scale: 1, opacity: 1, filter: "blur(0)" }}
      style={{
        fontSize,
      }}
      ref={containerRef}
      className="AA relative mx-auto flex h-full w-full flex-row items-center justify-between font-bold   "
    >
      <h1
        className="prev-sibling relative z-20 flex h-[70%]   select-none flex-col items-center  justify-center text-center leading-[1] text-green transition-all duration-1000"
        style={{
          marginLeft: (width - aWidth * 1.4) / 2,
        }}
      >
        A
      </h1>
      <h1
        ref={Aref}
        onMouseOver={onHover.bind({
          target: ["text-green", "z-20"],
          next: ["text-second", "z-10"],
        })}
        onMouseLeave={onHover.bind({
          target: ["text-green", "z-20"],
          next: ["text-second", "z-10"],
        })}
        style={{ marginLeft: (width - aWidth * 1.4) / 2 + aWidth * 0.4 }}
        className="sibling absolute z-10 flex h-[70%] select-none flex-col items-center justify-center leading-[1] text-second transition-all duration-500  "
      >
        A
      </h1>
    </motion.div>
  );
}
