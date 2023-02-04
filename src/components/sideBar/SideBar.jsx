import React from "react";
import "./sideBar.css";
import { useState } from "react";
import { BsFillBrightnessHighFill, BsMoon } from "react-icons/bs";

const SideBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div>
        <h1>Task Manager</h1>

        <nav>
          <h2>Tasks</h2>
          <div className="link">
            <a href="">All</a>
            <span>10</span>
          </div>
          <div className="link">
            <a href="">In Progress</a>
            <span>10</span>
          </div>
          <div className="link">
            <a href="">Completed</a>
            <span>10</span>
          </div>
        </nav>
      </div>

      <div className="theme">
        <input
          type="checkbox"
          onClick={toggleDarkMode}
          className="checkbox"
          id="checkbox"
        />
        <label for="checkbox" className="checkbox-label">
          <div>
            <BsFillBrightnessHighFill />
            <p> Light</p>
          </div>
          <div>
            <BsMoon />
            <p>Dark</p>
          </div>
          <span className="ball">
            {darkMode ? (
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
