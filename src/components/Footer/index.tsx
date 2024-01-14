import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        2024 Ⓒ
        <Link
          to="https://github.com/code-carol"
          target="_blank"
          className="link-footer"
        >
          code_carol
        </Link>
      </div>
    </>
  );
};
export default Footer;
