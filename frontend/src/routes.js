import React from 'react';

import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import Logon from './Pages/Logon';
import NewIncident from './Pages/NewIncident';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path ="/register" component={Register} />

                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident}/>
            </Switch>
        </BrowserRouter>
    )
}