var express = require("express");
var router = express.Router();

const axios = require('axios');
const baseUrl = 'https://api.twitch.tv/helix/';

//on crée un tableau pour garder les données
let games =[];

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send(games);
});

router.get('/top', async function(req, res, next) {
    //console.log(req.body); 
    const { name } = req.body;

    const url = baseUrl + "games/top"
    await axios.get(url,{
        headers :{
            "Client-id": "aaryfvgelkd55kmd39ohyo16h5ax2d",
            "Authorization": "Bearer v5ipqnx4ab3xqlw34i5kqyjvr1fpym"
        }

    })

    //.then(result => result.json())
    .then(function (game) {
        //console.log('game', game)
        for( var i=0; i<game.data.data.length ; i++){
            games.push(game.data.data[i]);
        }
        console.log(games);
    });

    
    res.send('top');
    
});
    
    



















module.exports = router;

