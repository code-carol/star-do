import "./Task.css";

import Button from "../Button";

interface TaskProps {
  children: string;
  id: string;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
}

const Task = ({ children, id, onDelete, onComplete }: TaskProps) => {
  const handleDelete = () => {
    onDelete(id);
  };

  const handleComplete = () => {
    onComplete(id);
  };
  return (
    <>
      <li>
        <div className="container">
          <label className="checkbox-label">
            <input type="checkbox" value="task" onChange={handleComplete} />
            <span className="check-box"></span>
            <span className="label">{children}</span>
            <Button
              className="btn-delete"
              handleOnClick={handleDelete}
              type="button"
            >
              x
            </Button>
          </label>
        </div>
      </li>
    </>
  );
};

export default Task;
