import MovieItem from "./components/MovieItem";
import movies from "./utils/movies.json";

function App() {
  return (
    <div>
      {movies.map((m) => {
        return <MovieItem key={m.id} title={m.title} image={m.poster_path} />;
      })}
    </div>
  );
}

export default App;
