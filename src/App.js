import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "./components/modal/Modal";
import Tasks from "./components/tasks/Tasks";
import CreateTask from "./components/createTask/CreateTask";

function App() {

  const [tasks, setTasks] = useState([])
  const [modalOpen, setModalOpen] = useState(false)

  const open = ()=> setModalOpen(true)
  const close = ()=> setModalOpen(false)



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

const [showTask, setShowTask] = useState(true)

function removeTask(id){
  setTasks(tasks => tasks.filter(task => task.id !== id))
}

return (
    <div className="container">
      <header>
        <h1>TODO LIST</h1>
      </header>

      <main>
        <AnimatePresence initial={false} mode="wait" >
        {modalOpen && <Modal tasks={tasks} createTask={createTask} modalOpen={modalOpen} handleClose={close} />}
        </AnimatePresence>
        <CreateTask modalOpen={modalOpen} open={open} close={close} />
        
        <Tasks tasks={tasks} checkBtn={checkBtn} removeTask={removeTask} showTask={showTask} />
      </main>
    </div>
  );
}

export default App;
