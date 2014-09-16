/** @jsx React.DOM */
'use strict';

var React = require('react');

var HomePage = React.createClass({
    linkClick: function(e) {

    },
    render: function() {
        return (
            <div>
                Hello Reach SPA Homepage
                <footer>
                    <a href="#">Homepage</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </footer>
            </div>
        );
    }
});

module.exports = HomePage;
