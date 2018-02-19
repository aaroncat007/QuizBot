const prefix = '--';

let eventHandler = event => {
    if (!event) {
        return;
    }

    console.log('eventHandle:' + event);

    if (event.type === 'message') {
        let userid = event.source.userId,
            msgtype = event.message.type,
            msgtext = event.message.text,
            reptext = '';

        if (msgtext.startwith(prefix)) {
            // check auth for cmd mode
            switch (msgtext) {
                case '--echo':
                    reptext = msgtext;
                    break;
                default:
                    resptext = 'Unkown command.';
            }
        } else {
            // game mode
        }

        event.reply(rsptext).then(data => {
            // success
            console.log(`${userid}  ${rsptext}`);
        }).catch(error => {
            // error 
            console.log(`${userid}  ${error}`);
        });
    }

};

module.exports = eventHandler;