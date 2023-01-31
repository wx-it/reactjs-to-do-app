import "./createTask.css";

const CreateTask = ({
  modalOpen,
  open,
  close,
  setTasks,
  data,
  filterStatus,
}) => {
  return (
    <div className="creating-tasks">
      <button onClick={() => (modalOpen ? close() : open())}>Add Task</button>

      {/* <div>
        <button
          type="button"
          onClick={() => {
            setTasks(data);
          }}
        >
          All
        </button>
        <button type="button" onClick={() => filterStatus("incomplete")}>
          Incomplete
        </button>
        <button type="button" onClick={() => filterStatus("complete")}>
          Complete
        </button>
      </div> */}

      <div className="sec-center">
        <input
          className="dropdown"
          type="checkbox"
          id="dropdown"
          name="dropdown"
        />
        <label className="for-dropdown" htmlFor="dropdown">
          Select category
        </label>
        <div className="section-dropdown">
          <button
            onClick={() => {
              setTasks(data);
            }}
          >
            All
          </button>
          <button onClick={() => filterStatus("incomplete")}>Incomplete</button>
          <button onClick={() => filterStatus("complete")}>Complete</button>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
