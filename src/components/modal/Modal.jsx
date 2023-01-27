import { motion } from "framer-motion"
import Backdrop from "../backdrop/Backdrop"

const Modal = ({handleClose, handleSubmit, tasks, handleChangeForm, createTask}) => {

    const dropIn={
        hidden:{ y:"-100vh", opacity: 0 },
        visible:{y:"0", opacity: 1, transition:{ duration: 0.1, type: "spring", damping:20, stifness: 500 } },
        exit:{y:"100vh", opacity:0}
    }

  return (
    <Backdrop onClick={handleClose} >

        <motion.div
        onClick={(e)=> e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        >

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
             <button onClick={handleClose} >Cancel</button>
            </div>
  
          </form>
        </div>

        </motion.div>

    </Backdrop>
  )
}

export default Modal