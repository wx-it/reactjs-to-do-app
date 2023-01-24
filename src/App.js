
function App() {
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
