import TopHeaderLine from "../components/TopHeaderLine";

export default function FirstPage() {
  return (
    <div className="h-full  px-6  ">
      <div
        className={`borderAnimation h-full  rounded-t-3xl border-second pt-6`}
      >
        <TopHeaderLine />
      </div>
    </div>
  );
}
