require('dotenv').config(); //require means import .config - comnfiguring data from package

const express = require("express"); //refers to "express" in package.json
const app = express(); // invokes the function of running express whenever app is denoted

app.use(express.static(__dirname + '/public')) //underscore underscore - looks for html in the public file - pulling from a static folder
console.log(__dirname)

const pie = require('./controllers/piecontroller')
const user = require('./controllers/usercontroller')
const sequelize = require('./db') // all of my root info will be in the db file
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(require('./middleware/headers'))

sequelize.sync();
// ({force: true}) creates a new table

app.get('/', (req, res) => res.render('index')) // get app response from the root to display html - routing is the paths

// app.get('/pies', (req, res) => res.send('I love pie!'))

app.use('/pies', pie)
app.use('/auth', user)

app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT}`)) //callback function - function called in a function
    //.listen is a method, 3000 is the port
    // now "npm run dev" from the console (at piesAPI)
