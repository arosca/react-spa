/** @jsx React.DOM */
'use strict';

var React = require('react');

var Footer = require('components/footer');

var ContactPage = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Contact</h1>
                <Footer />
            </div>
        );
    }
});

module.exports = ContactPage;
