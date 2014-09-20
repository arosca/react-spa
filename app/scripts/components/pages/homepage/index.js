/** @jsx React.DOM */
'use strict';

var React = require('react');

var Header = require('components/header'),
    Footer = require('components/footer'),
    Store = require('store'),
    Actions = require('actions');

var HomePage = React.createClass({
    getInitialState: function() {
        return Store.getCount();
    },

    componentDidMount: function() {
        Store.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        Store.removeChangeListener(this._onChange);
    },

    render: function() {
        return (
            <div>
                <Header />

                <div className="jumbotron">
                    <h1>'Allo, 'Allo!</h1>
                    <p className="lead">This is how state works</p>
                    <p><a className="btn btn-lg btn-success" href="#" onClick={this._clickHandler}>Clicked me {this.state.count} times!</a></p>
                </div>

                <div className="row marketing">
                    <div className="col-lg-6">

                        <h4>Sass</h4>
                        <p>Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.</p>

                        <h4>Bootstrap</h4>
                        <p>Sleek, intuitive, and powerful mobile first front-end framework for faster and easier web development.</p>
                        <h4>Modernizr</h4>
                        <p>Modernizr is an open-source JavaScript library that helps you build the next generation of HTML5 and CSS3-powered websites.</p>

                    </div>
                </div>

                <Footer />
            </div>
        );
    },

    _clickHandler: function(e) {
        e.preventDefault();
        Actions.increment();
    },

    _onChange: function() {
        this.setState(Store.getCount());
    }
});

module.exports = HomePage;
