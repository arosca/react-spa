/** @jsx React.DOM */
'use strict';

var React = require('react'),

    Router = require('react-router'),
    Routes = Router.Routes,
    Route = Router.Route;

var HomePage = require('components/pages/homepage'),
    AboutPage = require('components/pages/about'),
    ContactPage = require('components/pages/contact');

var App = React.createClass({

    render: function() {
        return (
            <Routes>
                <Route path="/" handler={HomePage}>
                </Route>
                <Route path="about" handler={AboutPage}>
                </Route>
                <Route path="contact" handler={ContactPage}>
                </Route>
            </Routes>
        );
    }

});

React.renderComponent(<App />, document.querySelector('#spa'));
