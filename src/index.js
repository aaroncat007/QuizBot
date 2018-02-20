const linebot = require('linebot');
import express from 'express';
const eventHandler = require('./lib/event.js');

// create LINE SDK config from env variables
const bot = linebot({
    channelId: process.env.CHANNEL_ID,
    channelSecret: process.env.CHANNEL_SECRET,
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});


// create Express app
const app = express();
const linebotParser = bot.parser();

app.post('/callback', linebotParser);

bot.on('message', function(event) {
    eventHandler(event);
});

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('LineBot is listening on ${port}');
});