import React from 'react';
import './App.css';
import MovieList from './Components/MovieList';



function App() {

  const dummyMovies = [
    {
      id: 1,
      title: 'Some dummy movies',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18'
    },
    {
      id: 2,
      title: 'Some dummy movies: 2.0',
      openingText: 'This is the opening text of the movie 2.0',
      releaseDate: '2022-05-18'
    }
  ]

  return (
    <React.Fragment>
      <section className="container text-center pt-5" >

        <button className="btn btn-success" >Fetch Movies</button>
      </section>

      <section>
        <MovieList movies={dummyMovies} />
      </section>
    </React.Fragment>
  );
}

export default App;
