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
                            key={item.episode_id}
                            title={item.title}
                            openingText={item.opening_crawl}
                            releaseDate={item.release_date}
                        />
                    )
                })
            }
        </React.Fragment>

    )
}

export default MovieList