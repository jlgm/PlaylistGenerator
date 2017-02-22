# PlaylistGenerator
Create a Youtube playlist based on a particular song you like

This app uses data from Last.fm (for finding similar tracks) and then searches for them on Youtube, generating a Playlist afterwards.

## Demonstration

* Working demo at: http://www.cin.ufpe.br/~jlgm/PlaylistGenerator/

## Executing

* Make sure you have Node.js installed
* Go to /server
* `npm install` the dependencies
* Run the server with `node app.js`
* Open *index.html* on the browser
* Type both song name and artist
* Click on *Generate Playlist* at the end of the list

## API Keys

* On *app.js* and *lastfm.js* you'll need to insert a valid Google API Key and Last.fm Key, respectively

## Ilustration

![alt tag](https://raw.githubusercontent.com/jlgm/PlaylistGenerator/master/demo.png)
