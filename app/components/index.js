/** @jsx React.DOM */
'use strict';

var React = require('react'),
    Router = require('react-router'),
    Routes = Router.Routes,
    Route = Router.Route;

var HomePage = require('pages/homepage/'),
    AboutPage = require('pages/about'),
    ContactPage = require('pages/contact');

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


    // render: function() {
    //     return this.state.page;
    // }

    // render: function() {
    //     return (
    //         <div className="app">
    //             <section>
    //                 <HomePage />
    //                 <AboutPage />
    //                 <ContactPage />
    //             </section>
    //             <footer>
    //                 <a href="#">Homepage</a>
    //                 <a href="#about">About</a>
    //                 <a href="#contact">Contact</a>
    //             </footer>
    //         </div>
    //     );
    // }
});

React.renderComponent(<App />, document.body);
