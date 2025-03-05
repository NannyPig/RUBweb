// type MovieItemProps = {
//   title: string;
// };

interface IMovieItemProps {
  title: string;
  image: string;
}

const MovieItem = ({ title, image }: IMovieItemProps) => {
  //   const { title } = props;

  return (
    <div>
      <img src={new URL(`../assets/images/${image}`, import.meta.url).href} />
      <p>{title}</p>
    </div>
  );
};

export default MovieItem;
