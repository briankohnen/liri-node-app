require("dotenv").config();

const keys = require("./keys.js");

const axios = require("axios");

const moment = require("moment");

const Spotify = require("node-spotify-api");

const spotify = new Spotify(keys.spotify);

function concertThis() {

    let artist = process.argv.slice(2).join(" ");

    console.log("\n\n\n\nUpcoming concerts for : " + artist.toUpperCase());

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(function(response) {
            
            for (var i = 0; i < response.data.length; i++) {
                console.log( 
                    "\n============================" + 
                    "\nVenue : " + response.data[i].venue.name + 
                    "\nCity : " + response.data[i].venue.city + 
                    "\nWhen : " + moment(response.data[i].datetime).format("L") + 
                    "\n============================"
                    );
            }
        })
        .catch(function(error) {
            console.log(error);
        });

};

//concertThis();

function spotifyThisSong() {

    let song = process.argv.slice(2).join(" ");

    spotify.search({ type: 'track', query: song})
    .then(function(response) {
        console.log(JSON.stringify(response, null, 3));
        console.log(response.tracks.items[0].album.artists[0].name);
        console.log(response.tracks.items[0].external_urls.spotify);
        console.log(response.tracks.items[0].name);
        console.log(response.tracks.items[0].album.name);
    })
    .catch(function(err) {
        console.log(err);
    });

}

spotifyThisSong();