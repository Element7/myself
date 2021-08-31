import React, { FC } from "react";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import CardList from "../cardList/CardList";

interface Props {}

/**
@function Engine dog cards picker 
*/

const PickerEngine: FC<Props> = (props) => {
  const dogList = useAppSelector((state) => state.dogs.dogs);

  return (
    <div>
      <CardList items={dogList} />
    </div>
  );
};

export default PickerEngine;
