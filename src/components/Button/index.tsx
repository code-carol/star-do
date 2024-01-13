import "./Button.css";

interface BtnProps {
  className: string;
  children: string;
  handleOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ className, children, handleOnClick }: BtnProps) => {
  return (
    <>
      <button className={className} onClick={handleOnClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
