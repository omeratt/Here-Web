import { useEffect, useState } from "react";
// import TopHeaderLine from "../components/TopHeaderLine";
import { motion } from "framer-motion";
type Props = {};

export default function ThirdPage() {
  return (
    <motion.div
      className={` flex h-full flex-1 flex-col overflow-hidden bg-green  pt-6  font-txt text-bgc`}
    >
      {/* <TopHeaderLine /> */}
      <motion.div
        initial={{ y: "-20%", opacity: 0, filter: "blur(0.2rem)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0)" }}
        transition={{ duration: 2.5 }}
        className=" pl-9"
      >
        <div
          className={`fadeIn textHeader mb-[min(10vw,4rem)] mr-5 mt-[min(17vw,6rem)] font-extrabold  `}
        >
          “ Its like 4 tv’s
          <br />
          running together ”
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
          This is how a large
          <br />
          proportion of people with
          <br />
          ADHD feel. The difficulty of
          <br />
          conducting oneself on a daily basis.
          <br />
          Tracking their tasks
          <br />
          and jumping from one app
          <br />
          to another, increase the
          <br />
          feeling of frustration and
          <br />
          lower the quality of life and
          <br />
          performance of the tasks of
          <br />
          the people with the disorder.
        </>
      ) : (
        <>
          This is how a large proportion of people with ADHD feel.
          <br />
          The difficulty of conducting oneself on a daily basis.
          <br />
          Tracking their tasks and jumping from one app to another
          <br />
          increase the feeling of frustration and lower the quality of life
          <br />
          and performance of the tasks of the people with the disorder.
        </>
      )}
    </>
  );
}
