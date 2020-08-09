import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { StylesProvider } from '@material-ui/styles'
import './Header.css';

export default class Header extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="main-container">
                <StylesProvider injectFirst>
                    <AppBar className="page-header">
                        <Toolbar >
                            <Typography className="title-text" variant="h6" noWrap>{this.props.title}</Typography>
                            {this.props.positionLeft}
                        </Toolbar>
                    </AppBar>
                    <div className="page-body">
                        {this.props.children}
                    </div>
                </StylesProvider>
            </div>

            /*<div className="main-container">
                <div className="page-header">
                    <span className="header-text">{this.props.title}</span>
                    {this.props.headerElements}
                </div>
                <div className="page-body">
                    {this.props.children}
                </div>
            </div>*/
        );
    }
}