import { FC } from "react";

enum BtnType {
  button = "button",
  submit = "submit",
  reset = "reset",
}
interface Props {
  text: string;
  onClick: () => void;
  type: BtnType;
}
const Button: FC<Props> = ({ text, onClick, type = BtnType.button }) => (
  <button onClick={onClick} type={type}>
    {text}
  </button>
);
export default Button;
