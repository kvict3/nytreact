var react = require('react');

var router = require('react-router');
var route = router.route;

var index = router.index;

var main = require('../components/main');
var search = require('../components/search'); 
var saved = require('../components/saved'); 

module.exports = (

	/*Main component*/
	<Route path='/' component={main}>

		{/* If user selects Search or Saved show the appropriate component*/}
		<route path='search' component={search} />
		<route path='saved' component={saved} />

		{/*If user selects any other path... we get the Home Route*/}
		<index component={search} />

	</route>


);