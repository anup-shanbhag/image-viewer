import React, { Component } from 'react';
import Header from '../../common/header/Header';
import Search from '../../common/search/Search';
import Profile from '../../common/profile/Profile';
import './Home.css';

export default class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Header title="Image Viewer" positionLeft={<Search><Profile/></Search>}>
            </Header>
        );
    }
}