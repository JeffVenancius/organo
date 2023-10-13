import { ReactElement } from "react";

import "./button.css";

interface ButtonProps {
  children: ReactElement | string;
}

const Button = ({ children }: ButtonProps) => {
  return <button className="button">{children}</button>;
};

export default Button;
