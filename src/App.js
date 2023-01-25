import { useState } from "react";

function App() {

  const [popUp, setPopUp] = useState(false)

  function addTasks(){
    setPopUp(popUp => !popUp)
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
          <form action="">
  
            <div>
            <h3>Task Name</h3>
            <input type="text" placeholder="Task" />
            </div>
  
            <div>
            <h3>Status</h3>
              <select name="" id="">
                <option default>All</option>
                <option value="">Incomplete</option>
                <option value="">Complete</option>
              </select>
            </div>

            <div className="create-task-btn">
             <button>Create</button>
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

        </div>
      </main>

    </div>
  );
}

export default App;
