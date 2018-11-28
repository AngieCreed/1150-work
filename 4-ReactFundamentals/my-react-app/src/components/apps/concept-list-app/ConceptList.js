// this is a functional component - child component

import React from 'react';
import _ from 'lodash';
import Concept from './Concept';

/*Instead of trying to put all the logic in one component, we can create a new component 
to handle displaying all of the concepts. Since we're passing it a whole bunch of concepts, 
we want to create a List component first.

Go to ConceptList.js in our concept-list-app folder. We'll be passing this component props, 
and don't need it to access any methods relating to state or anything, so we can make this a 
functional component. 

List components in general are a pretty common pattern in React. This is where you do any 
calculations on the entire list, and then render each individual part of the list through 
a child component, usually through a map or a loop.

After we get it set up we're going to need to take our concepts and format them in a way where 
they can be passed to a child component to render individually. By using lodash, we can sort 
them by whether or not the task is done so that the list is more useful to the user. We also 
want to create individual components for each concept. 

Notice the '_' gives us access to an assortment of lodash methods. In this case we're using sortBy. 
We're going to sort by the concepts that are marked 'done'. This will act as a container for the ones 
that are crossed off, and help us, as we map, to put them on the bottom.

Important reminder, in React you need unique keys when children, so here we need unique keys.

If we just pass in concept, react will throw this error Encountered two children with the same 
key, [object Object]. Keys should be unique so that components maintain their identity across 
updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is 
unsupported and could change in a future version.*/

const ConceptList = ({concepts, toggle}) => {
    let conceptsSorted = _.sortBy(concepts, 'done');
    let items = conceptsSorted.map( (concept) =>
        <Concept concept={concept} key={concept.text} toggle={toggle}/>
    )

    return (
        <ul>
            {items}
        </ul>
    )
}

export default ConceptList;

