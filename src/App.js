import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./components/modal/Modal";
import Tasks from "./components/tasks/Tasks";
import { nanoid } from "nanoid";
import CreateTask from "./components/createTask/CreateTask";

function App() {

  const [modalOpen, setModalOpen] = useState(false)

  const open = ()=> setModalOpen(true)
  const close = ()=> setModalOpen(false)


  const [tasks, setTasks] = useState([])
  const [displayTasks, setDisplayTasks] = useState(false)
  const [checked, setChecked] = useState(false)

const createTask = (task)=>{
  let id = Math.floor(Math.random() * 1000) + 1
  let check = false
  const newTask = {id, check, ...task}
  setTasks([...tasks, newTask])
  close()
}

function checkBtn(id) {
  return setTasks(task =>{
    return task.map(task => {
      return task.id === id ? {...task, check: !task.check} : task
    })
  })

}

function removeTask(id){
  setTasks(tasks => tasks.filter(task => task.id !== id))
}

return (
    <div className="container">
      <header>
        <h1>TODO LIST</h1>
      </header>

      <main>
        {modalOpen && <Modal tasks={tasks} createTask={createTask} modalOpen={modalOpen} handleClose={close} />}
        <CreateTask modalOpen={modalOpen} open={open} close={close} />
        <Tasks tasks={tasks} checkBtn={checkBtn} removeTask={removeTask} displayTasks={displayTasks} />
      </main>
    </div>
  );
}

export default App;
