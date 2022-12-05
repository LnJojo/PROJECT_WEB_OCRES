var express = require("express");
var router = express.Router();

const axios = require('axios');
const baseUrl = 'https://api.twitch.tv/helix/';

//on crée un tableau pour garder les données
let topStreams =[];
let streams = [];
let viewers = [];


/* GET users listing. */
router.get('/', function(req, res, next) {

    res.send(streams);
});
  
router.get('/top', async function(req, res, next) {
      //console.log(req.body); 
      const { name } = req.body;
  
      const url = baseUrl + "streams"
      await axios.get(url,{
          headers :{
                "Accept-Encoding" : "application/json",
              "Client-id": "aaryfvgelkd55kmd39ohyo16h5ax2d",
              "Authorization": "Bearer v5ipqnx4ab3xqlw34i5kqyjvr1fpym"
              
          }
  
      })

      .then(function (result) {
          //console.log('game', game)
          console.log(result.data);
          //var test = JSON.parse(result.data);
          for( var i=0; i<5 ; i++){
              topStreams.push(result.data.data[i]);
          }
          console.log(topStreams);
      });
  
      
      res.send(topStreams);
      
});

router.get('/game/:game', async function(req, res, next) {
    //console.log(req.body); 
    const { name } = req.params;

    const url1 = baseUrl + "games?name=" + name;
    console.log(url1);
    var gameId;
    await axios.get(url1,{
        headers :{
            "Client-id": "aaryfvgelkd55kmd39ohyo16h5ax2d",
            "Authorization": "Bearer v5ipqnx4ab3xqlw34i5kqyjvr1fpym"
        }

    })
    //.then(result => result.json())
    .then(function (game) {
        //console.log('game', game)
        if(game.data.data){
            
            
            console.log(game.data.data.id);
            const { id } = game.data.data;
            gameId = id;
            //gameId=game.data.data.id;
            console.log("gameId",gameId);
        }
        
    })
    .catch(function (error) {
        // handle error
        console.log(error);
      });

    const url2 = baseUrl + "streams?game_id="+ gameId
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
        streams.push(result.data.data);
        //var test = JSON.parse(result.data);
    });

    
    res.send(streams);
    
});



module.exports = router;