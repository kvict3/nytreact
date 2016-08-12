// React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router


var routes = require('routes.js');

// Renders the contents according to the route page.
// Displays the contents in the div app of index.html
ReactDOM.render(

	<Router>{routes}</Router>,
	document.getElementById('app')
)