angular.module('trackApp', [])
  .controller('TrackListController', ['$scope','$http', function($scope,$http) {
    var trackList = this;
    trackList.tracks = [];

    var server = "http://localhost:3000";

    var getYoutubeId = function(artist, song, callback) {
        $http.get(server + "/youtube?artist="
        + artist + "&song=" + song).then(function(response) {
            callback(artist, song, response.data);
        });
    };

    trackList.remaining = function() {
      var count = 0;
      angular.forEach(trackList.tracks, function(track) {
        count += track.done ? 0 : 1;
      });
      return count;
    };

    trackList.getTracks = function() {
        $http.get(server + "/getTracks?artist="
        + trackList.artist + "&song=" + trackList.track).then(function(response) {

            if (response.data.error) return;

            for(var i = 0; i < Math.min(50, response.data.similartracks.track.length); i++) {
                var artist = response.data.similartracks.track[i].artist.name;
                var song = response.data.similartracks.track[i].name;
                getYoutubeId(artist, song, function(artist, song, param) {
                     trackList.tracks.push({
                         artist: artist,
                         song: song,
                         youtubeId: param,
                     });
                 });
            }
        })
    };

}]);
