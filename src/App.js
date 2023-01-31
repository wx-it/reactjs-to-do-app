import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "./components/modal/Modal";
import Tasks from "./components/tasks/Tasks";
import CreateTask from "./components/createTask/CreateTask";
import data from "./data"

function App() {
  const [tasks, setTasks] = useState(data || []);
  const [modalOpen, setModalOpen] = useState(false);

  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  const createTask = (task) => {
    let id = Math.floor(Math.random() * 1000) + 1;
    let check = false;
    const newTask = { id, check, ...task };
    data.push(newTask)
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
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function filterStatus(state) {
    const setState = data.filter(item =>{
      return item.select === state
    });
    setTasks(setState)
  }


  return (
    <div className="container">
      <header>
        <h1>TODO LIST</h1>
      </header>

      <main>
        <AnimatePresence initial={false} mode="wait">
          {modalOpen && (
            <Modal
              tasks={tasks}
              createTask={createTask}
              modalOpen={modalOpen}
              handleClose={close}
            />
          )}
        </AnimatePresence>
        <CreateTask
          modalOpen={modalOpen}
          open={open}
          close={close}
          setTasks={setTasks}
          data={data}
          tasks={tasks}
          filterStatus={filterStatus}
        />
        <Tasks tasks={tasks} checkBtn={checkBtn} removeTask={removeTask} />
        <button onClick={()=> console.log(data)} >click me</button>
      </main>
    </div>
  );
}

export default App;
