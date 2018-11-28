
let router = require('express').Router();
const Pie = require('../db').import('../models/pie')
const validateSession = require('../middleware/validate-session')

//const sequeli{ze = require('..db')
//const Pie = sequelize.import('../models/pie')

// router.get('/', (req, res) => res.send('I love pie!'))
// router.get('/tasty', (req, res) => res.send('Pies are great!'))

router.get('/', (req, res) => {
    Pie.findAll() //shows me every bit of the table
    .then(pie => res.status(200).json(pie)) //turns into a json object - 200 is okay status
    .catch(err => res.status(500).json({error: err})) //500 = internal server error
})

// let's now build table

router.post('/', validateSession, (req, res) => {
    if(!req.errors) {
        const pieFromRequest = {
            nameOfPie: req.body.nameOfPie, //need body-parser
            baseOfPie: req.body.baseOfPie,
            crust: req.body.crust,
            timeToBake: req.body.timeToBake,
            servings: req.body.servings,
            rating: req.body.rating

        }

        Pie.create(pieFromRequest)
        .then(pie => res.status(200).json(pie))
        .catch(err => res.json(req.errors))

    } else {
        res.status(500).json(req.errors)
    }
})

router.get('/:nameOfPie', (req, res) => { //using id is better practice
    Pie.findOne({ where: { nameOfPie: req.params.nameOfPie }}) //camelcase built into express
      .then(pie => res.status(200).json(pie))
      .catch(err => res.status(500).json({ error: err}))
  })
  
  router.put('/:id', validateSession, (req, res) => { //put allows us to update
    if (!req.errors) {
      Pie.update(req.body, { where: { id: req.params.id }}) // we want params to find a specific id
        .then(pie => res.status(200).json(pie))
        .catch(err => res.json(req.errors))
    } else {
      res.status(500).json(req.errors)
    }
  })

  router.delete('/:id', validateSession, (req, res) => {
      Pie.destroy({where: { id: req.params.id }})
      .then(pie => res.status(200).json(pie))
      .catch(err => res.status(500).json({ error: err}))

  })

module.exports = router;