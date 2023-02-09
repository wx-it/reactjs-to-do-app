import "./createTask.css";
import { BsFilter } from "react-icons/bs";
import { TbArrowsSort } from "react-icons/tb";
import Select from "react-select";
import { useState } from "react";

const CreateTask = ({
  modalOpen,
  open,
  close,
  darkMode,
  sortAlphabetically,
  sortReverse,
}) => {
  const sortOptions = [
    { value: "Date created", label: "Date created" },
    { value: "a to z", label: "a to z" },
    { value: "z to a", label: "z to a" },
  ];

  const style = {
    control: () => ({
      width: "6rem",
      fontSize: "12px",
      padding: "0",
      backgroundColor: "transparent",
      border: "none",
      color: "white",
      outline: "none",
      cursor: "pointer",
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
      color: darkMode ? "#D2D2D2" : "#424242",
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
    <div className="creating-tasks">
      <div className="sorting-filtering-container">
        <div className={darkMode ? "dark-sort sort" : "light-sort sort"}>
          <div
            className={
              darkMode
                ? "dark-sort-title sort-title"
                : "light-sort-title sort-title"
            }
          >
            <TbArrowsSort />
            <p>Sort</p>
          </div>

          <div className="sec-center">
            <input
              className={
                darkMode ? "dropdown dark-dropdown" : "dropdown light-dropdown"
              }
              type="checkbox"
              id="dropdown"
              name="dropdown"
            />
            <label className="for-dropdown" htmlFor="dropdown">
              Sort tasks
            </label>
            <div className="section-dropdown">
              <button>Recently added</button>
              <button onClick={sortAlphabetically}>a to z</button>
              <button onClick={sortReverse}>z to a</button>
            </div>
          </div>
        </div>

        <div className={darkMode ? "dark-sort sort" : "light-sort sort"}>
          <div
            className={
              darkMode
                ? "dark-sort-title sort-title"
                : "light-sort-title sort-title"
            }
          >
            <BsFilter />
            <p>Filter</p>
          </div>

          <Select
            options={sortOptions}
            defaultValue={sortOptions[0]}
            isSearchable={false}
            styles={style}
            theme={theme}
          />
        </div>
      </div>

      <button onClick={() => (modalOpen ? close() : open())}>Add Task</button>
    </div>
  );
};

export default CreateTask;
