import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { useAppDispatch } from "../../app/hooks";
import AnimatedHeading from "../../components/atoms/animatedHeading/AnimatedHeading";
import PickerEngine from "../../components/containers/pickerEngine/PickerEngine";
import { fetchDogsList } from "../../features/dogs/dogsSlice";

const text = [
  "T",
  "i",
  "m",
  "e",
  "",
  "t",
  "o",
  "",
  "p",
  "i",
  "c",
  "k",
  "",
  "t",
  "h",
  "e",
  "",
  "m",
  "o",
  "v",
  "i",
  "e",
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      height: "calc(100vh - 64px)",
    },
    startBtn: {
      width: "fit-content",
    },
  })
);

const Picker: React.FC = () => {
  const [started, setStarted] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const handleClick = () => {
    dispatch(fetchDogsList());
    setStarted(true);
  };

  return (
    <div className={classes.wrapper}>
      {!started ? (
        <>
          <AnimatedHeading text={text} variant="h2" />
          <Button
            className={classes.startBtn}
            color="primary"
            onClick={handleClick}
            variant="contained"
          >
            Let&apos;s start
          </Button>{" "}
        </>
      ) : (
        <PickerEngine />
      )}
    </div>
  );
};

export default Picker;
