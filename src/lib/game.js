'use strict';
import MyFireBase from './firebase.js';
import uuidV4 from 'uuid/v4';
import monent from 'moment';

const _firebase = new MyFireBase();


class Game {
    constructor(userId) {
        this.userId = userId;
    }

    startGame(range) {
        _firebase.write('game', {
            uuid: uuidV4(),
            author: this.userId,
            range: range,
            createdTime: monent().format("YYYY-MM-DD HH:mm:ss")
        });
    }
}

export default Game;