import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import NewTask from '../views/NewTask';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/task" exact component={NewTask}/>
                <Route path="/task/:id" exact component={NewTask}/>
            </Switch>
        </BrowserRouter>
    );
}