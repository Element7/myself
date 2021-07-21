/* eslint-disable react/button-has-type */
import { FC } from "react";

interface Props {
  text: string;
  onClick: () => void;
  type: "button" | "submit" | "reset" | undefined;
}
const Button: FC<Props> = ({ text, onClick, type }) => (
  <button onClick={onClick} type={type}>
    {text}
  </button>
);
export default Button;
