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
  darkMode,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
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

  const style = {
    control: () => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      width: "5rem",
      height: "1.75rem",
      fontSize: "12px",
      marginTop: "1rem",
      letterSpacing: "0.055em",
      fontWeight: "300",
      padding: "0",
      backgroundColor: darkMode ? "rgba(57, 60, 68, 1)" : "#42424242",
      border: "none",
      outline: "none",
      cursor: "pointer",
      borderRadius: "5px",
    }),
    dropdownIndicator: () => ({
      display: "none",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    menuList: () => ({
      fontSize: "12px",
      width: "9.37rem",
      color: "white",
      backgroundColor: "rgba(57, 60, 68, 1)",
    }),
    option: (baseStyles) => ({
      ...baseStyles,
      margin: "none",
      height: "100%",
      cursor: "pointer",
    }),
    singleValue: (baseStyles) => ({
      ...baseStyles,
      color: darkMode ? "white" : "black",
    }),
  };

  const theme = (theme) => ({
    ...theme,
    borderRadius: 0,
    colors: {
      ...theme.colors,
      primary25: "rgba(33, 123, 207, 1)",
      primary: "black",
    },
  });

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
        <div
          className={
            darkMode ? "dark-add-task add-task" : "light-add-task add-task"
          }
        >
          <h2> ADD TASK </h2>
          <form action="" onSubmit={onSubmit}>
            <div
              className={
                darkMode
                  ? "input-form dark-input-form"
                  : "input-form light-input-form"
              }
            >
              <input
                type="text"
                placeholder="Task"
                name="text"
                value={text}
                onChange={(e) => setText(e.currentTarget.value)}
              />
            </div>

            <div className="dropdown">
              <Select
                options={priorityOptions}
                defaultValue={priorityOptions[0]}
                isSearchable={false}
                styles={style}
                theme={theme}
              />

              <Select
                options={filterOptions}
                defaultValue={filterOptions[0]}
                isSearchable={false}
                styles={style}
                theme={theme}
              />
            </div>

            <div
              className={
                darkMode
                  ? "dark-create-task-btn create-task-btn"
                  : "create-task-btn light-create-task-btn"
              }
            >
              <button type="button" onClick={handleClose}>
                Close
              </button>
              <button type="submit" onClick={handleClose}>
                Create
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
