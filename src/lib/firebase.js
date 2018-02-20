'use strict';
import firebase from 'firebase';
import monent from 'moment';

class MyFireBase {

    constructor() {
        // Initialize Firebase
        let config = {
            apiKey: process.env.firebase_apikey,
            authDomain: process.env.firebase_authDomain,
            databaseURL: process.env.firebase_databaseURL,
            projectId: process.env.firebase_projectId,
            storageBucket: process.env.firebase_storageBucket,
            messagingSenderId: process.env.firebase_messagingSenderId
        };
        firebase.initializeApp(config);
        this.db = firebase.database();
    }

    log(userId, msg) {
        this.db.ref('logs/' + userId).set({
            message: JSON.stringify(msg),
            createdTime: monent().format("YYYY-MM-DD HH:mm:ss")
        });
    }
}

export default MyFireBase;