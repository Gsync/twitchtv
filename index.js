const express = require('express');

const app = express();

// import environmental variables from our variables.env file

const port = process.env.PORT || 5000;

app.use(express.static('./'));


app.listen(port,  () => {
    console.log(`Listening to port ${port}...`);
});
