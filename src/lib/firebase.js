'use strict';
import firebase from 'firebase';
import monent from 'moment';

class MyFireBase {

    constructor() {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyBOh15OG9QwnI0N8HSbr4wmX6dg6ShCqRM",
            authDomain: "quizbot-b2407.firebaseapp.com",
            databaseURL: "https://quizbot-b2407.firebaseio.com",
            projectId: "quizbot-b2407",
            storageBucket: "quizbot-b2407.appspot.com",
            messagingSenderId: "342500485053"
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

    write(refPrefix, data) {
        this.db.ref(refPrefix).set(data);
    }

    read(refPrefix) {
        this.db.ref(refPrefix).once('value').then(function(snapshot) {
            return snapshot;
        });
    }
}

export default MyFireBase;