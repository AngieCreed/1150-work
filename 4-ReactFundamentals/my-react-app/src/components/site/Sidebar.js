import React from 'react'


import {
    Route,
    Link,
    Switch
}   from 'react-router-dom'

import Home from './Home'
import Resources from './Resources'
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo';
import JSXRules from '../concepts/JSXRules';
import ClassComponentDemo from '../concepts/ClassComponentDemo';
import PropsDemo from"../concepts/PropsDemo";
import TimePiecesApp from '../apps/timer-apps/TimePiecesApp';
import MovieSearchApp from '../apps/movie-search-app/MovieApp';
import NytApp from '../apps/nyt-app/NytApp';
import ReactConceptsApp from '../apps/concept-list-app/ReactConceptsApp';
import FriendListApp from '../apps/Friend-List-App/FriendListApp';
import FriendList from '../apps/Friend-List-App/FriendList';


const Sidebar = () => (

    <div className="sidebar">
        <div className="sidebar-list-styling">
            <ul className="sidebar-list list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/rationale">Rationale</Link></li>
                <li><Link to="/functionalcomponent">Functional Component</Link></li>
                <li><Link to="/jsxrules">JSXRules</Link></li>
                <li><Link to="/ClassComponentDemo">Class Component Demo</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/propsdemo">Props Demo</Link></li>
                <li><Link to="/timer">Timers</Link></li>
                <li><Link to="/movie">Movie Search App</Link></li>
                <li><Link to="/nyt">New York Times App</Link></li>
                <li><Link to="/reactconceptlist">React Concepts Checklist</Link></li>
                <li><Link to="/friendlistapp">Friend Lists App</Link></li>
       
            </ul>
        </div>
        <div className="sidebar-route">
            <Switch>
                <Route exact path="/home"><Home /></Route>
                <Route exact path="/resources"><Resources /></Route>
                <Route exact path="/"><Home /></Route>
                <Route exact path ="/FunctionalComponent"><FunctionalComponentDemo /></Route>
                <Route exact path ="/ClassComponentDemo"><ClassComponentDemo /></Route>
                <Route exact path="/JSxRules"><JSXRules /></Route>
                <Route exact path="/propsdemo"><PropsDemo  /></Route>
                <Route exact path="/timer"><TimePiecesApp/></Route>
                <Route exact path="/movie"><MovieSearchApp /></Route>
                <Route exact path="/nyt"><NytApp /></Route>
                <Route exact path="/reactconceptlist"><ReactConceptsApp /></Route>
                <Route exact path="/friendlistapp"><FriendListApp /></Route>
                <Route exact path="/friendlist"><FriendList /></Route>
            </Switch>
        </div>
    </div>

)

export default Sidebar;