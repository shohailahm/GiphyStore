import React, { useRef, useEffect } from "react";
import useIntersectionObserver from "./../hooks/useIntersection";
import Loader from "./Loader";

function ScrollComponent({ children, cb, hasData }) {
  const ref = useRef(null);
  const isBottomVisible = useIntersectionObserver(ref, {
    threshold: 0, //trigger event as soon as the element is in the viewport.
  });

  useEffect(() => {
    //load next page when bottom is visible
    isBottomVisible && cb();
  }, [isBottomVisible]);
  return (
    <>
      {children}
      <div ref={ref} style={{ width: "100%", height: "20px" }}>
        {hasData ? <Loader /> : null}
      </div>
    </>
  );
}

export default ScrollComponent;
