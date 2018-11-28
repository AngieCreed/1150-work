// class component - the parent component
/*In this part, we're going to lay out our parent component and get things set up for moving forward. 
The first thing we're going to add to our ReactConceptsApp is going to be state so that we can incorporate 
the concepts that we added as our array of data in the last module.
We're also going to import a package called lodash  */

import React, { Component } from 'react';
import _ from 'lodash';
import ConceptList from './ConceptList';
import { concepts } from './concepts';
import NewConcept from './NewConcept';


export default class ReactConceptsApp extends Component {

    constructor() {
        super();
        this.state = { concepts: concepts };
        
    }

    /* Remember that you can run console.log(this.state.concepts) to see what is happening in the state*/
    /* Remember that you can run console.log(this.state.concepts) to see what is happening in the state*/
/* Now, we're calling a custom function called toggleConcept, but we need to actually define what toggleConcept 
does. Our objective is to take the concepts and compare them against the concept list, using the lodash find method.

This find method compares a collection to a second thing (in this case concepts) and returns the first thing it finds 
truthy for. Then, we need it to set concept.done to the opposite of what it currently is, essentially toggling it. Yea, 
lodash is sweet.

Finally, we need to set state back to include the updated toggle on done. To see for yourself, what concepts looks like
 when it comes back, feel free to add a console.log at the first line of the method. */

    toggleConcept(concepts) {
        let concept = _.find(this.state.concepts, concepts);
        concept.done = !concept.done;
        this.setState({concepts: this.state.concepts});
    }

    /*Our last step is to figure out how to create new concepts to add to our app.

The first thing we're going to do is create a new component called NewConcept.js 
in our concept-list-app folder. This is where we'll handle the input and pass 
information back up to our parent component ReactConceptApp 
to handle adding it. This will need an input at the very least. Before we focus 
on our child component, let's figure out the logic we'll need in our parent component first.

createConcept
The first thing we'll need is a method to be able to create a new concept. Let's 
create this new method in our ReactConceptsApp conmponent underneath our constructor. 
All we're going to need to do is push the new concept to our state, and call setState() 
to set our new state. */

/*Then, we're going to need to render our NewConcept component, and pass it the method we 
just created so that it can use it. So in our render() method, above our general concept h2, 
we're going to write the following. 

As a reminder, when methods need access to things like setState, they cannot be written as arrow 
functions, and also they must be bound to the correct this, so that they can access setState.

Now, the only thing we have left to do is import NewConcept at the top of our file.*/

    createConcept(text) {
        this.state.concepts.push({
            text,
            done: false
        })
        this.setState({concepts: this.state.concepts})
    }

    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <h1>Concept List App</h1>
                    <p>Use the list below to toggle concepts that you do or do not understand. Not that this will update when you refresh the page.</p>
                    <NewConcept createConcept={this.createConcept.bind(this)} />
                    <h2>General Concepts</h2>
                    <ConceptList concepts= {this.state.concepts} toggle={this.toggleConcept.bind(this)} />
                   
                </div>
            </div>
        )
    }
}