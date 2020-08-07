import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../screens/login/Login';

const Controller = () => (
    <Switch>
        <Route exact path='/' render={({ history }, props) => <Login {...props} history={history} />} />
    </Switch>
)
export default Controller;