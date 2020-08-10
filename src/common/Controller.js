import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../screens/login/Login';
import Home from '../screens/home/Home';
import Profile from '../screens/profile/Profile';

export default function Controller(props) {
    const [isLoggedIn, setLoggedIn] = React.useState( window.sessionStorage.getItem('access-token')!=null && window.sessionStorage.getItem('access-token')!=="");
    let timer = setInterval(()=> setLoggedIn(window.sessionStorage.getItem('access-token')!=null && window.sessionStorage.getItem('access-token')!==""), 300);
    return (
        <Switch>
            <Route exact path='/login' render={({ history }, props) => isLoggedIn ? (<Login {...props} history={history} handler={setLoggedIn}/>) :(<Redirect to='/home' />)} />
            <Route exact path='/home' render={({ history }, props) => isLoggedIn ? (<Home {...props} history={history} handler={setLoggedIn}/>) : (<Redirect to='/login' />)} />
            <Route exact path='/profile' render={({ history }, props) => isLoggedIn ? (<Profile {...props} history={history} handler={setLoggedIn}/>) : (<Redirect to='/login' />)} />
        </Switch>
    );
}
