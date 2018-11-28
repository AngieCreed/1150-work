// functional component -The purpose of this component is to take the results and nicely render them

import React from 'react';


const NytResults = (props) => {
    return (
        <div>
            {props.results.map(result => {
                return (
                        <div key={result._id}>
                            <h2>{result.headline.main}</h2>
                            {result.multimedia.length > 1 ? <img alt="article" src={`http://www.nytimes.com/${result.multimedia[1].url}`} /> : ''}
                            <p>
                            {result.snippet}
                            <br />
                            {result.keywords.length > 0 ? ' Keywords: ' : ''}
                            </p>
                            <ul>
                            {result.keywords.map(keyword => <li key={keyword.value}>
                                                                {keyword.value}
                                                            </li>)}
                            </ul>
                            <a href={result.web_url}><button>Read It</button></a>
                    </div>
                )
            })}
            <div>
                <button onClick={e => props.changePage(e, 'down')}>Previous 10</button>
                <button onClick={e => props.changePage(e, 'up')}>Next 10</button>
            </div>
        </div> 
    )
}

export default NytResults

/* By passing props in the parentheses of our component, we can now access the props in our component, which we'll need because we're going to need to get our results information from our parent component */

/* We're taking props.results and calling map on it. Reminder, map essentially takes every item in an array and performs the same action on it. So in this case, map is taking each result, and formatting it in JSX. Things specifically to notice:

unique keys are required when you create multiples of the same item (so when you use map). Luckily we have an id to use here.

We're taking the main headline and putting it in an h2 tag

We use another ternary here to check if there is a more than 1 (AKA at least 2) things in the multimedia property. If there is at least 2, we want to display the image in the 2nd place [1] because that is a "large" size and not the "xl" size of [0]. 

We put the snipper in a <p> tag

We have another ternary to check if there are keywords. If there are we display the string ' Keywords: '. 

Then we use a list, and another map to put every keyword into a list item

Lastly, we make a link to the url of the article. */