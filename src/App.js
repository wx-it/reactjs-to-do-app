import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./components/modal/Modal";
import Tasks from "./components/tasks/Tasks";

function App() {

  const [modalOpen, setModalOpen] = useState(false)

  const open = ()=> setModalOpen(true)
  const close = ()=> setModalOpen(false)


  const [tasks, setTasks] = useState([{id: 1,task:"task 1", select:""}, {id: 2,task:"task 2", select:""}])
  const [displayTasks, setDisplayTasks] = useState(false)
  const [checked, setChecked] = useState(false)


  function handleChangeForm(e) {
    const{name, value, type, checked} = e.target
    setTasks(prevTasks =>{
        return{
             ...prevTasks,
             [name] : type === 'checkbox' ? checked : value
    }})
  }

  function handleSubmit(e){
    e.preventDefault()
    setTasks(tasks => tasks)
}

function createTask(){
  setDisplayTasks(displayTasks => !displayTasks)
  setTasks(tasks => [...tasks, {tasks}])
}

function checkBtn() {
  setChecked(checked => !checked)
}

const underline = {
  textDecoration : checked ? 'line-through' : "none"
}

function removeTask(id){
  setTasks(tasks => tasks.filter(task => task.id === id))
}

return (
    <div className="container">
      <header>
        <h1>TODO LIST</h1>
      </header>

      <main>
        {modalOpen && <Modal handleSubmit={handleSubmit} tasks={tasks} handleChangeForm={handleChangeForm} createTask={createTask} modalOpen={modalOpen} handleClose={close} />}
        <div className="creating-tasks" >
          <button
          onClick={()=> (modalOpen ? close() : open())}
          >Add Task</button>
          <form>
            <select name="" id="">
              <option default>All</option>
              <option value="">Incomplete</option>
              <option value="">Complete</option>
            </select>
          </form>
        </div>
        <Tasks tasks={tasks} checkBtn={checkBtn} removeTask={removeTask} checked={checked} underline={underline} displayTasks={displayTasks} />
      </main>
    </div>
  );
}

export default App;
