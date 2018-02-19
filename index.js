var linebot = require('linebot');
const express = require('express');


// create LINE SDK config from env variables
const bot = linebot({
    channelId: process.env.CHANNEL_ID,
    channelSecret: process.env.CHANNEL_ACCESS_TOKEN,
    channelAccessToken: process.env.CHANNEL_SECRET,
});

console.log(bot);

// create Express app
const app = express();
const linebotParser = bot.parser();

app.post('/callback', linebotParser);

bot.on('message', function(event) {
    console.log('message...');
    event.reply(event.message.text).then(function(data) {
        // success
        console.log('Success', data);
    }).catch(function(error) {
        // error
        console.log('Error', error);
    });
});


// listen on port
app.listen(process.env.PORT || 3000, () => {
    console.log('LineBot is listening on ${port}');
});