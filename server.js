var app = require('./server-config.js');

var port = process.env.PORT || 3468;
console.log("port assigned");

app.listen(port);

console.log('Server now listening on port ' + port);

