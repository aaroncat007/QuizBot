'use strict';
import MyFireBase from './firebase.js';
import Game from './game.js';

const prefix = '--';
const _firebase = new MyFireBase();

let eventHandler = event => {
    if (!event) {
        return;
    }

    let userid = event.source.userId;
    const _game = new Game(userid);

    if (event.type === 'message') {

        let msgtype = event.message.type,
            msgtext = event.message.text,
            resptext = '';

        if (msgtext.startsWith(prefix)) {

            // check auth for cmd mode
            switch (msgtext) {
                case '--echo':
                    resptext = msgtext;
                    break;
                case '--startGame':
                    _game.startGame(50);
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

        _firebase.log(userid, event);
    }

};

module.exports = eventHandler;