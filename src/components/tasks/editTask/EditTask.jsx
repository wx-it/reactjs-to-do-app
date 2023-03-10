import React from "react";
import "./editTask.css";
import Select from "react-select";

const EditTask = ({
  darkMode,
  setEditId,
  editId,
  setText,
  text,
  setTasks,
  tasks,
  openEditTask,
  setEditText,
  editText,
  editTask,
  toggleEdit
}) => {
  const onSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = tasks.find((task) => task.id === editId);
      const updateTask = tasks.map((task) =>
        task.id === editTodo.id
          ? (task = { id: task.id, text: editText, check: task.check, date: task.date })
          : { id: task.id, text: task.text, check: task.check, date: task.date }
      );
      setTasks(updateTask);
      setText("");
      setEditText("");
      return;
    }
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
      backgroundColor: darkMode ? "rgb(110, 110, 110)" : "#42424242",
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


  function handleClose(e) {
    e.preventDefault();
    console.log('click')
    console.log(openEditTask);
    return !openEditTask;
  }


  return (
    <div
      className={
        darkMode ? "edit-task dark-edit-task" : "edit-task light-edit-task"
      }
    >
      <h3>Edit Task</h3>
      <form action="" onSubmit={onSubmit}>
        <div className="input-form">
          <input
            type="text"
            placeholder="edit"
            name="editText"
            value={editText}
            onChange={(e) => setEditText(e.currentTarget.value)}
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
              ? "dark-edit-task-btn edit-task-btn"
              : "edit-task-btn light-edit-task-btn"
          }
        >
          <button type="button" onClick={toggleEdit}>
            Cancel
          </button>

          <button type="submit">
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
