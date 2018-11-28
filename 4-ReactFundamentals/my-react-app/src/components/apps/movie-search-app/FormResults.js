// where we will display the results from our API query
// this is a functional component

// put the props we are sending to this component - const FormResults = ({results}) =>

import React from "react";
import styled from 'styled-components';

const MovieList = styled.ul`
    list-style-type: none;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    
`
const MovieItem = styled.li`
    background-color: limegreen;
    padding: 5px;
    margin: 5px;
    text-align: center;

`

const FormResults = ({results}) => {
    const link = "https://image.tmdb.org/t/p/w300";

/*We're going to use map again to take our results and turn them each into a list item with all the information we want. There is a way to grab movie posters for each movie with The Movie Database API, and we're going to use it to display movie posters with our movies! You can read about it in the docs here. We're going to take our results and map them into list items with the following things: 1. unique keys 2. an img tag with the movie poster URL 3. the name of the movie 4. the release date */

    const resultsFormatted = results.map((element, index) =>
        <MovieItem key={index}>
            <img src={results[index].poster_path === null ? "http://via.placeholder.com/640x960" : `${link}${results[index].poster_path}`} alt={`${results[index].title} poster`} className="resultPoster" />
            <div>
                <p>{results[index].title}</p>
                <p>{results[index].release_date}</p>
            </div>
        </MovieItem>
    )
    return (
        <MovieList id="results">
            {resultsFormatted}
        </MovieList>
    )
}

export default FormResults;