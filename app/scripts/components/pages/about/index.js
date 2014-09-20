/** @jsx React.DOM */
'use strict';

var React = require('react');

var Footer = require('components/footer'),
    Store = require('store');

var AboutPage = React.createClass({
    getInitialState: function() {
        return Store.getContent();
    },

    componentDidMount: function() {
        this.setState(Store.getContent());
        Store.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        Store.removeChangeListener(this._onChange);
    },

    render: function() {
        return (
            <div>
                <h1>About</h1>
                <p>{this.state.content}</p>
                <Footer />
            </div>
        );
    },

    _onChange: function() {
        this.setState(Store.getContent());
    }
});

module.exports = AboutPage;
