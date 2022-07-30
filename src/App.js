import React, { useState } from 'react';
import './App.css';
import MovieList from './Components/MovieList';



function App() {

  const [movies, setMovies] = useState([])


  const fetchMovieHandler = () => {
    fetch('https://swapi.dev/api/films/')
      .then(res => {
        return res.json()
      })
      .then(data => {

        setMovies(data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <React.Fragment>
      <section className="container text-center pt-5" >

        <button onClick={fetchMovieHandler} className="btn btn-success" >Fetch Movies</button>
      </section>

      <section>
        <MovieList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
