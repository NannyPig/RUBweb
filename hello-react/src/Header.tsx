import React from "react";
import FancyComponent from "./Component";
import obj, { firstFn } from "./utils";

// Typen van objecten
const newObj = {
  title: "Web 3",
  ects: 6,
};

type HeaderProps = {
  title: string;
  isDone: boolean;
  count?: number;
};

type StringOrNumber = string | number;

interface IHeaderProps {
  title: string;
  isDone: boolean;
  count?: number;
}

const Header = ({ title, isDone }: IHeaderProps) => {
  firstFn();

  //   const { title, isDone } = props;

  console.log(obj);

  return (
    <div>
      <h1>Header</h1>
      <p>{title}</p>
      <p>{isDone}</p>
      <FancyComponent />
    </div>
  );
};

export default Header;
