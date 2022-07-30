import React from 'react'

import Movie from './Movie';

const MovieList = (props) => {

    // const date = new Date(props.releaseDate)

    // console.log(date)

    //  console.log(props.openingText)
    return (
        <div className="container pt-3" >
            <div className="row justify-content-center">
                <div className="col-12 col-sm-10 col-md-8">
                    {
                        props.movies.map((item) => {
                            return (
                                <Movie
                                    key={item.id}
                                    title={item.title}
                                    openingText={item.openingText}
                                    releaseDate={item.releaseDate}
                                />
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default MovieList