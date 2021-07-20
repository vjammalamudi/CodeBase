import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Nav from '@components/Nav';
import TaskOne from '@components/taskone/TaskOne';
import TaskTwo from '@components/tasktwo/TaskTwo';
import axios from 'axios'

function App () {

    return (
        <Router>
            <Nav />
            <Switch >
                <Route path = "/" exact component = {TaskOne} />
                <Route path = "/task-two" component = {TaskTwo} />
            </Switch>
        </Router>
    )
}

export default App;



