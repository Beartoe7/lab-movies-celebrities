// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
const Celebrity = require("../models/Celebrity.model");

router.get("/celebrities/create", (req, res, next) => {
        res.render("./../views/celebrities/new-celebrity"); 
});

router.post("/celebrities/create", async (req, res, next)=>{
    let celebrity = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    };

    try {
        // let addCelebrity = await Celebrity.insertMany([celebrity]);
        let addCelebrity = new Celebrity;
        addCelebrity.name = req.body.name;
        addCelebrity.occupation= req.body.occupation;
        addCelebrity.catchPhrase= req.body.catchPhrase;
        await addCelebrity.save();
        console.log('result', addCelebrity);
        return res.redirect("/celebrities")
    } catch (error) {
        console.log("Error" ,error)
        return res.send({message: 'somethhing went wrong.', error});
    }
    // .then(result => {
    //     console.log("result: ",result);
    //     // res.send(result);
    //     res.redirect("/celebrities/celebrities");      //?
    // })
    // .catch(err => {
    //     res.render("/celebrities/new-celebrity")
    // })
})




    router.get("/celebrities", (req, res, next) => {
        let allCelebrities ={};
        if (req.query.name) allCelebrities.name = req.query.name;
        Celebrity.find(allCelebrities)
            .then (result =>{
                return res.send({data: result})
                let data= {
                    name : result
                }
        

            res.render("./../views/celebrities/celebrities", data)
        })
        .catch(err => next(err))
    });




module.exports = router;