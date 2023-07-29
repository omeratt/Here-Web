import { useEffect, useRef, useState } from "react";
import "./App.css";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import MobileSecondPage from "./pages/MobileSecondPage";
function App() {
  const [isMobileDimensions, setIsMobileDimensions] = useState(false);
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 690) {
        setIsMobileDimensions(true);
      } else {
        setIsMobileDimensions(false);
      }
    };

    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const containerRef = useRef(null);

  return (
    <div
      id="myWeb"
      className="h-full w-full snap-y snap-mandatory 
         sm:snap-none"
    >
      <div className="flex  flex-1 flex-col bg-bgc" ref={containerRef}>
        <section className="  h-[100vh]  snap-end px-6 pt-6">
          <FirstPage />
        </section>
        <section
          // id="secondSection"
          className={`${
            isMobileDimensions ? "h-screen" : "h-[300vh] "
          } snap-start  px-6  `}
        >
          {isMobileDimensions ? <MobileSecondPage /> : <SecondPage />}
        </section>
        <section className={`h-screen snap-start `}>
          <ThirdPage />
        </section>
      </div>
    </div>
  );
}

export default App;
