import React, { FC } from "react";

import { DogI } from "../../../features/types";

interface Props {
  item: DogI;
}

/**
  @param item dog info
  @function display dog card
*/

const DogCard: FC<Props> = ({ item }) => (
  <div>
    <img alt="dog" src={item.image.url} />
    <div>
      <h5>{item.bred_for}</h5>
      <p />
    </div>
  </div>
);

export default DogCard;
