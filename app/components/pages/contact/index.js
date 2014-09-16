/** @jsx React.DOM */
'use strict';

var React = require('react');

var ContactPage = React.createClass({
    render: function() {
        return (
            <div>
                Hello Contact Page
                <footer>
                    <a href="#">Homepage</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </footer>
            </div>
        );
    }
});

module.exports = ContactPage;
