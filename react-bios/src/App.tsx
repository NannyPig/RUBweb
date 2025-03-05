import MovieItem from "./components/MovieItem";
import movies from "./utils/movies.json";

function App() {
  return (
    <div>
      {movies.map((m) => {
        return <MovieItem key={m.id} title={m.title} />;
      })}
    </div>
  );
}

export default App;
