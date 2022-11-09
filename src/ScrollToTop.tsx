import React, { useEffect, PropsWithChildren } from "react";
import { useLocation } from "react-router";

const ScrollToTop: React.FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <div>{children}</div>;
};

export default ScrollToTop;
