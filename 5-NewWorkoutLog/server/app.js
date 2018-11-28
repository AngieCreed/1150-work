
var express = require('express');
var app = express();
var test = require('./controllers/testcontroller')
var sequelize = require('./db');


sequelize.sync({force: true});


app.use('/test', test)


app.listen(3003, function(){
    console.log('Angie - your App is listening on 3003.') 
});

// app.use('/api/test', function(req, res){
//     res.send("Angie - This is data from the /api/test endpoint. It's from the server.");
//    });

