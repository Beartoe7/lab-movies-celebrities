const router = require("express").Router();
const celebrityModel = require('../models/Celebrity.model')
const movieModel = require('../models/Movie.model')



router.get("/", (req, res, next) => {
    celebrityModel.find()
    .then(data => {
        res.render("celebrities/celebrities", { celebrities: data })
    })
    .catch(err => {
        console.log(err)
    })
})
router.get("/create", (req, res, next) => {
    celebrityModel.find()
    .then(data => {
        res.render("movies/new-movie", { celebrities: data })
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/create', (req, res, next) => {
    const { title, genre, cast, plot} = req.body

    movieModel.create({
        title, genre, cast, plot
    })
    .then(data => {
        console.log(data)
        res.redirect('/movies')
    })
    .catch(err => {
        console.log(err)
        res.render('movie/new-movie')
    })

})

module.exports = router