var express = require('express'); 
var app = express(); 
var test = require('./controllers/testcontroller')

app.listen(3001, function() { 
    console.log('Hey man!!!')
}); 

app.use('/api/test', function(req, res) {
    res.send("This is data from the /api/test end point. It's from the server.");
});