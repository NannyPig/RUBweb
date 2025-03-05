// CSS Modules
// import styles from "./MovieItem.module.css";
// type MovieItemProps = {
//   title: string;
// };

import { ReactNode } from "react";
import { FiCheckCircle } from "react-icons/fi";
import MyButton from "./MyButton";

interface IMovieItemProps {
  title: string;
  image: string;
}

const MovieItem = ({ title, image }: IMovieItemProps): ReactNode => {
  //   const { title } = props;

  //   return "Hello world";

  return (
    // <div className={styles.movieItem}>
    <div className="rounded-lg shadow-2xl overflow-clip hover:scale-105">
      <img src={new URL(`../assets/images/${image}`, import.meta.url).href} />
      <h1 className="text-3xl font-bold text-center">{title}</h1>
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
