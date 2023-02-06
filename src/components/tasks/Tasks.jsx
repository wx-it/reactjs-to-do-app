import Task from "./Task";
import "./tasks.css";
import { motion, AnimatePresence } from "framer-motion";

const Tasks = ({ tasks, checkBtn, removeTask, editTask, darkMode }) => {
  return (
    <div className="all-tasks">
      <AnimatePresence initial={false}>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              checkBtn={checkBtn}
              removeTask={removeTask}
              editTask={editTask}
              darkMode={darkMode}
            />
          ))
        ) : (
          <p>No Tasks</p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tasks;
