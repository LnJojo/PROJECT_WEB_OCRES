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

          topStreams = topStreams.map(stream => {
            let newURL = stream.thumbnail_url.replace("{width}","300").replace("{height}","300");
            stream.thumbnail_url = newURL;
            return stream;
          })
          console.log(topStreams);
      });
  
      
      res.send(topStreams);
      
});

router.get('/game/:game', async function(req, res, next) {
    //console.log(req.body); 
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

    const url2 = baseUrl + "streams?game_id="+gameId
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
            streams.push(result.data.data[i]);
        }

        streams = streams.map(stream => {
            let newURL = stream.thumbnail_url.replace("{width}","300").replace("{height}","300");
            stream.thumbnail_url = newURL;
            return stream;
          })
        //var test = JSON.parse(result.data);
    });

    res.send(streams);
    
});



module.exports = router;