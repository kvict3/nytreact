var axios = require('axios');

var authKey = "479c30f1c7df42f19af85639b2dcaae1";


var helpers = {


	runQuery: function(term, start, end){

	
		var term = term.trim();
		var start = start.trim();
		var end = end.trim();


		// Run a query using Axios. 
		return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
			params: {
			    'api-key': "479c30f1c7df42f19af85639b2dcaae1",
			    'q': term,
			    'begin_date': start,
			    'end_date': end			
			}
		})
		.then(function(results){

			console.log('new query:')
			console.log(results.data.response);

			return results.data.response;

		});



	}
}

module.exports = helpers;