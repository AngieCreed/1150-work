/*Now that we have our ReactConceptsApp setup to use NewConcept, we need to 
finish up the logic in this component. We need a way to capture users input, 
and upon pressing a button, using the createConcept method being passed to 
this component. */

import React, { Component } from "react";

export default class NewConcept extends Component {
    create(event) {
        event.preventDefault();
        let text = this.refs.newConceptText.value;
        if (text) {
            this.props.createConcept(text);
            this.refs.newConceptText.value = '';
        }
    }

    render() {
        return (
            <form onSubmit={this.create.bind(this)}>
                <label>New Concept:</label><input type="text" ref="newConceptText"/> <button className="button" type="submit">+</button>
            </form>
        )
    }
}

/*So, in order to avoid using state in this component, since we're handling all state 
changes in the parent component, we need a way to be able to capture input from a form. 
One way to do this is using refs.

Refs cannot be used with functional components, which is why this component isn't one.

React can find the input based on the ref and grab the value of it when the user submits 
this form. Then, in our create method, we are, if there is text, taking that and passing 
it to the createConcept method. Lastly, we're resetting the value to nothing, so that the
 user can add more concepts if desired.

And that's it!! Your Concept List app should now be able to handle adding new concepts! */





