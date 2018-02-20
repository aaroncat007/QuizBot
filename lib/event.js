'use strict';
const prefix = '--';
const MyFireBase = require('./firebase.js');

let eventHandler = event => {
    if (!event) {
        return;
    }

    console.log('eventHandle:');
    console.log(event);

    if (event.type === 'message') {
        let userid = event.source.userId,
            msgtype = event.message.type,
            msgtext = event.message.text,
            resptext = '';

        if (msgtext.startsWith(prefix)) {
            // check auth for cmd mode
            switch (msgtext) {
                case '--echo':
                    resptext = msgtext;
                    break;
                default:
                    resptext = 'Unkown command.';
            }
        } else {
            // game mode
        }

        event.reply(resptext).then(data => {
            // success
            console.log(`${userid}  ${rsptext}`);
        }).catch(error => {
            // error 
            console.log(`${userid}  ${error}`);
        });

        MyFireBase.log(userid, event);
    }

};

module.exports = eventHandler;