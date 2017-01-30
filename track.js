angular.module('trackApp', [])
  .controller('TrackListController', ['$scope','$http', function($scope,$http) {
    var trackList = this;
    trackList.tracks = [];

    trackList.remaining = function() {
      var count = 0;
      angular.forEach(trackList.tracks, function(track) {
        count += track.done ? 0 : 1;
      });
      return count;
    };

    trackList.getTracks = function() {
        $http.get("http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist="
        + trackList.artist + "&track=" + trackList.track +
        "&api_key=ed77b11b1f0965db65c3144cbffaf27b&format=json").then(function(response) {

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
