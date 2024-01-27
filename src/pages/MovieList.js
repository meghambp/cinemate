
import { useEffect, useState } from "react";
import { Card } from "../components";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {

    async function fetchMovies() {
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=4fa28ca02b16eca8b8048b20714ddae6");
      const data = await response.json();
      setMovies(data.results);
    }
    fetchMovies();
  }, []);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {
            movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))
          }
        </div>
      </section>
    </main>
  )
}
