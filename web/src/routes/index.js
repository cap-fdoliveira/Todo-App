import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import NewTask from '../views/NewTask';
import Qrcode from '../views/QrCode';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/task" exact component={NewTask}/>
                <Route path="/task/:id" component={NewTask}/>
                <Route path="/qrcode" component={Qrcode} />
            </Switch>
        </BrowserRouter>
    );
}