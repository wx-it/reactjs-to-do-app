import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "./components/modal/Modal";
import Tasks from "./components/tasks/Tasks";
import CreateTask from "./components/createTask/CreateTask";
import data from "./data";
import SideBar from "./components/sideBar/SideBar";

function App() {
  const [tasks, setTasks] = useState(data || []);
  const [modalOpen, setModalOpen] = useState(false);
  const [text, setText] = useState("");
  const [select, setSelect] = useState("");
  const [editId, setEditId] = useState(0);

  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  const createTask = (task) => {
    let id = Math.floor(Math.random() * 1000) + 1;
    let check = false;
    const newTask = { id, check, ...task };
    setTasks([...tasks, newTask]);
    data.push(newTask);
    close();
  };

  function checkBtn(id) {
    return setTasks((task) => {
      return task.map((task) => {
        return task.id === id ? { ...task, check: !task.check } : task;
      });
    });
  }

  function removeTask(id) {
    const deleteTask = tasks.filter((task) => task.id !== id);
    setTasks([...deleteTask]);
  }

  const editTask = (id) => {
    const edit = tasks.find((task) => task.id === id);
    setText(edit.text);
    setEditId(id);
    open();
  };

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const [filter, setFilter] = useState("All");

  const FILTER_MAP = {
    All: () => true,
    Active: (task) => task.check === false,
    Completed: (task) => task.check === true,
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const filterList = FILTER_NAMES.map((name) => (
    <div
      key={name}
      className={darkMode ? "dark-link link" : "lightLink link"}
      onClick={() => setFilter(name)}
      aria-pressed={name === filter}
    >
      <p> {name} </p>
    </div>
  ));


  //sorting
  const sortAlphabetically = () =>{
    setTasks(tasks.sort())
  }

  return (
    <div className={darkMode ? "dark-container" : "container"}>
      <header
        className={darkMode ? "darkSideBar sideBar" : "lightSideBar sideBar"}
      >
        <SideBar
          tasks={tasks}
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          filterList={filterList}
        />
      </header>

      <AnimatePresence initial={false} mode="wait">
        {modalOpen && (
          <Modal
            tasks={tasks}
            setTasks={setTasks}
            createTask={createTask}
            modalOpen={modalOpen}
            handleClose={close}
            text={text}
            setText={setText}
            select={select}
            setSelect={setSelect}
            editId={editId}
            setEditId={setEditId}
            darkMode={darkMode}
          />
        )}
      </AnimatePresence>
      <main>
        <div className="main-container">
          <CreateTask
            modalOpen={modalOpen}
            open={open}
            close={close}
            setTasks={setTasks}
            data={data}
            tasks={tasks}
            darkMode={darkMode}
            sortAlphabetically={sortAlphabetically}
          />
          <Tasks
            tasks={tasks}
            checkBtn={checkBtn}
            removeTask={removeTask}
            editTask={editTask}
            darkMode={darkMode}
            FILTER_MAP={FILTER_MAP}
            filter={filter}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
