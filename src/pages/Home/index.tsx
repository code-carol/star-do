import "./Home.css";
import Star from "../../components/Star";
import Button from "../../components/Button";
import Task from "../../components/Task";

const Home = () => {
  return (
    <>
      <h1 className="title">star-do</h1>
      <div className="center">
        <Button className="btn-new-task">new task +</Button>
        <Task>study Typescript</Task>
        <Task>study for 30 min</Task>
        <Task>create cute design</Task>
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
