import { useState, useEffect } from "react";

export default () => {
  const [innerWidth, setInnerWidth] = useState();
  const [innerHeight, setInnerHeight] = useState();

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);

    const handleResize = () => {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [innerWidth, innerHeight]);

  return { innerWidth, innerHeight };
};
