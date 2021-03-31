# Weather-Journal App Project

## Overview
This is a project that uses openweather api to display the weather data according to zip code

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Server.js
This js file includes express, body-parser, cors packages then app instance is called, POST and GET routes are added, then the server is made on port 5000

## App.js
first the baseURL and apiKey is declared then event listener is added for the button then value is obtained from the textareas of the zip and feelings, then the data is fetched using the dynamic zip code and the temp is converted to celsius using the query parameter, the an async function is caled to send the data to the post route on the url weather, the at last the displayData function is used to update and display the most recent entry to the user.
