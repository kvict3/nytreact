// Dependencies

var express         = require('express');
var port            = process.env.PORT || 4000;
var app             = express();

app.use(express.static(__dirname + '/public'));                 

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname+'/public/index.html'));
});

// Listening...

app.listen(port);
console.log('App listening on port ' + port);