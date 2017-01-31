var express = require('express')
var lastfm = require('./lastfm')
var app = express()

app.get('/getTracks', function (req, res) {
    var artist = req.param('artist');
    var song = req.param('song');
    lastfm.getSimilarTracks(artist, song, function(error, response) {
        if (error) console.log(error);
        else {
            res.header('Access-Control-Allow-Origin', '*');
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            res.send(response);
        }
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
