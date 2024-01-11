import "./Star.css";

interface StarProps {
  left: string;
  top: string;
}

const Star = ({ left, top }: StarProps) => {
  return (
    <>
      <img
        src="./public/star.svg"
        alt="yellow star"
        className="star"
        width="50px"
        height="50px"
        style={{ position: "absolute", left, top }}
      />
    </>
  );
};

export default Star;
