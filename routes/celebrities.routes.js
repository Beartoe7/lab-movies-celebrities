const router = require("express").Router();
const celebrityModel = require('../models/Celebrity.model')


router.get("/", (req,res,next) => {
    celebrityModel.find()
    .then(data => {
        res.render("celebrities/celebrities", {celebrities: data})
    })
    .catch(err => {
        console.log(err)
    })
})
router.get("/create", (req, res, next) => {
    res.render("celebrities/new-celebrity")
  })
  
  router.post('/create', (req, res, next) => {
    const name = req.body.name
    const occupation = req.body.occupation
    const catchPhrase = req.body.catchPhrase
  
    celebrityModel.create({
      name,
      occupation,
      catchPhrase
    })
    .then(data => {
        console.log(data)
        res.redirect('celebrities/celebrities')
    })
    .catch(err => {
        console.log(err)
        res.render('celebrities/new-celebrity')
    })
  
  })

module.exports = router