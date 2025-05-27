import { useEffect, useState } from "react";

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

  useEffect(() => {
    console.log("selectedGenre Cambia:" + selectedGenre);
    // Filtro e setto i nuovi movies
    moviesList.filter(movie).includes(movie.genre);
  }, [selectedGenre]);

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
      {selectedGenre}
    </div>
  );
}

export default App;
