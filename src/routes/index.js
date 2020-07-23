import React from 'react';
import {Switch} from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Games from '../pages/Games';
import Tables from '../pages/Tables';
import Comparation from '../pages/Comparation';
export default function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={SignIn}/>
            <Route path="/dashboard" isPrivate={true} component={Dashboard}/>
            <Route path="/tables" isPrivate={true} exact component={Tables}/>
            <Route path="/tables/games/:id" isPrivate={true} component={Games}/>
            <Route path="/tables/check/:id" isPrivate={true} component={Comparation}/>
        </Switch>
    )
}