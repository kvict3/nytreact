var react = require('react');

var router = require('react-router');
var route = router.route;

var index = router.index;

var main = require('../components/main');
var search = require('../components/search'); 
var saved = require('../components/saved'); 

module.exports = (


	<route path='/' component={main}>


		<route path='search' component={search} />
		<route path='saved' component={saved} />


		<index component={search} />

	</route>


);