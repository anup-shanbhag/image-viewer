import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="main-container">
                <div className="page-header">
                    <span className="header-text">{this.props.title}</span>
                    {this.props.headerElements}
                </div>
                <div className="page-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}