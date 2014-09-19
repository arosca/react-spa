/** @jsx React.DOM */
'use strict';

var React = require('react');

var Footer = require('components/footer'),
    Store = require('store'),
    Actions = require('actions');

var HomePage = React.createClass({
    getInitialState: function() {
        return Store.getCount();
    },

    componentDidMount: function() {
        this.setState(Store.getCount());
        Store.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        Store.removeChangeListener(this._onChange);
    },

    render: function() {
        return (
            <div>
                <header>Homepage</header>
                <button onClick={this._clickHandler}>Click me</button>
                <p>Clicks: {this.state.count}</p>
                <Footer />
            </div>
        );
    },

    _clickHandler: function() {
        Actions.increment();
    },

    _onChange: function() {
        this.setState(Store.getCount());
    }
});

module.exports = HomePage;
