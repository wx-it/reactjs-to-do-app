import { useState } from "react";
import { nanoid } from "nanoid";
import {
  animated,
  useSpring,
  config,
  useSpringRef,
  useChain
} from "react-spring";


function App() {

  const [popUp, setPopUp] = useState(false)
  const [tasks, setTasks] = useState([{task:"eat", select:"All"}])
  const [displayTasks, setDisplayTasks] = useState(false)
  const [checked, setChecked] = useState(false)

  const checkboxAnimationRef = useSpringRef();
  const checkboxAnimationStyle = useSpring({
    backgroundColor: checked ? "#808" : "#fff",
    borderColor: checked ? "#808" : "#ddd",
    config: config.gentle,
    ref: checkboxAnimationRef
  });

  const [checkmarkLength, setCheckmarkLength] = useState(null);

  const checkmarkAnimationRef = useSpringRef();
  const checkmarkAnimationStyle = useSpring({
    x: checked ? 0 : checkmarkLength,
    config: config.gentle,
    ref: checkmarkAnimationRef
  });

  useChain(
    checked
      ? [checkboxAnimationRef, checkmarkAnimationRef]
      : [checkmarkAnimationRef, checkboxAnimationRef],
    [0, 0.1]
  );

  
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
              <label>
                <input type="checkbox" onChange={checkBtn} />
                <animated.svg
                style={checkboxAnimationStyle}
                className={`checkbox ${checked ? "checkbox--active" : ""}`}
                aria-hidden="true"
                viewBox="0 0 15 11"
                fill="none"
                >
                 <animated.path
                    d="M1 4.5L5 9L14 1"
                    strokeWidth="2"
                    stroke="#fff"
                    ref={(ref) => {
                      if (ref) {
                      setCheckmarkLength(ref.getTotalLength());
                      }
                        }}
                       strokeDasharray={checkmarkLength}
                       strokeDashoffset={checkmarkAnimationStyle.x}
                />
              </animated.svg>
              </label>
              <p style={underline} >{task.task}</p>
              <button>delete</button>
              <button>edit</button>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
}

export default App;
