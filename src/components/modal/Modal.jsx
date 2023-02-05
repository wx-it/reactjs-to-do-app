import { motion } from "framer-motion";
import Backdrop from "../backdrop/Backdrop";
import { useState } from "react";
import "./modal.css";
import Select from "react-select";

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

  const priorityOptions = [
    { value: "Priority 1", label: "Priority 1" },
    { value: "Priority 2", label: "Priority 2" },
    { value: "Priority 3", label: "Priority 3" },
    { value: "Priority 4", label: "Priority 4" },
  ];
  const filterOptions = [
    { value: "Design", label: "Design" },
    { value: "Web Dev", label: "Web Dev" },
    { value: "Personal", label: "Personal" },
  ];

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

            <div className="dropdown">
              <Select
                options={priorityOptions}
                placeholder="Priority"
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    width: "40%",
                  }),
                }}
              />

              <Select
                options={filterOptions}
                placeholder="Filter"
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    width: "40%",
                  }),
                }}
              />
            </div>

            <div className="create-task-btn">
              <button
                type="submit"
                onClick={() => (editId ? handleClose() : null)}
              >
                {" "}
                {editId ? "Edit" : "Create"}{" "}
              </button>
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
