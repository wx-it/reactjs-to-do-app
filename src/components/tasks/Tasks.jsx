import Task from "./Task";
import "./tasks.css";
import { motion, AnimatePresence } from "framer-motion";

const Tasks = ({
  setTasks,
  tasks,
  checkBtn,
  removeTask,
  editTask,
  darkMode,
  FILTER_MAP,
  filter,
  toggleEditTask,
  setEditId,
  editId,
  setText,
  text,
}) => {
  return (
    <div className="all-tasks">
      <AnimatePresence initial={false}>
        {tasks.length > 0 ? (
          tasks
            .filter(FILTER_MAP[filter])
            .map((task) => (
              <Task
                key={task.id}
                task={task}
                checkBtn={checkBtn}
                removeTask={removeTask}
                editTask={editTask}
                darkMode={darkMode}
                toggleEditTask={toggleEditTask}
                openEditTask={task.openEditTask}
                setEditId={setEditId}
                editId={editId}
                setText={setText}
                text={text}
                tasks={tasks}
                setTasks={setTasks}
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
