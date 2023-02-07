import React from "react";
import {
  animated,
  useSpring,
  config,
  useSpringRef,
  useChain,
} from "react-spring";
import { useState } from "react";

const Checkbox = ({ task, darkMode, checkBtn }) => {
  const checkboxAnimationRef = useSpringRef();
  const checkboxAnimationStyle = useSpring({
    backgroundColor: task.check
      ? darkMode
        ? "#181F28"
        : "rgba(33, 123, 207, 1)"
      : darkMode
      ? "#181F28"
      : "transparent",
    borderColor: task.check
      ? darkMode
        ? "#181F28"
        : "rgba(33, 123, 207, 1)"
      : "#525252",
    config: config.gentle,
    ref: checkboxAnimationRef,
  });

  const [checkmarkLength, setCheckmarkLength] = useState(null);

  const checkmarkAnimationRef = useSpringRef();
  const checkmarkAnimationStyle = useSpring({
    x: task.check ? 0 : checkmarkLength,
    config: config.gentle,
    ref: checkmarkAnimationRef,
  });

  useChain(
    task.check
      ? [checkboxAnimationRef, checkmarkAnimationRef]
      : [checkmarkAnimationRef, checkboxAnimationRef],
    [0, 0.1]
  );

  return (
    <>
      <label>
        <input type="checkbox" onChange={() => checkBtn(task.id)} />
        <animated.svg
          style={checkboxAnimationStyle}
          className={darkMode ? "dark-check check" : "light-check check"}
          aria-hidden="true"
          viewBox="0 0 15 11"
          fill="none"
        >
          <animated.path
            d="M1 4.5L5 9L14 1"
            strokeWidth="2"
            stroke="#fff"
            ref={(ref) => {
              if (ref) {
                setCheckmarkLength(ref.getTotalLength());
              }
            }}
            strokeDasharray={checkmarkLength}
            strokeDashoffset={checkmarkAnimationStyle.x}
          />
        </animated.svg>
      </label>
    </>
  );
};

export default Checkbox;
