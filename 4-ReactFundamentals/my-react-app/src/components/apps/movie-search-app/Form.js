/* his component will be where we accept user input, query the API based on that user input, and then send the results to another component to display.*/
// Class Component


import Styled from 'styled-components';
import React, { Component } from "react";
import FormResults from './FormResults';

const Search = Styled.input`
    width: 250px;
    margin: 10px 0 10px 0;
    color: purple;
    padding-left: 10px;
`

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleKeyUp = (e) => {
        // capture user's input from event

        // use user's input to hit an api to get movies

        //store the results of our api query in our state

        //we also need to handle errors

        const key = "43bea8c9ea4a458e3fb13120312d7e4e";

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${e.target.value}&page=1&include_adult=false`)
            .then(response => {
                if (response.status !== 200) {
                    console.log("Error: " + response.status);
                    return;
                }
                response.json().then(data => {
                    const results = data.results;
                    this.setState({results});
                })
            })

            .catch(err => {
                console.log("Fetch Error:-S", err);
            })
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit} id="form">
                <Search onKeyUp={this.handleKeyUp} 
                id="searchInput" 
                className="searchBar" 
                type="text" 
                placeholder="Search a movie" required />

                {this.state.results === [] ? 
                (<div />) : (<FormResults results={this.state.results} />
                )}
            </form>
        )
    }
}