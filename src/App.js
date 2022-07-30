import React, { useState } from 'react';
import './App.css';
import MovieList from './Components/MovieList';



function App() {

  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)


  async function fetchMovieHandler() {
    setIsLoading(true)
    setError(null)
    try {

      if (!response.ok) {
        console.log(error)
        throw new Error('Something went wrong here!')
      }

      const response = await fetch('https://swapi.dev/api/films/')
      const data = await response.json()
      const getData = () => {
        setMovies(data.results)
        setIsLoading(false)
        console.log(data.results)

      }
      return getData()
    } catch (error) {
      setError(error.message)
    }

  }

  return (
    <React.Fragment>
      <section className="container text-center pt-5" >
        <div className="row justify-content-center ">
          <div className=" col-12 col-sm-10 col-md-8 bg-light">
            <div className="pt-2 pb-2" >
              <button onClick={fetchMovieHandler} className="btn btn-success" >Fetch Movies</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        {!isLoading && movies.length > 0 && <MovieList movies={movies} />}
        <div className="container mt-2">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 bg-light text-center">
              {!isLoading && movies.length === 0 && <p> No movies found </p>}
              {isLoading && <p>Loading....</p>}

              {!isLoading && error ? <p>{error}</p> : ''}

            </div>
          </div>
        </div>


      </section>
    </React.Fragment>
  );
}

export default App;
