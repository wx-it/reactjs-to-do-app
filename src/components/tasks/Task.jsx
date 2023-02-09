import React from "react";

import { MdDelete, MdCreate } from "react-icons/md";
import { motion } from "framer-motion";

import "./tasks.css";
import Checkbox from "./Checkbox";

const Task = ({ checkBtn, removeTask, task, editTask, darkMode }) => {
  const underline = {
    textDecoration: task.check ? "line-through" : "none",
  };

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
      <div
        className={
          darkMode ? "task-text dark-task-text" : "task-text light-task-text"
        }
      >
        <Checkbox task={task} darkMode={darkMode} checkBtn={checkBtn} />
        <div>
          <p style={underline}>{task.text}</p>
          <span style={underline}> {task.date} </span>
        </div>
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
