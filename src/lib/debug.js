'use strict';
//import MyFireBase from './firebase.js';
import monent from 'moment';


let debugHandler = event => {
    console.log('DebugHandler:');

    let test = monent().format("YYYY-MM-DD HH:mm:ss");
    console.log(test);


    // let _firebase = new MyFireBase();
    // _firebase.log('test', event);
}

module.exports = debugHandler;