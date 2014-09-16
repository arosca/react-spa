/** @jsx React.DOM */
'use strict';

var React = require('react');

var AboutPage = React.createClass({
    render: function() {
        return (
            <div>
                Hello Reach SPA About
                <footer>
                    <a href="#">Homepage</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </footer>
            </div>
        );
    }
});

module.exports = AboutPage;
