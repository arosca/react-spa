/** @jsx React.DOM */
'use strict';

var React = require('react');

var Header = require('components/header'),
	Footer = require('components/footer');

var ContactPage = React.createClass({
    render: function() {
        return (
            <div>
            	<Header />
                <form onSubmit={this._handleSubmit}>
                	<textarea id="message" placeholder="Message" ref="message"></textarea>
                	<input type="submit" />
                </form>
                <Footer />
            </div>
        );
    },

    _handleSubmit: function(e) {
    	e.preventDefault();
    	var message = this.refs.message.getDOMNode().value.trim();
    	alert(message);
    	this.refs.message.getDOMNode().value = '';
    	return;
    }
});

module.exports = ContactPage;
