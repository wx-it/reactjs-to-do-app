import React from "react";

import { MdDelete, MdCreate } from "react-icons/md";
import { motion } from "framer-motion";

import "./tasks.css";
import Checkbox from "./Checkbox";
import EditTask from "./editTask/EditTask";

const Task = ({
  checkBtn,
  removeTask,
  task,
  editTask,
  darkMode,
  toggleEditTask,
  openEditTask,
  setEditId,
  editId,
  setText,
  text,
  tasks,
  setTasks,
}) => {
  const underline = {
    textDecoration: task.check ? "line-through" : "none",
  };

  return (
    <div className="tasks-container">
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
      {openEditTask && (
        <EditTask
          darkMode={darkMode}
          editId={editId}
          setText={setText}
          text={text}
          tasks={tasks}
          setTasks={setTasks}
          openEditTask={openEditTask}
        />
      )}
    </div>
  );
};

export default Task;
