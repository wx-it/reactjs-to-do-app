import "./createTask.css"
import { useState } from "react"

const CreateTask = ({modalOpen, open, close, tasks, setFilterSelect, filterSelect, filterStatus}) => {


  return (
    <div className="creating-tasks" >
          <button
          onClick={()=> (modalOpen ? close() : open())}
          >Add Task</button>
          <form>
            <select name="filteredSelect" onChange={(e)=> {setFilterSelect(e.currentTarget.value)}}>
              <option value="">All</option>
              <option value="incomplete" >Incomplete</option>
              <option value="complete">Complete</option>
            </select>
          </form>
        </div>
  )
}

export default CreateTask