var request = require('request');

var lastfm = {
    apikey: '*****',

    tracks: this,

    getSimilarTracks: function(artist, song, callback) {
        request('http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=' + artist
                + '&track=' + song + '&api_key=' + this.apikey + '&format=json',
                function (error, response, body) {
                    if (!error) {
                        var obj = JSON.parse(body);
                        callback(null, obj);
                    }
                    else callback(new Error('error returning data'));
                });
    },

};

module.exports = lastfm;
