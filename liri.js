//require("dotenv").config();

const keys = require("./keys.js");

const axios = require("axios");

//const spotify = new Spotify(keys.spotify);

let artist = process.argv.slice(2).join(" ");

axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    .then(function(response) {
        for (var i = 0; i < response.data.length; i++) {
            console.log(
                "\n============================" + 
                "\nVenue : " + response.data[i].venue.name + 
                "\nCity : " + response.data[i].venue.city + 
                "\nWhen : " + response.data[i].datetime + 
                "\n============================"
                );
        }
    })
    .catch(function(error) {
        console.log(error);
    });