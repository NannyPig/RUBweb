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

export enum CompassDirection {
  NORTH = "Noorden",
  EAST = "Oosten",
  WEST = "Westen",
  SOUTH = "Zuiden",
}

// enum OrderStatus {
//   NEW = "new",
//   CONFIRMED = "confirmed",
//   SHIPPED = "shipped",
// }

interface IHeaderProps {
  title: string;
  isDone: boolean;
  count?: number;
  anotherNumb: 5 | 6 | 7 | 8;
  status: "new" | "confirmed" | "shipped";
  direction: CompassDirection;
}

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  print: () => string;
}

// type UpdatePerson = Partial<Person>;

// interface Student extends Person {
//   studentNumber: string;
// }

type Student = {
  studentNumber: string;
} & Person;

// Type merging
// type Student = {
//   studentNumber: string;
// } & Person;

const Header = ({ title, isDone, count = 5 }: IHeaderProps) => {
  firstFn();

  //   const { title, isDone } = props;

  console.log(obj);

  return (
    <div>
      <h1>Header</h1>
      <p>{title}</p>
      <p>{isDone}</p>
      <p>{count}</p>
      <FancyComponent />
    </div>
  );
};

export default Header;
