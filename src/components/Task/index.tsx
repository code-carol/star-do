import "./Task.css";

import Button from "../Button";

interface TaskProps {
  children: string;
}

const Task = ({ children }: TaskProps) => {
  return (
    <>
      <div className="container">
        <label className="checkbox-label">
          <input type="checkbox" value="task" />
          <span className="check-box"></span>
          <span className="label">{children}</span>
          <Button className="btn-delete">x</Button>
        </label>
      </div>
    </>
  );
};

export default Task;
