const express = require('express'),
    router = express.Router();
const {
    getQuote,
} = require("./actions");


router.get('/', function (req, res) {
    try {
        getQuote().then(response=>{
            console.log({response})
            res.status(200).send(JSON.stringify(response))
        });
    } catch (error) {
        res.status(200).send({error: `Oops...something's gone awry 😵‍💫`})
    }
})

module.exports = router;
