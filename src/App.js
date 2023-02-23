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
  const [editText, setEditText] = useState("");
  const [select, setSelect] = useState("");
  const [editId, setEditId] = useState(0);

  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  const createTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const check = false;
    const openEditTask = false;
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    const newTask = { id, check, date, openEditTask, ...task };
    setTasks([...tasks, newTask]);
    data.push(newTask);
    close();
  };

  const toggleEditTask = (id) => {
    return setTasks((tasks) => {
      return tasks.map((task) => {
        return task.id === id
          ? { ...task, openEditTask: !task.openEditTask }
          : task;
      });
    });
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
    setEditText(edit.text);
    setEditId(id);
    toggleEditTask(id);
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
  const sortAlphabetically = () => {
    const strAscending = [...tasks].sort((a, b) => (a.text > b.text ? 1 : -1));
    setTasks(strAscending);
  };

  const sortReverse = () => {
    const strAscending = [...tasks].sort((a, b) => (a.text > b.text ? -1 : 1));
    setTasks(strAscending);
  };

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
            sortReverse={sortReverse}
          />
          <Tasks
            setTasks={setTasks}
            tasks={tasks}
            checkBtn={checkBtn}
            removeTask={removeTask}
            editTask={editTask}
            darkMode={darkMode}
            FILTER_MAP={FILTER_MAP}
            filter={filter}
            toggleEditTask={toggleEditTask}
            setEditId={setEditId}
            editId={editId}
            setText={setText}
            text={text}
            setEditText={setEditText}
            editText={editText}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
