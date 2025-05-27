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

      <div className="row mt-3 ">
        {movies.map((movie, index) => (
          <div className="col-4" key={index}>
            <div className="card mb-3 ">
              <div className="card-header ">{movie.title}</div>
              <div className="card-body">{movie.genre}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
