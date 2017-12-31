const express = require('express');

const app = express();

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

const port = process.env.PORT || 5000;
var tid = process.env.TWITCH;

app.use(express.static('./'));


app.listen(port,  () => {
    console.log(`Listening to port ${port}...`);
});
