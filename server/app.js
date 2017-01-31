var express = require('express')
var app = express()

//lastfm connector:
var lastfm = require('./lastfm')

//youtube connector:
var YouTube = require('youtube-node');
var youtube = new YouTube();
youtube.setKey('********');

app.get('/getTracks', function (req, res) {
    var artist = req.param('artist');
    var song = req.param('song');
    lastfm.getSimilarTracks(artist, song, function(error, response) {
        if (error) console.log(error);
        else {
            res.header('Access-Control-Allow-Origin', '*');
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            // var counter = 0;
            //var obj = JSON.parse(response);
            // response.similartracks.track.forEach(function(mytrack) {
            //     youtube.search(mytrack.artist.name + ' ' + mytrack.name, 2, function(error, result) {
            //         response.similartracks.track[counter].youtubeId = result.items[0].id.videoId;
            //         console.log(mytrack.artist.name + " | " + mytrack.name + " | " + result.items[0].id.videoId);
            //         counter++;
            //     });
            // });
            res.send(response);
        }
    });
});

app.get('/youtube', function(req, res) {
    var artist = req.param('artist');
    var song = req.param('song');
    youtube.search(artist + ' ' + song, 2, function(error, response) {
        if (error) {
            console.log(error);
        }
        else {
            res.header('Access-Control-Allow-Origin', '*');
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            res.send(response.items[0].id.videoId);
        }
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
