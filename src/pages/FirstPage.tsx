import { useEffect, useState } from "react";
import TopHeaderLine from "../components/TopHeaderLine";
import { motion } from "framer-motion";
export default function FirstPage() {
  return (
    <motion.div
      className={`borderAnimation flex h-full flex-1 flex-col overflow-hidden rounded-t-3xl border-second   pt-6  font-txt text-second`}
    >
      <TopHeaderLine />
      <motion.div
        initial={{ y: "-20%", opacity: 0, filter: "blur(0.2rem)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0)" }}
        transition={{ duration: 2.5 }}
        className=" pl-9"
      >
        <div
          className={`fadeIn textHeader mb-[min(10vw,4rem)] mr-5 mt-[min(17vw,6rem)] font-extrabold  `}
        >
          AD(
          <span className="text-green">H</span>)D Organizer <br /> app for easy
          life.
        </div>
        <div className={`fadeIn subtitle mr-5  text-[1.275em]`}>
          <SubTitle />
        </div>
      </motion.div>
    </motion.div>
  );
}

function SubTitle() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <>
      {windowSize[0] < 602 ? (
        <>
          When one understands the <br /> components of Attention <br /> Deficit
          Hyperactivity Disorder <br /> (ADD) and its implications for <br />
          functioning and life at school <br /> and at home, one can better{" "}
          <br />
          deal with the symptoms, and <br /> get an accurate diagnosis
          <br /> and appropriate treatment.
        </>
      ) : (
        <>
          When one understands the components of Attention <br /> Deficit
          Hyperactivity Disorder (ADD) and its implications <br /> for
          functioning and life at school and at home, one can better <br />
          deal with the symptoms, and get an accurate diagnosis and <br />
          appropriate treatment.
        </>
      )}
    </>
  );
}
