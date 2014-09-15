/** @jsx React.DOM */
'use strict';

var React = require('react');

var App = React.createClass({
    render: function() {
        return (<div>Hello {this.props.name}</div>);
    }
});

React.renderComponent(<App name="World" />, document.body);
