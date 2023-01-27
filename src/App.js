import { useState } from "react";
import { nanoid } from "nanoid";

function App() {

  const [popUp, setPopUp] = useState(false)
  const [tasks, setTasks] = useState([{task:"eat", select:"All"}])
  const [displayTasks, setDisplayTasks] = useState(false)
  const [checked, setChecked] = useState(false)

  
  function addTasks(){
    setPopUp(popUp => !popUp)
  }

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
  console.log(tasks)
  setDisplayTasks(displayTasks => !displayTasks)
  addTasks()
}

function checkBtn() {
  setChecked(checked => !checked)
}

const underline = {
  textDecoration : checked ? 'line-through' : "none"
}

return (
    <div className="container">
      <header>
        <h1>TODO LIST</h1>
      </header>

      <main>
        {popUp &&
          <div className="add-task">
            <h2>ADD TODO</h2>
          <form action="" onSubmit={handleSubmit}>  
            <h3>Task Name</h3>
            <input 
            type="text" 
            placeholder="Task" 
            name="task" 
            value={tasks.task} 
            onChange={handleChangeForm} />

            <h3>Status</h3>
              <select 
              name="select" 
              value={tasks.select} 
              onChange={handleChangeForm}>
                <option default>All</option>
                <option value="">Incomplete</option>
                <option value="">Complete</option>
              </select>

            <div className="create-task-btn">
             <button type="submit" onClick={createTask}>Create</button>
             <button onClick={addTasks}>Cancel</button>
            </div>
  
          </form>
        </div>
        }
        <div className="creating-tasks" >
          <button
          onClick={addTasks}
          >add a task</button>
          <form>
            <select name="" id="">
              <option default>All</option>
              <option value="">Incomplete</option>
              <option value="">Complete</option>
            </select>
          </form>
        </div>
        <div className="all-tasks">
          {tasks.map(task=> (
            <div className="task" key={nanoid()}>
              <button onClick={checkBtn} >Check</button>
              <p style={underline} >{task.task}</p>
              <p>{task.select}</p>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
}

export default App;
