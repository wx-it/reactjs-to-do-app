import React from "react";
import {
  animated,
  useSpring,
  config,
  useSpringRef,
  useChain,
} from "react-spring";
import { MdDelete, MdCreate } from "react-icons/md";
import { useState } from "react";
import { motion } from "framer-motion";

import "./tasks.css";

const Task = ({ checkBtn, removeTask, task, editTask, darkMode }) => {
  const underline = {
    textDecoration: task.check ? "line-through" : "none",
  };

  const checkboxAnimationRef = useSpringRef();
  const checkboxAnimationStyle = useSpring({
    backgroundColor: task.check
      ? darkMode
        ? "#181F28"
        : "rgba(33, 123, 207, 1)"
      : darkMode
      ? "#181F28"
      : "#fffff",
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
    <motion.div
      className={darkMode ? "task dark-task" : "task light-task"}
      initial={{ y: 30, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.1,
          type: "spring",
          damping: 20,
          stifness: 500,
        },
      }}
      exit={{ y: -30, opacity: 0 }}
    >
      <div>
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
        <p style={underline}>{task.text}</p>
      </div>
      <div>
        <button onClick={() => editTask(task.id)}>
          {" "}
          <MdCreate />{" "}
        </button>
      </div>
    </motion.div>
  );
};

export default Task;
