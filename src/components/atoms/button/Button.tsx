import { FC } from "react"
interface Props {
  text: string;
  onClick: () => void;
}
 
 const Button: FC<Props> = ({text, onClick}) => {
  return (
   <button onClick={onClick}>{text}</button>
  )
}
export default Button