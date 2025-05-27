import { useState } from "react";

function App() {
  const moviesList = [
    { title: "Inception", genre: "Fantascienza" },
    { title: "Il Padrino", genre: "Thriller" },
    { title: "Titanic", genre: "Romantico" },
    { title: "Batman", genre: "Azione" },
    { title: "Interstellar", genre: "Fantascienza" },
    { title: "Pulp Fiction", genre: "Thriller" },
  ];
  const [movies, setMovies] = useState(moviesList);
  const [selectedGenre, setSelectedGenre] = useState("");

  return (
    <div className="container">
      <select
        value={selectedGenre}
        className="form-select"
        aria-label="Default select example"
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value={""}>Open menu movies</option>

        {movies.map((movie, index) => (
          <option value={movie.genre} key={index}>
            {movie.genre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
