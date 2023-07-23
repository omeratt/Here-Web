import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

export default function Toggle() {
  const [enabled, setEnabled] = useState(false);
  const [toggleH, setToggleH] = useState(0);
  const [toggleW, setToggleW] = useState(0);
  const [thumbSize, setThumbSize] = useState(0);
  useEffect(() => {
    const container = document.querySelector<HTMLDivElement>(`.myContainer`);
    if (!container) return;

    setToggleH(
      Math.min(container.clientWidth * 0.9, container.clientHeight * 0.8)
    );
    setToggleW(
      Math.min(container.clientWidth * 0.45, container.clientHeight * 0.45)
    );
    setThumbSize(
      Math.min(container.clientWidth * 0.4, container.clientHeight * 0.4)
    );
    const handleWindowResize = () => {
      setToggleH(
        Math.min(container.clientWidth * 0.9, container.clientHeight * 0.8)
      );
      setToggleW(
        Math.min(container.clientWidth * 0.45, container.clientHeight * 0.45)
      );
      setThumbSize(
        Math.min(container.clientWidth * 0.4, container.clientHeight * 0.4)
      );
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const onClick = useCallback(() => {
    setEnabled(!enabled);
  }, [enabled]);
  return (
    <motion.label
      initial={{ scale: 0, opacity: 0, rotate: "150deg" }}
      transition={{ duration: 1.2 }}
      whileInView={{ scale: 1, opacity: 1, rotate: "0deg" }}
      htmlFor="toggleTwo"
      className="myContainer flex h-full w-full   items-center justify-center"
    >
      <div className="relative cursor-pointer">
        <input type="checkbox" id="toggleTwo" className="sr-only" />
        <div
          style={{ height: toggleH, width: toggleW }}
          onClick={(_) => {
            onClick();
          }}
          className="myToggle block  rounded-full border border-second"
        ></div>
        <div
          style={{
            height: thumbSize,
            width: thumbSize,
            translate: `0 ${enabled ? toggleH - thumbSize - 7 : 0}px`,
            // backgroundColor: `${!enabled ? "#E5FF00" : "#F5F1E6"}`,
            boxShadow: `${
              !enabled ? "inset 0 0 0 10rem #E5FF00" : "inset 0 0 0 0 #F5F1E6"
            }`,
            // box-shadow: inset 0 0 0 2em var(--hover);
            left: (toggleW - thumbSize) / 2,
          }}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
            console.log(enabled);
          }}
          className="myThumb absolute top-1 rounded-full bg-white transition-all duration-300"
        ></div>
      </div>
    </motion.label>
  );
}
