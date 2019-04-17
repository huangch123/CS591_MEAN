var express = require('express');
var request = require('request');
var router = express.Router();

let city = 'Boston';
let key = '';            // An api key should be added here for the url to be complete
let url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}';

router.get('/', function(req, res, next) {
    request.get(url, (err, response, body) => {
        if(err){
            return console.log(err);
        }

        let data = JSON.parse(body).list[0].main;
        let sky = JSON.parse(body).list[0].weather[0].main;
        res.render('hw4', {
            title: 'Weather for ' + city,
            main: data,
            weather: sky
        });
    });
});

module.exports = router;
