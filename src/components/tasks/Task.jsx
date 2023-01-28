import React from 'react'
import { nanoid } from "nanoid";
import {
  animated,
  useSpring,
  config,
  useSpringRef,
  useChain
} from "react-spring";
import { MdDelete, MdCreate } from "react-icons/md";
import { useState } from "react";
const Task = ({tasks, checkBtn, removeTask, checked, underline, task}) => {


    const checkboxAnimationRef = useSpringRef();
    const checkboxAnimationStyle = useSpring({
      backgroundColor: checked ? "#808" : "#fff",
      borderColor: checked ? "#808" : "#ddd",
      config: config.gentle,
      ref: checkboxAnimationRef
    });
  
    const [checkmarkLength, setCheckmarkLength] = useState(null);
  
    const checkmarkAnimationRef = useSpringRef();
    const checkmarkAnimationStyle = useSpring({
      x: checked ? 0 : checkmarkLength,
      config: config.gentle,
      ref: checkmarkAnimationRef
    });
  
    useChain(
      checked
        ? [checkboxAnimationRef, checkmarkAnimationRef]
        : [checkmarkAnimationRef, checkboxAnimationRef],
      [0, 0.1]
    );


  return (
    <div className="task" key={nanoid()}>
             <div>
             <label>
                <input type="checkbox" onChange={checkBtn} />
                <animated.svg
                style={checkboxAnimationStyle}
                className={`checkbox ${checked ? "checkbox--active" : ""}`}
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
              <p style={underline} >{task.text}</p>
             </div>
              <div>
              <button onClick={()=> removeTask(task.id)}> <MdDelete/> </button>
              <button> <MdCreate/> </button>
              </div>
            </div>
  )
}

export default Task