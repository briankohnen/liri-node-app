//require("dotenv").config();

const keys = require("./keys.js");

const axios = require("axios");

//const spotify = new Spotify(keys.spotify);

let artist = process.argv.slice(2).join(" ");

axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    .then(function(response) {
        console.log(JSON.stringify(response.data, null, 2));
    })
    .catch(function(error) {
        console.log(error);
    });