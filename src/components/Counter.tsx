import React, { Dispatch, SetStateAction } from "react";
import MyButton from "./MyButton";

interface CounterProps {
  //   counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
}

const Counter = ({ setCounter }: CounterProps) => {
  console.log("Counter render");

  return (
    <MyButton
      onClick={() => {
        // const newCounter = counter + 1;
        setCounter((currentState) => currentState + 1);
        // console.log(newCounter);
      }}>
      Verhogen
    </MyButton>
  );
};

export default Counter;
