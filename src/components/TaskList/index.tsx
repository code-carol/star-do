import "./TaskList.css";

import { TaskType } from "../../types";
import Task from "../Task";

interface TaskListProps {
  taskItems: TaskType[];
  handleDeleteTask: (id: string) => void;
}

const TaskList = ({ taskItems, handleDeleteTask }: TaskListProps) => {
  return (
    <>
      <ul className="ul-list">
        {taskItems.map((task) => (
          <Task key={task.id} onDelete={handleDeleteTask} id={task.id}>
            {task.title}
          </Task>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
