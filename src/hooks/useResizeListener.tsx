import { useLayoutEffect, useState } from "react";

const useResizeListener = (
  containerId: string
): { width: number; height: number } => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;
    const { width, height } = container.getBoundingClientRect();
    // setSize({ width, height });
    const handleResize = () => {
      setSize({ width, height });
    };

    handleResize(); // Initial measurement

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [containerId]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     const container = document.getElementById(containerId);
  //     if (!container) return;
  //     const { width, height } = container.getBoundingClientRect();
  //     setSize({ width, height });
  //   }, 500);
  // }, []);

  return size;
};

export default useResizeListener;
