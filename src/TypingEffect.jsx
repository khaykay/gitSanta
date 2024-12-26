import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, speed = 100, style = "text-black" }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length - 1) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className={style}>{displayedText}</p>;
};

export default TypingEffect;
