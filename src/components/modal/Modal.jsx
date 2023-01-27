import { motion } from "framer-motion"
import Backdrop from "../backdrop/Backdrop"
import { useState } from "react"

const Modal = ({handleClose, createTask}) => {

    const dropIn={
        hidden:{ y:"-100vh", opacity: 0 },
        visible:{y:"0", opacity: 1, transition:{ duration: 0.1, type: "spring", damping:20, stifness: 500 } },
        exit:{y:"100vh", opacity:0}
    }

    const [text, setText] = useState('')
    const [select, setSelect] = useState('')

    function onSubmit(e){
        e.preventDefault()
        if(!text){
            alert('type something first')
            return
        }
        createTask({text, select})
        setText('')
        setSelect('')
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
          <form action="" onSubmit={onSubmit}>  
            <h3>Task Name</h3>
            <input 
            type="text" 
            placeholder="Task" 
            value={text} 
            onChange={(e)=>setText(e.currentTarget.value)} />

            <h3>Status</h3>
              <select 
              name="select" 
              value={select} 
              onChange={(e)=>setSelect(e.currentTarget.value)}>
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