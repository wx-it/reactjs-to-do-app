
function App() {

  function addTasks(){
    return(
      <div className="add-task">
        <form action="">

          <div>
          <h3>Task Name</h3>
          <input type="text" placeholder="task" />
          </div>

          <div>
          <h3>Status</h3>
            <select name="" id="">
              <option default>All</option>
              <option value="">Incomplete</option>
              <option value="">Complete</option>
            </select>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="container">
      <header>
        <h1>TODO LIST</h1>
      </header>

      <main>
        <div className="creating-tasks" >
          <button>add a task</button>
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
