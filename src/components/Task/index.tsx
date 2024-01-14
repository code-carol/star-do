import "./Task.css";

import Button from "../Button";

interface TaskProps {
  children: string;
  onDelete: (id: string) => void;
  id: string;
}

const Task = ({ children, onDelete, id }: TaskProps) => {
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <>
      <li>
        <div className="container">
          <label className="checkbox-label">
            <input type="checkbox" value="task" />
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
