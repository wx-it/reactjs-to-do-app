import React from "react";
import "./sideBar.css";
import { useState } from "react";
import { BsFillBrightnessHighFill, BsMoon } from "react-icons/bs";

const SideBar = (props) => {
  const inProgress = props.tasks.filter((task) => task.check === false);
  const complete = props.tasks.filter((task) => task.check === true);

  return (
    <>
      <div>
        <h1>Task Manager</h1>

        <nav>
          <h2>Tasks</h2>
          {props.filterList}
        </nav>
      </div>

      <div className="theme">
        <input
          type="checkbox"
          onClick={props.toggleDarkMode}
          className="checkbox"
          id="checkbox"
        />
        <label
          htmlFor="checkbox"
          className={
            props.darkMode
              ? "dark-checkbox-label checkbox-label"
              : "light-checkbox-label checkbox-label"
          }
        >
          <div>
            <BsFillBrightnessHighFill />
            <p> Light</p>
          </div>
          <div>
            <BsMoon />
            <p>Dark</p>
          </div>
          <span
            className={props.darkMode ? "dark-ball ball" : "dark-ball ball"}
          >
            {props.darkMode ? (
              <div>
                <BsMoon />
                <p>Dark</p>
              </div>
            ) : (
              <div>
                <BsFillBrightnessHighFill />
                <p> Light</p>
              </div>
            )}
          </span>
        </label>
      </div>
    </>
  );
};

export default SideBar;
