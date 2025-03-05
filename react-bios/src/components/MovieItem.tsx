import React from "react";

type MovieItemProps = {
  title: string;
};

interface IMovieItemProps {
  title: string;
}

const MovieItem = (props: IMovieItemProps) => {
  const { title } = props;

  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default MovieItem;
