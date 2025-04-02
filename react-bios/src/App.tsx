import { Link } from "react-router-dom";
import MovieItem from "./components/MovieItem";
import MyButton from "./components/MyButton";
import movies from "./utils/movies.json";
// import "./App.css";

function App() {
  return (
    <>
      <Link to="/favorites">Ga naar favorieten</Link>
      <MyButton>Ga naar Home</MyButton>

      <div className="grid md:grid-cols-3 gap-4 p-4">
        {movies.map((m) => {
          return (
            <MovieItem
              key={m.id}
              id={m.id}
              title={m.title}
              image={m.poster_path}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
