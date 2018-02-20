'use strict';

import uuidV4 from 'uuid/v4';
import monent from 'moment';


class Game {
    constructor(firebase, userId) {
        this.userId = userId;
        this._firebase = firebase;
    }

    startGame(range) {
        let uuid = uuidV4();
        this._firebase.write('game/uuid', {
            uuid: uuid,
            author: this.userId,
            range: range,
            createdTime: monent().format("YYYY-MM-DD HH:mm:ss")
        });
    }
}

export default Game;