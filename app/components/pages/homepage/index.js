/** @jsx React.DOM */
'use strict';

var React = require('react');

var Footer = require('footer');

var HomePage = React.createClass({
    render: function() {
        return (
            <div>
                Homepage
                <Footer />
            </div>
        );
    }
});

module.exports = HomePage;
