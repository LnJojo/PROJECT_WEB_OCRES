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


/////////////RECUPERER TOP GAMES //////////////////////////
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

        games = games.map(game => {
            let newURL = game.box_art_url.replace("{width}","300").replace("{height}","300");
            game.box_art_url = newURL;
            return game;
        })
        //console.log(games);
    })

    .catch(function (error) {
        // handle error
        console.log(error);
      });
    
    res.send(games);
    
});


///////////////RECUPERER SPECIFIQUE GAME///////////////////
router.get('/game/:name', async function(req, res, next) {
    //console.log(req.body); 
    const { name } = req.params;

    const url = baseUrl + "games?name=" + name;
    console.log("url ",url);
    await axios.get(url,{
        headers :{
            "Client-id": "aaryfvgelkd55kmd39ohyo16h5ax2d",
            "Authorization": "Bearer v5ipqnx4ab3xqlw34i5kqyjvr1fpym"
        }

    })
    //.then(result => result.json())
    .then(function (game) {
        //console.log('game', game)
        if(game.data.data){
            console.log(game.data.data);

            let newGame = game.data.data;
            let finalGame = newGame.map(gam => {
                let newURL = gam.box_art_url.replace("{width}","300").replace("{height}","300");
                gam.box_art_url = newURL;
                return gam;
            })

            res.send(finalGame);
        }
        
    })
    .catch(function (error) {
        // handle error
        console.log(error);
      });

      //res.send('game');
    
});
    
//////////////////////         ACCES BDD          ////////////////////////////




module.exports = router;

