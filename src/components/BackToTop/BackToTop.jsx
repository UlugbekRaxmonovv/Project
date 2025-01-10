import React, { useState, useEffect } from "react";
import { VscChevronUp } from "react-icons/vsc";

const BackToTop = () => {
  const [backtop, setBacktop] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setBacktop(true);
    } else {
      setBacktop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {backtop && (
        <button className="back-to-top" onClick={scrollToTop}>
       <VscChevronUp />

        </button>
      )}
    </div>
  );
};

export default BackToTop;