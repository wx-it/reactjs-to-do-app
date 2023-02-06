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

  const filterCompleted = () => {
    setTasks(data.filter((items) => items.check === true));
  };

  const filterInProgress = () => {
    setTasks(data.filter((items) => items.check === false));
  };

  const filterAll = () => {
    setTasks(data);
  };

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

  return (
    <div className={darkMode ? "dark-container" : "container"}>
      <header
        className={darkMode ? "darkSideBar sideBar" : "lightSideBar sideBar"}
      >
        <SideBar
          tasks={tasks}
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          filterAll={filterAll}
          filterCompleted={filterCompleted}
          filterInProgress={filterInProgress}
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
            // filterStatus={filterStatus}
          />
          <Tasks
            tasks={tasks}
            checkBtn={checkBtn}
            removeTask={removeTask}
            editTask={editTask}
            darkMode={darkMode}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
