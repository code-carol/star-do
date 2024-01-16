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
  const [tasks, setTasks] = useState<TaskType[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // useEffect(() => {
  //   try {
  //     setTasks(JSON.parse(localStorage.getItem("TASKS") || ""));
  //   } catch (error) {
  //     console.error("Error loading tasks from localStorage:", error);
  //   }
  // }, []);

  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Error saving tasks to localStorage:", error);
    }
  }, [tasks]);

  // useEffect(() => {
  //   console.log("Updated tasks:", tasks);
  // }, [tasks]);

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
    // console.log(newTask);
  };

  const handleDeleteId = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleCompleteId = (id: string) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed, // Toggle the completed status
              completedAt: task.completed ? null : new Date(), // Set or unset the completedAt date
            }
          : task
      )
    );
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
