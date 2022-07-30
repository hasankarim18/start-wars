import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie'
import { Card } from 'reactstrap'



function App() {

  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)



  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('https://swapi.dev/api/films/')
      if (!response.ok) {
        throw new Error('Something went wrong here!')
      }
      const data = await response.json()
      const getData = () => {
        setMovies(data.results)
        setIsLoading(false)

      }
      return getData()
    } catch (error) {
      setError(error.message)
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchMovieHandler()
  }, [fetchMovieHandler])

  let content = <p> Found No Movies </p>

  if (movies.length > 0) {
    content = <MovieList movies={movies} />
  }

  if (error) {
    content = <p>{error}</p>
  }

  if (isLoading) {
    content = <p>Loading ... </p>
  }

  return (
    <React.Fragment>
      <section className="container p-2" >
        <div className="row justify-content-center">
          <div style={{ borderRadius: "10px" }} className="col-12 col-sm-10 col-md-8 bg-light p-2 " >

            <AddMovie />

          </div>
        </div>

      </section>
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

        <div className="container mt-2">
          <div className="row justify-content-center">
            <div style={{ borderRadius: "10px" }} className="col-12 col-sm-10 col-md-8 bg-light text-center">

              {content}

            </div>
          </div>
        </div>


      </section>
    </React.Fragment >
  );
}

export default App;
