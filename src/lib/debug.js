'use strict';
import MyFireBase from './firebase.js';

const _firebase = new MyFireBase();

let debugHandler = event => {
    console.log('DebugHandler:');


    // _firebase.log('test', event);
}

module.exports = debugHandler;