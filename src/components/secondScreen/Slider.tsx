import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ReactSlider from "react-slider";
interface Props {
  startValue: number;
  id: string;
}
const thumbMultiply = 0.15;
export default function Slider({ id, startValue }: Props) {
  const ref = useRef<ReactSlider<number> | null>(null);
  const [translateX, setTranslateX] = useState(startValue);
  useEffect(() => {
    const handleWindowResize = () => {
      if (!ref.current) return;
      const container = document.querySelector<HTMLDivElement>(`.${id}`);
      // setHeight(container?.parentElement?.clientHeight);

      //@ts-ignore
      if (!container || !ref || !ref.current || !ref.current.slider) return;
      container.style.height = `${
        //@ts-ignore
        ref.current?.slider?.clientHeight * thumbMultiply
      }rem`;
      container.style.width = `${
        //@ts-ignore
        ref.current?.slider?.clientHeight * thumbMultiply
      }rem`;
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [ref]);
  useEffect(() => {
    if (!ref.current) return;
    const container = document.querySelector<HTMLDivElement>(`.${id}`);
    // setHeight(container?.parentElement?.clientHeight);
    // console.log(height);
    //@ts-ignore
    if (!container || !ref || !ref.current || !ref.current.slider) return;
    container.style.height = `${
      //@ts-ignore
      ref.current?.slider.clientHeight * thumbMultiply
    }rem`;
    container.style.width = `${
      //@ts-ignore
      ref.current?.slider.clientHeight * thumbMultiply
    }rem`;
  }, [ref]);
  useEffect(() => {
    let timer = setInterval(() => {
      setTranslateX(100 - translateX);
    }, 3000);
    return () => clearInterval(timer);
  }, [translateX]);
  // translate-x-[1600%]
  // const motionSlider = motion<motionSlider>(ReactSlider);
  return (
    <motion.div
      whileInView={{ x: 0, opacity: 1 }}
      initial={{ opacity: 0, x: id === "slider1" ? "100%" : "-100%" }}
      transition={{ duration: 1.2 }}
      className=" flex h-[5%] w-full items-center justify-center   rounded-md"
    >
      <ReactSlider
        className=" group  z-30 h-[100%]  w-[70%] items-center  justify-center rounded-md border transition-all duration-1000 "
        thumbClassName={`${id}
      border border-[#707070]  bottom-0 top-[-70%] group-hover:duration-500 transition-all duration-[2000ms] rounded-full bg-green`}
        value={translateX}
        onChange={setTranslateX}
        ref={ref}
      />
    </motion.div>
    // <div className="max-w-max bg-second">
    // </div>
  );
}
