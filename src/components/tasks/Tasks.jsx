import Task from "./Task";
import './tasks.css'

const Tasks = ({tasks, checkBtn, removeTask}) => {

    


  return (
    <div className="all-tasks">
          {tasks.length > 0 ? tasks.map(task=> (
            <Task key={task.id} task={task} checkBtn={checkBtn} removeTask={removeTask} />
          )) : <p>No Tasks</p>}
    </div>
  ) 
}

export default Tasks