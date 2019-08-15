require("dotenv").config();
const keys = require("./keys.js");
const axios = require("axios");
const moment = require("moment");
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);
const fs = require("fs");

let action = process.argv[2];

function concertThis() {

    let artist = process.argv.slice(3).join(" ");

    console.log("Upcoming concerts for : " + artist.toUpperCase());

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

    let song = process.argv.slice(3).join(" ");

    //console.log("\n\n\n\n");

    spotify.search({ type: 'track', query: song})
    .then(function(response) {
        console.log(
        "\n============================" + 
        "\nArtist(s) : " + response.tracks.items[0].album.artists[0].name + 
        "\nTrack : " + response.tracks.items[0].name +
        "\nAlbum : " + response.tracks.items[0].album.name + 
        "\nListen here : " + response.tracks.items[0].external_urls.spotify +
        "\n============================"
        );
    })
    .catch(function(err) {
        console.log(err);
    });

};

//spotifyThisSong();

function movieThis() {

    let movieName = process.argv.slice(3).join(" ");

    if (movieName === "") {
        movieName = "The+Godfather";
    }

    axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy")
    .then(function(response) {
        console.log(
            "\n============================" +
            "\nTitle : " + response.data.Title +
            "\nReleased in : " + response.data.Year + 
            "\nIMDB rating : " + response.data.imdbRating + 
            "\nRotten Tomatoes rating : " + response.data.Ratings[1].Value + 
            "\nProduced in : " + response.data.Country +
            "\nLanguage(s) : " + response.data.Language +
            "\nPlot : " + response.data.Plot +
            "\nNotable actors : " + response.data.Actors +
            "\n============================"
        )
    })
    .catch(function(error) {
        console.log(error);
    })

};

//movieThis();

function doWhatItSays() {

    fs.readFile("random.txt", "utf8", function(error, data) {

        if(error) {
            console.log(error);
        }

        console.log(data);

        var dataArr = data.split(",");

        console.log(dataArr);

    })
}

//doWhatItSays();

switch (action) {

case "concert-this":
    concertThis();
    break;

case "spotify-this-song":
    spotifyThisSong();
    break;

case "movie-this":
    movieThis();
    break;

case "do-what-it-says":
    doWhatItSays();
    break;

default:
    console.log(
        "\n============================" +
        "\nWelcome to LIRI!" +
        "\n============================" +
        "\nType 'concert-this' and a band/artist to see upcoming shows" +
        "\nOr 'spotify-this-song' and a song name to find information about it" +
        "\nType 'movie-this' and a movie title to look up detailed information on it" +
        "\nOr type 'do-what-it-says' to let LIRI give you a suggestion"
    );
}

