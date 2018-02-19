var linebot = require('linebot');
const express = require('express');


// create LINE SDK config from env variables
var bot = linebot({
    channelId: process.env.CHANNEL_ID,
    channelSecret: process.env.CHANNEL_ACCESS_TOKEN,
    channelAccessToken: process.env.CHANNEL_SECRET,
});

// create Express app
const app = express();
const linebotParser = bot.parser();

bot.on('message', function(event) {
    event.reply(event.message.text).then(function(data) {
        // success
        console.log('Success', data);
    }).catch(function(error) {
        // error
        console.log('Error', error);
    });
});


app.post('/callback', linebotParser);

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});