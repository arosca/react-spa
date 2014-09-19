/** @jsx React.DOM */
'use strict';

var React = require('react');

var Footer = React.createClass({
    render: function() {
        return (
            <footer>
                <a href="#/">Homepage</a>
                <a href="#/about">About</a>
                <a href="#/contact">Contact</a>
            </footer>
        );
    }
});

module.exports = Footer;
