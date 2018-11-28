// class component -PARENT component - handling the storing of information here
/*we need to store the information from the user, the search term, the start date and the end date, so we can send these to our API, so we'll need to create those in the state. We also want to capture the results from our API, so we can call that 'results', and we want to keep track of our page number.  */

import React, { Component } from 'react';
import NytResults from './NytResults'

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = "2c5e810583784d87967a5603ab959431";

export default class NytApp extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            search: '',
            startDate: '',
            endDate: '',
            pageNumber: 0,
            results: []
        }
    }


    /* Event Handling Info:
    We need two methods to create, one for when the user submits the form, and one for when they type something into the inputs. Let's start with the form submit method. 

    We're taking in an event, and then calling the fetchResults function. We're also calling event.preventDefault() which if you remember from vanilla JS, just prevents the default action, which in this case is the page refreshing, which we definitely do not want in react. That's really it. Next, let's look at how we can take the input from a user, and use it to set the state correspondingly. 
     */

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        this.setState({pageNumber: 0})
        this.fetchResults()
        event.preventDefault()
    }

    /* Instead of having to grab a value from a specific id like in vanilla JS, if you remember getElementById (if you don't, look here), we don't have to do that here. By passing the event into the method, and they we can grab the name and the value from the event and use them to set state with. */



    /* Fetch Info
    1) First thing, is notice that we are using an arrow function here. In react, this means that we do not have bind this method, because arrow functions do not create their own this, therefore they use their parent's this. If we hadn't used an arrow function here, we would need to bind this function to this in the constructor, in order to be able to use this.setState or this.state. 
    The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

    2) Second, we are creating our url variable based on the baseURL, the key, and also the pageNumber and search which we stored in the state. We'll worry about how to update those variables based on inputs later, for now we know we want to send whatever is in the state in our GET request.

    3) The next two lines are utilizing ternary operators to append the startDate and endDate if they exist to the url that we're going to use in our GET request. If you're not familiar with ternary operators, check out the docs here. Basically, it's a nicer way to write an if, but make sure to check out the docs for more examples.

    4) Next, after we've made sure our URL contains everything we need, we actually do the fetch() GET request to url. When that promise resolves, we're then called .json() on it, and when that promise resolves, we can grab our data that we receive from the API, and save that information to the state. We already created our results array in the state to hold the information we get back, so the set this to our actual results, we can call this.setState({results: data.response.docs}). This sets results in our state, equal to what we've gotten back from our API. In order to the know the structure of the response we are getting, its advisable to do two things. 1) read the docs here of the API to figure out how data should be returned, 2) console log the request before ever trying to set state to know what the actual format of the data that you're getting is.
    */



    fetchResults = () => {
        let url = `${baseURL}?api-key=${key}&page=${this.state.pageNumber}&q=${this.state.search}`
        url = this.state.startDate ? url + `&begin_date=${this.state.startDate}` : url
        url = this.state.endDate ? url + `&end_date=${this.state.endDate}` : url

        fetch(url)
        .then(
            (response) => response.json()
        ).then((data) => {
            this.setState({results: data.response.docs})
        })
    }


    /* To make this form, we actually grabbed the form from the vanilla JS code, and just condensed it down a bit. We also added a couple of things that are specific to react, specifically the onSubmit and onChange. These are named pretty accurately for what they do. onSubmit does whatever you tell it to on submit of the form, and onChange does whatever you tell it to when a change happens in the input. We haven't done anything in these yet, so that'll be our next step.*/

    changePageNumber = (e, direction) => {
        e.preventDefault()
        if (direction === "down") {
            if (this.state.pageNumber > 0) {
                let newPageNumber = this.state.pageNumber - 1
                this.setState({ pageNumber: newPageNumber})
                this.fetchResults();
            }
        }
        if (direction === "up") {
            let newPageNumber = this.state.pageNumber + 1
            this.setState({ pageNumber: newPageNumber})
            this.fetchResults();
        }
    }


    render() {
        return(
            <div className="main">
                <div className="mainDiv">
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <span>Enter a SINGLE search term (required): </span>
                        <input type="text" name="search" onChange={this.handleChange} required /><br />
                        <span>Enter a start date: </span>
                        <input type="date" name="startDate" pattern='[0-9]{8}' onChange={this.handleChange} /><br />
                        <span>Enter an end date:</span>
                        <input type="date" name="endDate" pattern="[0-9]{8}" onChange={this.handleChange} /><br />
                        <button className="submit">Submit search</button>
                        </form>
                        {this.state.results.length > 0 ? <NytResults results={this.state.results} changePage={this.changePageNumber}/> : <div></div>}
                </div>
            </div>
        )
     }
    }

    /* First off notice that we're using another ternary, this time the condition we're checking for is if our results length is greater than zero, AKA do we have any results. If we do have results, then we want to display our NytResults component, if we don't then we can just display an empty div.

    Notice the props that we are passing to the NytResults component. We're setting the prop results equal to this.state.results. So in order to access this prop in the NytResults component, we need to use props.results since that's what we named our prop. If we named our prop nytResults instead of results then we would have to use props.nytResults.*/
