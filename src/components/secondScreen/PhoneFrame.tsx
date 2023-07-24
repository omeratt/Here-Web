import { DeviceFrameset } from "react-device-frameset";
import "./devices.min.css";
import Iphone from "/IphoneStart.svg";
import { useEffect, useLayoutEffect, useRef } from "react";
import { MotionValue, motion } from "framer-motion";
type Props = {
  opacityHeader?: MotionValue<any>;
  opacity1?: MotionValue<any>;
  opacity2?: MotionValue<any>;
  opacity3?: MotionValue<any>;
  txtY1?: MotionValue<any>;
  txtY2?: MotionValue<any>;
  txtY3?: MotionValue<any>;
  scale?: MotionValue<any>;
};

export default function PhoneFrame({
  opacityHeader,
  opacity1,
  opacity2,
  opacity3,
  txtY1,
  txtY2,
  txtY3,
  scale,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const aspect = 375 / 812;
  const height = 500;
  const width = height * aspect;

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <DeviceFrameset device="iPhone X">
        <div
          ref={ref}
          className="flex h-full w-full items-center justify-center bg-bgc"
        >
          <img src={Iphone} alt="React Logo" />
        </div>
      </DeviceFrameset>
      <div className="absolute  left-[115%] h-[812px] w-screen ">
        <motion.div
          style={{
            // position: "absolute",
            opacity: opacityHeader,
            // y: txtYPosition,
            // translateY: "0",
            top: "8%",
            // backgroundColor: "white",
          }}
          className="phoneHeader block h-full overflow-x-visible font-extrabold tracking-wider  text-second "
        >
          <h1 className="leading-[150%] ">
            Taking Charge of
            <br />
            your AD(<span className="text-green ">H</span>)D
          </h1>
          <motion.div className="phoneSubtitle  text-4xl font-normal leading-[150%] text-second/80 ">
            <motion.h1 style={{ opacity: opacity1, translateY: txtY1 }}>
              <br />
              YOUR Tasks <br />
            </motion.h1>
            <motion.h1 style={{ opacity: opacity2, translateY: txtY2 }}>
              <br />
              YOUR Rules <br />
            </motion.h1>
            <motion.h1 style={{ opacity: opacity3, translateY: txtY3 }}>
              <br />
              YOUR Success. <br />
            </motion.h1>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
