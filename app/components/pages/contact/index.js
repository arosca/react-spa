/** @jsx React.DOM */
'use strict';

var React = require('react');

var Footer = require('footer');

var ContactPage = React.createClass({
    render: function() {
        return (
            <div>
                Contact
                <Footer />
            </div>
        );
    }
});

module.exports = ContactPage;
