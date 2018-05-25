import React from 'react';
const Movielist = (props) => {
    const renderMovies = (movies) => (
        movies ? 
            movies.map((movie, $index) => (
                <div key={$index}>{movie.name}</div>
            )):null
    )

    return (
            <div>
                {renderMovies(props.movies)}
            </div>
    );
}

export default Movielist;