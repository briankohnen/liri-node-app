# liri-node-app
Language interpretation (like Siri's 'Speech Interpretation') app that takes in a user's input to grab information through different API calls and returns data. *Why?*

1. Finding out the when-and-where of your favorite band's next concert should be easy.
2. Discovering who made a song and where you can listen to it should be a breeze.
2. Learning about how your favorite movie has a 2/10 rating on IMDB should inspire you to cry and take to the internet messageboards.

## the app, and how to use it
As a Node based app, LIRI is run within the command line.
LIRI is dependent on a number of different packages that can be installed by typing `npm install` to the command line.

**BEFORE CONTINUING** you need to create a .env file and replace values with your own API keys in order for LIRI to function.

You can get these keys through the Spotify developer site : (https://developer.spotify.com/my-applications/#!/)
1. Log in or create a Spotify account
2. Register an application to be used with the Spotify API
3. Click the link to your application and find the Client ID & Client Secret values
4. Copy/paste the values into your .env file like so

![.env example](https://i.imgur.com/Sh9G9Pm.png)

**Next** from the command line, LIRI accepts four commands prefaced by _node liri.js_
* node liri.js
  * concert-this *band name*
  * spotify-this-song *song name*
  * movie-this *movie name*
  * do-what-it-says
  
![liri function example](https://i.imgur.com/RSw7ILf.png)

*Voilà!* The information is logged to the command line, and also, the separate file : log.txt for later reading

## tech
Notable tech used within LIRI
* dotenv - loads environment variables into process.env, unique to the computer that node is running on
* axios - to make requests and receive responses through JSON data from these APIS
  * bandsintown
  * spotify
  * omdb
* fs - package to allow read/write access to files on system
* moment - package to convert dates
