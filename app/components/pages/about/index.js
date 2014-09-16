/** @jsx React.DOM */
'use strict';

var React = require('react');

var Footer = require('footer');

var AboutPage = React.createClass({
    render: function() {
        return (
            <div>
                About
                <Footer />
            </div>
        );
    }
});

module.exports = AboutPage;
