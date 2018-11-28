import React, { Component } from 'react';

export default class TimerApp extends Component {
    //The first thing we need to do is to set a state for this time that we want to display and update when it changes
    constructor(props) {
        super(props);
        this.state = {secondsElapsed: 0};
    }

      /* 1. Create a method to add 1 to secondsElapsed
       2. Create something that will call the above method every 1 second or 1000 ms

        For part 1, we can just take in the previous state, which is really only the secondsElapsed, and add one to it. Add the following code to your class, underneath your constructor. Remember, that state is an object, so when we use previous state here, we are getting the secondsElapsed specifically and adding one to it.*/

    tick() {
        this.setState((prevState) => ({
            secondsElapsed: prevState.secondsElapsed + 1
        }));
    }   

/* We really want this to start counting after everything is good to go on the page, so we can setup a way to call this method every second within componentDidMount(). We can use setInterval(), a JavaScript method that repeats a given function at every given time-interval. */

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
        console.log(this.interval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        console.log(this.interval);
    }




    //we now want to display the seconds elapsed in our render method - we can call it from the state - need to use this to access the state
    
    render() {
        return (
            <div>
                <h1 className="section-title">React Timer</h1>
                <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
            </div>
        );
    }

}