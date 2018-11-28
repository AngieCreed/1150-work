// child component - mostly just needs to render every concept

/* We need this child component to run a function, so we pass it 
in props to display the concepts for us. We can start with framing 
our component. We know we're going to pass it a concept, and a method 
to change whether or not the list item is clicked. Let's call this toggle.

done method
Next we need some method for our list items to call when they're clicked. We 
need to also call the toggle method that we're passing as props. We need this 
to work onClick and for it to run the toggle method.

Go ahead and put this method in your Concept component. The console log is there 
so we can eventually see what we are running.

render
Lastly, we just need to render our concept. If the concept is done, we want to show 
it struck through, and if it isn't, we don't. Then we need a thing that users can 
click that will toggle our done method. Go ahead and type out the rest of the component below:*/

import React from "react";

const Concept = ({concept, toggle}) => {
    const done = (event) => {
        event.preventDefault();
        toggle(concept);
        console.log("Props:", concept, toggle);
     }
    return (
        <li>
        {concept.done ? (<del>{concept.text}</del>) : (concept.text)} <a href="" onClick={done}>✓</a>
        </li>
    );
}


export default Concept;