import "./createTask.css";

const CreateTask = ({ modalOpen, open, close }) => {
  return (
    <div className="creating-tasks">
      <div className="filter" >
        <p>Sort</p>
        
        <select>
          <option value="">All</option>
          <option>Recently Added</option>
          <option value="">a to z</option>

        </select>
        
      </div>

      <button onClick={() => (modalOpen ? close() : open())}>Add Task</button>
    </div>
  );
};

export default CreateTask;
