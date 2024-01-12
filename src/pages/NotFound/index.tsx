import { Link } from "react-router-dom";

import "./NotFound.css";
import Star from "../../components/Star";

const NotFound = () => {
  return (
    <>
      <div className="center middle-page">
        <img
          src="./public/sad-star.svg"
          alt="sad yellow star"
          className="sad-star"
          width="250px"
          height="250px"
        />
        <h1 className="not-found">Page Not Found</h1>
        <Link to="/" className="link-home">
          return to home
        </Link>
      </div>
      <Star left="55%" top="1%" />
      <Star left="5%" top="10%" />
      <Star left="75%" top="20%" />
      <Star left="10%" top="46%" />
      <Star left="65%" top="65%" />
      <Star left="20%" top="80%" />
      <Star left="80%" top="90%" />
      <div className="hidden-stars">
        <Star left="25%" top="4%" />
        <Star left="87%" top="6%" />
        <Star left="30%" top="25%" />
        <Star left="85%" top="40%" />
        <Star left="37%" top="58%" />
        <Star left="94%" top="70%" />
        <Star left="1%" top="93%" />
      </div>
    </>
  );
};

export default NotFound;
