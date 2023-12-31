import { useLayoutEffect, useRef, useState } from "react";
import AA from "../components/secondScreen/AA";
import ArrowDown from "../components/secondScreen/ArrowDown";
import Button from "../components/secondScreen/Button";
import Cube from "../components/secondScreen/Cube";
import Slider from "../components/secondScreen/Slider";
import Toggle from "../components/secondScreen/Toggle";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import PhoneFrame from "../components/secondScreen/PhoneFrame";

interface Props {
  containerRef?: React.RefObject<HTMLDivElement>;
}
export default function SecondPage({}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const [phoneContainerWidth, setPhoneContainerWidth] = useState(0);
  const { scrollYProgress } = useScroll({
    container: ref,
    // target: ref,
    // offset: ["start start", "end end"],
  });

  useLayoutEffect(() => {
    if (!phoneRef.current) return;
    setPhoneContainerWidth(phoneRef.current.clientWidth);
    const setPhoneWidth = () => {
      if (!phoneRef.current) return;
      setPhoneContainerWidth(phoneRef.current.clientWidth);
    };
    window.addEventListener("resize", setPhoneWidth);
    return () => {
      window.removeEventListener("resize", setPhoneWidth);
    };
  }, [phoneRef]);

  // const opacity = useSpring(useTransform(scrollYProgress, [0, 0.25], [0, 1]));

  const translateX = useSpring(
    useTransform(scrollYProgress, (state) => {
      if (state < 0.3) return 0;
      const newVal = -(state - 0.3) * phoneContainerWidth * 6.5 * (100 / 40);
      return newVal;
    })
  );

  const translatePhone = useSpring(
    useTransform(scrollYProgress, (state) => {
      if (state < 0.3) return 0;
      const maxVal =
        (-1 * window.innerWidth) / 2 + 18 + phoneContainerWidth / 2;
      const newVal = -(state - 0.3) * phoneContainerWidth * 4.5 * (100 / 40);
      // console.log({ maxVal, newVal, state });
      if (state > 0.55) {
        return maxVal * 2;
      }
      if (newVal < maxVal) return maxVal;
      return newVal;
    }),
    { stiffness: 150, damping: 30 }
  );

  const scale = useSpring(
    useTransform(scrollYProgress, [0.3, 0.4, 0.55, 0.56], [0.5, 0.8, 0.9, 0.7])
  );

  const innerOpacity = useSpring(
    useTransform(scrollYProgress, [0.3, 0.4], [1, 0])
  );
  const txtOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.55, 0.56], [0, 0, 1])
  );
  const txtOpacity1 = useSpring(
    useTransform(scrollYProgress, [0.59, 0.61], [0, 1])
  );
  const txtOpacity2 = useSpring(
    useTransform(scrollYProgress, [0.62, 0.64], [0, 1])
  );
  const txtOpacity3 = useSpring(
    useTransform(scrollYProgress, [0.65, 0.66], [0, 1])
  );
  const txtY1 = useSpring(
    useTransform(scrollYProgress, [0.59, 0.61], [-20, 0])
  );
  const txtY2 = useSpring(
    useTransform(scrollYProgress, [0.62, 0.64], [-20, 0])
  );
  const txtY3 = useSpring(
    useTransform(scrollYProgress, [0.65, 0.66], [-20, 0])
  );

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   // alert(latest);
  //   console.log(latest);
  // });

  return (
    <motion.div
      // style={{ opacity }}
      // ref={ref}
      className={`borderAnimation2 sticky top-0 flex h-screen flex-1 flex-row    overflow-hidden  border-second  font-txt text-second `}
    >
      <motion.div
        style={{ opacity: innerOpacity, x: translateX }}
        className="flex w-[65%]  flex-row"
      >
        <motion.div
          style={{ width: `${(45 / 65) * 100}%` }}
          className="flex flex-col  border-r  border-second"
        >
          <div className="flex h-[27%] flex-col items-center justify-center gap-7 overflow-hidden border-b border-second">
            <Slider startValue={100} id={"slider1"} />
            <Slider startValue={0} id={"slider2"} />
          </div>
          <div className="flex h-[46%] items-center justify-center border-b border-second">
            <AA />
          </div>
          <div className="flex-1 overflow-hidden border-b-0 border-second">
            <Button />
          </div>
        </motion.div>
        <motion.div
          className="flex  flex-col border-r border-second"
          style={{ width: `${(20 / 65) * 100}%` }}
        >
          <div className=" h-[27%] border-b border-second">
            <Cube />
          </div>
          <div className=" h-[46%] border-b border-second">
            <Toggle />
          </div>
          <div className="relative flex flex-1 items-center justify-center overflow-hidden border-second">
            <ArrowDown />
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        ref={phoneRef}
        style={{ x: translatePhone }}
        className="relative flex flex-1  items-center justify-center border-second"
      >
        <motion.div style={{ scale }} className="relative flex  ">
          <PhoneFrame
            opacityHeader={txtOpacity}
            opacity1={txtOpacity1}
            opacity2={txtOpacity2}
            opacity3={txtOpacity3}
            txtY1={txtY1}
            txtY2={txtY2}
            txtY3={txtY3}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
