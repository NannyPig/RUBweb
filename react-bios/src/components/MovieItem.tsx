// CSS Modules
// import styles from "./MovieItem.module.css";
// type MovieItemProps = {
//   title: string;
// };

import { ReactNode, useState } from "react";
// import { FiCheckCircle } from "react-icons/fi";
// import MyButton from "./MyButton";
// import Counter from "./Counter";
// import { Link } from "react-router-dom";

import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { useFavorites } from "../contexts/FavoritesContext";
import { Link, useNavigate } from "react-router-dom";

interface IMovieItemProps {
  id: number;
  title: string;
  image: string;
}

interface Student {
  firstName: string;
  lastName: string;
  age?: number;
}

const MovieItem = ({ title, image, id }: IMovieItemProps): ReactNode => {
  // const [counter, setCounter] = useState(0);
  // const [history, setHistory] = useState<number[]>([]);

  // const [student, setStudent] = useState<Student>();

  // const currentValue = stateArr[0];
  // const updater = stateArr[1];

  // let counter = 0;
  //   const { title } = props;

  //   return "Hello world";

  console.log("MovieItem render");

  const { favorites, toggleFavorite } = useFavorites();

  const navigate = useNavigate();

  return (
    // <div className={styles.movieItem}>
    <div
      onClick={() => {
        navigate(`/details/${id}`);
      }}
      // to={`/details/${id}`}
      className="rounded-lg shadow-2xl overflow-clip hover:scale-105 relative">
      <img src={new URL(`../assets/images/${image}`, import.meta.url).href} />
      <h1 className="text-3xl font-bold text-center my-4">{title}</h1>
      <button
        onClick={(event) => {
          event.stopPropagation();
          toggleFavorite(title);
        }}
        className="bg-red-600 hover:bg-red-700 rounded-full p-2 absolute top-1 right-2 text-white text-3xl">
        {favorites.includes(title) ? (
          <MdFavorite />
        ) : (
          <MdOutlineFavoriteBorder />
        )}
      </button>
      {/* <p>{counter}</p>
      <p>{history}</p>
      
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
      </MyButton> */}
    </div>
  );
};

export default MovieItem;
