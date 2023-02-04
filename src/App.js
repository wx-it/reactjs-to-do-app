import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "./components/modal/Modal";
import Tasks from "./components/tasks/Tasks";
import CreateTask from "./components/createTask/CreateTask";
import data from "./data";
import SideBar from "./components/sideBar/SideBar";

function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        check: true,
        text: "finish the tasks app",
        state: "incomplete",
      },
      {
        id: 2,
        check: false,
        text: "finish the tasks app",
        state: "incomplete",
      },
      {
        id: 3,
        check: false,
        text: "finish the tasks app",
        state: "incomplete",
      },
    ] || []
  );
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

  //  function filterStatus(state) {
  //    const setState = data.filter((item) => {
  //      return item.select === state;
  //    });
  //    setTasks(setState);
  //  }

  const editTask = (id) => {
    const edit = tasks.find((task) => task.id === id);
    setText(edit.text);
    setEditId(id);
    open();
  };

  return (
    <div className="container">
      <header className="sideBar">
        <SideBar />
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
            // filterStatus={filterStatus}
          />
          <Tasks
            tasks={tasks}
            checkBtn={checkBtn}
            removeTask={removeTask}
            editTask={editTask}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
