import "./TaskList.css";

import { TaskType } from "../../types";
import Task from "../Task";

interface TaskListProps {
  taskItems: TaskType[];
  handleDeleteTask: (id: string) => void;
  handleCompleteTask: (id: string) => void;
}

const TaskList = ({
  taskItems,
  handleDeleteTask,
  handleCompleteTask,
}: TaskListProps) => {
  return (
    <>
      <ul className="ul-list">
        {taskItems.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          taskItems.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              onDelete={handleDeleteTask}
              onComplete={handleCompleteTask}
              completed={task.completed}
            >
              {task.title}
            </Task>
          ))
        )}
      </ul>
    </>
  );
};

export default TaskList;
