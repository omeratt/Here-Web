import { useRef } from "react";
import "./App.css";
// import useScrollPercents from "./hooks/useScrollPercents";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
// import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";

function App() {
  const windowRef = useRef<HTMLDivElement>(null);
  // useScrollPercents({ forwardedRef: windowRef });
  // const ref = useRef<HTMLDivElement>(null);
  // const { scrollYProgress, scrollY } = useScroll({
  //   // container: windowRef,
  //   target: ref,
  //   // offset: ["start end", "end end"],
  // });

  // const opacity = useTransform(scrollY, [0, 1], [1, 0]);
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   // alert(latest);
  // });
  return (
    <div
      ref={windowRef}
      className="h-full snap-y snap-mandatory
       sm:snap-none"
    >
      <div className="flex flex-1 flex-col bg-bgc">
        <section className="  h-[100vh]  snap-end px-6 pt-6">
          <FirstPage />
        </section>
        <section
          // ref={ref}
          className=" h-[300vh] snap-start  px-6  "
        >
          <SecondPage containerRef={windowRef} />
        </section>
        <section className={`h-screen snap-start `}>
          <ThirdPage />
        </section>
      </div>
    </div>
  );
}

export default App;
