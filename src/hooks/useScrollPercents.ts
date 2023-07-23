import { useEffect, RefObject } from "react";

type Props = {
  forwardedRef: RefObject<HTMLDivElement>;
};

const useScrollPercents = ({ forwardedRef }: Props) => {
  useEffect(() => {
    function setScrollVar() {
      if (!forwardedRef.current) return;
      const htmlElement = forwardedRef.current;
      const percentOfScreenHeightScrolled =
        htmlElement.scrollTop / htmlElement.clientHeight;
      // console.log(percentOfScreenHeightScrolled * 100);
      // calc(-1% * max(var(--scroll), 20) - 20)
      const percents = Math.min(
        Math.max(percentOfScreenHeightScrolled * 100 - 100, 0),
        200
      );
      const realVal = (-1 * (Math.max(percents, 20) - 20) * 100) / 80;
      // console.log({ realVal });
      htmlElement.style.setProperty("--scroll", realVal.toString());
    }

    const htmlElement = forwardedRef.current;
    if (htmlElement) {
      htmlElement.addEventListener("scroll", setScrollVar);
      htmlElement.addEventListener("resize", setScrollVar);
    }

    return () => {
      if (htmlElement) {
        htmlElement.removeEventListener("scroll", setScrollVar);
        htmlElement.removeEventListener("resize", setScrollVar);
      }
    };
  }, [forwardedRef]);
};

export default useScrollPercents;
