import Task from "./Task";
import './tasks.css'
import { motion, AnimatePresence } from "framer-motion"


const Tasks = ({tasks, checkBtn, removeTask, showTask}) => {

    


  return (
    <div className="all-tasks">
          {tasks.length > 0 ? tasks.map(task=> (
            <Task key={task.id} task={task} checkBtn={checkBtn} removeTask={removeTask} showTask={showTask} />
          )) : <p>No Tasks</p>}
    </div>
  ) 
}

export default Tasks