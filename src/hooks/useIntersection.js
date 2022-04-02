import { useEffect, useState } from "react";
const useIntersectionObserver = (ref, options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const { current } = ref;
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (current) {
      observer.observe(current);
    }

    return () => {
      observer.unobserve(current);
    };
  }, [options, ref]);

  return isIntersecting;
};

export default useIntersectionObserver;
