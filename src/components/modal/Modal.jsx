import { motion } from "framer-motion";
import Backdrop from "../backdrop/Backdrop";
import { useState } from "react";
import "./modal.css";

const Modal = ({
  handleClose,
  createTask,
  text,
  select,
  setSelect,
  setText,
  editId,
  setEditId,
  tasks,
  setTasks,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = tasks.find((task) => task.id === editId);
      const updateTask = tasks.map((task) =>
        task.id === editTodo.id
          ? (task = { id: task.id, text })
          : { id: task.id, text: task.text }
      );
      setTasks(updateTask);
      setEditId(0);
      setText("");
      return;
    }

    if (!text) {
      alert("type something first");
      return;
    }
    createTask({ text, select });
    setText("");
    setSelect("");
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        key="modal"
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 300, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          zIndex: 2,
          transition: {
            duration: 0.1,
            type: "spring",
            damping: 20,
            stifness: 500,
          },
        }}
        exit={{ y: -300, opacity: 0 }}
      >
        <div className="add-task">
          <h2> {editId ? "EDIT TASK" : "ADD TASK"} </h2>
          <form action="" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Task"
              name="text"
              value={text}
              onChange={(e) => setText(e.currentTarget.value)}
            />

            <h3>Status</h3>
            <select
              name="select"
              value={select}
              onChange={(e) => setSelect(e.currentTarget.value)}
            >
              <option value="">All</option>
              <option value="incomplete">Incomplete</option>
              <option value="complete">Complete</option>
            </select>

            <div className="create-task-btn">
              <button type="submit" onClick={()=> editId ? handleClose(): null} > {editId ? "Edit" : "Create"} </button>
              <button type="button" onClick={handleClose}>
                Close
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
