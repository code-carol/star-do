import "./Button.css";

interface BtnProps {
  className: string;
  children: string;
}

const Button = ({ className, children }: BtnProps) => {
  return (
    <>
      <button className={className}>{children}</button>
    </>
  );
};

export default Button;
