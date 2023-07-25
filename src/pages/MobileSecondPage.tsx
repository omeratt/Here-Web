import { DeviceFrameset } from "react-device-frameset";
import "../components/secondScreen/devices.min.css";
import Iphone from "/IphoneStart.svg";
import Button from "../components/secondScreen/Button";
import { motion } from "framer-motion";

type Props = {};

export default function MobileSecondPage({}: Props) {
  return (
    <div
      className={`borderAnimation2  flex h-full w-full flex-1  flex-col items-center  justify-start overflow-hidden border-second font-txt text-second`}
    >
      <div className="flex h-full w-full  flex-col items-center justify-center  ">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5 }}
          className="flex h-[587.2px] w-full  flex-col items-center justify-center  "
        >
          <DeviceFrameset device="iPhone X" zoom={0.6}>
            <div className="flex h-full w-full items-center  justify-center bg-bgc">
              <img src={Iphone} alt="Here ScreenShot" />
            </div>
          </DeviceFrameset>
        </motion.div>
        <div className="flex h-[10%] w-full flex-row justify-start ">
          <Button center={false} />
        </div>
      </div>
    </div>
  );
}
