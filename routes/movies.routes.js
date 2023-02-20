// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");

// all your routes here
router.get("/movies/create", async (req, res, next) => {
  let celebrities = await Celebrity.find();
    res.render("./../views/movies/new-movie", {celebrities}); 
});

  router.post("/movies/create", async (req, res, next) => {
    try {
      // let addCelebrity = await Celebrity.insertMany([celebrity]);
      let addMovie = new Movie;
      addMovie.title = req.body.title;
      addMovie.cast = req.body.cast;
      await addMovie.save();
      return res.redirect("/movies")
  } catch (error) {
      console.log("Error" ,error)
      return res.send({message: 'somethhing went wrong.', error});
  }
  });

  router.get("/movies", (req, res, next) => {
    Movie.find()
    populate('cast')
        .then (result =>{
            return res.send({data: result})
            let data= {
                name : result
            }
    

        res.render("/views/celebrities/celebrities", data)
    })
    .catch(err => next(err))
});

module.exports = router;

