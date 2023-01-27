import Task from "./Task";

const Tasks = ({tasks, checkBtn, removeTask, checked, underline, displayTasks}) => {

    


  return (
    <div className="all-tasks">
          {
          tasks.map(task=> (
            <Task key={task.id} task={task} checkBtn={checkBtn} removeTask={removeTask} checked={checked} underline={underline} />
          ))
          }
        </div>
  )
}

export default Tasks