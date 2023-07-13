import AnimatedLine from "./AnimatedLine";

export default function TopHeaderLine() {
  return (
    <div className="flex h-3  w-full flex-row items-center justify-between  px-6 align-middle font-txt text-[1.2em] text-second">
      <div className="fadeIn mr-5">
        H<span className="text-green">E</span>RE
      </div>
      <div className="flex  h-[0.5px] flex-1 flex-row rounded-lg">
        <AnimatedLine />
      </div>
      <div className="fadeIn ml-5">
        AD(<span className="text-green">H</span>)D
      </div>
    </div>
  );
}
