import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
function toggleList(arr: string[], element: Element) {
  arr.forEach((className) => {
    element.classList.toggle(className);
  });
}

export default function AA() {
  const [fontSize, setFontSize] = useState("");
  const [aWidth, setAWidth] = useState(0);
  const [width, setWidth] = useState(0);
  const Aref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const A = document.querySelector<HTMLHeadingElement>(".prev-sibling");
    if (!A) return;
    const handleWindowResize = () => {
      const container = document.querySelector<HTMLDivElement>(".AA");
      if (!container) return;
      `${Math.min(
        container.clientWidth * 0.045,
        container.clientHeight * 0.08
      )}em`;
      setAWidth(A.clientWidth);
      setFontSize(
        `${Math.min(
          container.clientWidth * 0.045,
          container.clientHeight * 0.08
        )}em`
      );
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const container = document.querySelector<HTMLDivElement>(".AA");
    const A = document.querySelector<HTMLHeadingElement>(".prev-sibling");
    if (!A || !container) return;
    setWidth(container.clientWidth);
    setFontSize(
      `${Math.min(
        container.clientWidth * 0.045,
        container.clientHeight * 0.08
      )}em`
    );
    const timer = setTimeout(() => {
      setAWidth(A.clientWidth);
    }, 1200);
    return () => clearTimeout(timer);
  }, [fontSize]);

  useEffect(() => {}, []);
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
