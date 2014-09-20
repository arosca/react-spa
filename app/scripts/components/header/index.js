/** @jsx React.DOM */
'use strict';

var React = require('react');

var Footer = React.createClass({
    render: function() {
        return (
            <header>
                <ul className="nav nav-pills pull-right">
                    <li class="active"><a href="#/">Homepage</a></li>
                    <li><a href="#/about">About</a></li>
                    <li><a href="#/contact">Contact</a></li>
                </ul>
                <h1>React SPA</h1>
            </header>
        );
    }
});

module.exports = Footer;