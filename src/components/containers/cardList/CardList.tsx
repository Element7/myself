import { DogI } from "../../../features/types";
import DogCard from "../../blocks/dogCard/DogCard";

interface Props {
  items: DogI[];
}

const CardList: React.FC<Props> = ({ items }) => (
  <div>
    {items.map((e, i) => (
      <DogCard item={e} />
    ))}
  </div>
);

export default CardList;
