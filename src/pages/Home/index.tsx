import "./Home.css";
import Star from "../../components/Star";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import TaskList from "../../components/TaskList";
import { TaskType } from "../../types";
import { v4 as uuidV4 } from "uuid";

import { useState } from "react";

const Home = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleAddTask = (inputValue: string) => {
    const newTask = {
      id: uuidV4(),
      title: inputValue,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <>
      {openModal && <Modal closeModal={setOpenModal} addTask={handleAddTask} />}
      <h1 className="title">star-do</h1>
      <div className="center">
        <Button
          className="btn-new-task"
          handleOnClick={handleOpenModal}
          type="button"
        >
          new task +
        </Button>
        <TaskList
          taskItems={tasks}
          handleDeleteTask={(id) => {
            setTasks(tasks.filter((task) => task.id !== id));
          }}
        />
      </div>
      <Star left="5%" top="1%" />
      <Star left="70%" top="10%" />
      <Star left="10%" top="28%" />
      <Star left="85%" top="40%" />
      <Star left="30%" top="60%" />
      <Star left="75%" top="80%" />
      <Star left="20%" top="90%" />
    </>
  );
};

export default Home;
