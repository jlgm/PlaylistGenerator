angular.module('trackApp', [])
  .controller('TrackListController', ['$scope','$http', function($scope,$http) {
    var trackList = this;
    trackList.tracks = [];

    var server = "http://localhost:3000";

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
                trackList.tracks.push({
                    artist: response.data.similartracks.track[i].artist.name,
                    song: response.data.similartracks.track[i].name,
                    count: response.data.similartracks.track[i].playcount
                });
            }
        })
    };

}]);
