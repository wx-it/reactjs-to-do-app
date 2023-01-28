import Task from "./Task";

const Tasks = ({tasks, checkBtn, removeTask, checked, underline, displayTasks}) => {

    


  return (
    <div className="all-tasks">
          {tasks.length > 0 ? tasks.map(task=> (
            <Task key={task.id} task={task} checkBtn={checkBtn} removeTask={removeTask} checked={checked} underline={underline} />
          )) : <p>No Tasks</p>}
    </div>
  ) 
}

export default Tasks