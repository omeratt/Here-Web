import { DeviceFrameset } from "react-device-frameset";
import "./devices.min.css";
import Iphone from "/IphoneStart.svg";
type Props = {};

export default function PhoneFrame({}: Props) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <DeviceFrameset device="iPhone X">
        <div className="flex h-full w-full items-center justify-center bg-bgc">
          <img src={Iphone} alt="React Logo" />
        </div>
      </DeviceFrameset>
    </div>
  );
}
