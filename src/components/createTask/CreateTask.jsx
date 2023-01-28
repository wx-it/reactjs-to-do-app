import "./createTask.css"

const CreateTask = ({modalOpen, open, close}) => {
  return (
    <div className="creating-tasks" >
          <button
          onClick={()=> (modalOpen ? close() : open())}
          >Add Task</button>
          <form>
            <select name="" id="">
              <option default>All</option>
              <option value="">Incomplete</option>
              <option value="">Complete</option>
            </select>
          </form>
        </div>
  )
}

export default CreateTask