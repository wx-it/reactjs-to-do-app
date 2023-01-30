import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "./components/modal/Modal";
import Tasks from "./components/tasks/Tasks";
import CreateTask from "./components/createTask/CreateTask";

function App() {

  const [tasks, setTasks] = useState([{id: 1, check: false, text: "all", select:"complete"},{id: 2, check: true, text: "completed", select:"complete"}, {id: 3, check: false, text: "incomplete", select:"incomplete"},])
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

function removeTask(id){
  setTasks(tasks => tasks.filter(task => task.id !== id))
}

const [filterSelect, setFilterSelect] = useState()
const [tasksList, setTasksList] = useState([])

useEffect(()=>{
  setTasksList(tasks)
}, [])

  function filterStatus() {
    if(!filterSelect){
      return tasksList;
    }
    let allTasks = tasksList.filter((task=> task.select === filterSelect))
    setTasks([...new Set(allTasks)])
    console.log(filterSelect)
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
        <CreateTask modalOpen={modalOpen} open={open} close={close} tasks={tasks} filterSelect={filterSelect} setFilterSelect={setFilterSelect} filterStatus={filterStatus} />
        <Tasks tasks={tasks} checkBtn={checkBtn} removeTask={removeTask} />
      </main>
    </div>
  );
}

export default App;
