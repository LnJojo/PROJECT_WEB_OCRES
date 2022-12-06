var express = require("express");
var router = express.Router();

const axios = require('axios');
const baseUrl = 'https://api.twitch.tv/helix/';

let clips = [];

/* GET clips listing. */
router.get('/', function(req, res, next) {

    res.send(clips);
});

///////////////////GET TOP 5 CLIPS FROM GAME///////////////////////////
router.get('/:name', async function(req, res, next) {
    console.log("params ", req.params);
    const {game} = req.params;

    const url1 = baseUrl + "games?name=" + game;
    console.log(url1);
    let gameId;
    await axios.get(url1,{
        headers :{
            "Client-id": "aaryfvgelkd55kmd39ohyo16h5ax2d",
            "Authorization": "Bearer v5ipqnx4ab3xqlw34i5kqyjvr1fpym"
        }

    })
    //.then(result => result.json())
    .then(function (result) {
        //console.log('game', game)
        if(result.data.data){
            
            
            //console.log(result.data.data[0].id);
            //var key = Object.keys(result.data.data);
            //console.log(key);
            //gameId=game.data.data.id;
            gameId=result.data.data[0].id;
            console.log("gameId",gameId);
        }
        
    })
    .catch(function (error) {
        // handle error
        console.log(error);
      });

    const url2 = baseUrl + "clips?game_id="+gameId
    console.log(url2);
    await axios.get(url2,{
        headers :{
              "Accept-Encoding" : "application/json",
            "Client-id": "aaryfvgelkd55kmd39ohyo16h5ax2d",
            "Authorization": "Bearer v5ipqnx4ab3xqlw34i5kqyjvr1fpym"
            
        }

    })

    .then(function (result) {
        //console.log('game', game)
        console.log(result.data.data);
        for( var i=0; i<5 ; i++){
            clips.push(result.data.data[i]);
        }

    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });

    res.send(clips);
});


module.exports = router;