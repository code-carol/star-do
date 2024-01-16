import "./Home.css";
import Star from "../../components/Star";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import TaskList from "../../components/TaskList";
import Footer from "../../components/Footer";
import { TaskType } from "../../types";
import { v4 as uuidV4 } from "uuid";

import { useState, useEffect } from "react";

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
      createdAt: new Date(),
      completed: false,
      completedAt: null,
    };

    setTasks([...tasks, newTask]);
    saveTasks();
    // console.log(newTask);
  };

  // useEffect(() => {
  //   console.log("Updated tasks:", tasks);
  // }, [tasks]);

  const handleDeleteId = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleCompleteId = (id: string) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: true, completedAt: new Date() }
          : task
      )
    );
  };

  const saveTasks = () => {
    localStorage.setItem("TASKS", JSON.stringify(tasks));
  };

  useEffect(() => {
    saveTasks();
  }, [tasks]);

  const loadTasks = (): TaskType[] => {
    const taskJSON = localStorage.getItem("TASKS");
    if (taskJSON === null) return [];
    return JSON.parse(taskJSON);
  };

  useEffect(() => {
    const loadedTasks = loadTasks();
    if (loadedTasks.length > 0) {
      setTasks(loadedTasks);
    }
  }, []);

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
          handleDeleteTask={handleDeleteId}
          handleCompleteTask={handleCompleteId}
        />
      </div>
      <Star left="5%" top="1%" />
      <Star left="70%" top="10%" />
      <Star left="10%" top="28%" />
      <Star left="85%" top="40%" />
      <Star left="30%" top="60%" />
      <Star left="75%" top="80%" />
      <Star left="20%" top="90%" />
      <Footer />
    </>
  );
};

export default Home;
