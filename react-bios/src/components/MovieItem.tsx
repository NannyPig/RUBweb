// CSS Modules
// import styles from "./MovieItem.module.css";
// type MovieItemProps = {
//   title: string;
// };

import { ReactNode, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import MyButton from "./MyButton";
import Counter from "./Counter";

interface IMovieItemProps {
  title: string;
  image: string;
}

interface Student {
  firstName: string;
  lastName: string;
  age?: number;
}

const MovieItem = ({ title, image }: IMovieItemProps): ReactNode => {
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState<number[]>([]);

  const [student, setStudent] = useState<Student>();

  // const currentValue = stateArr[0];
  // const updater = stateArr[1];

  // let counter = 0;
  //   const { title } = props;

  //   return "Hello world";

  console.log("MovieItem render");

  return (
    // <div className={styles.movieItem}>
    <div className="rounded-lg shadow-2xl overflow-clip hover:scale-105">
      <img src={new URL(`../assets/images/${image}`, import.meta.url).href} />
      <h1 className="text-3xl font-bold text-center">{title}</h1>
      <p>{counter}</p>
      <p>{history}</p>
      {/* Conditioneel renderen */}
      {student ? <p>{`${student.firstName} ${student.lastName}`}</p> : null}

      {student && <p>{`${student.firstName} ${student.lastName}`}</p>}

      <Counter setCounter={setCounter} />
      <MyButton
        onClick={() => {
          setHistory([...history, counter]);
        }}>
        Toevoegen
      </MyButton>
      <MyButton
        onClick={() => {
          setStudent({ firstName: "John", lastName: "Doe" });
        }}>
        Pas gegevens aan
      </MyButton>
      <MyButton>
        <div className="flex gap-2 items-center">
          <FiCheckCircle />
          <p>Ga naar details</p>
        </div>
      </MyButton>
    </div>
  );
};

export default MovieItem;
