import Movie from "./components/Movie";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

const MOVIE_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b8af790abfa74b6dbae4a5f61dbcd725";

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const MoviesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(MOVIE_API);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <AppWrapper>
      <Header setMovies={setMovies} />
      <MoviesWrapper>
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </MoviesWrapper>
      <Footer />
    </AppWrapper>
  );
}

export default App;
