import React from 'react'

import Movie from './Movie';

const MovieList = (props) => {

    // const date = new Date(props.releaseDate)

    // console.log(date)

    return (
        <React.Fragment>
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
        </React.Fragment>

    )
}

export default MovieList