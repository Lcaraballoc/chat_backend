const db = require('mongoose');
const Model = require('./model');
const {config} = require('../../config');

const USER = config.dbUser;
const HOST = config.dbHost;
const PASSWD = config.dbPassword;
const DBNAME = config.dbName;
const DBPORT = config.dbPort;

db.Promise= global.Promise;
db.connect(`mongodb+srv://${USER}:${PASSWD}@${HOST}/${DBNAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

/* console.log(USER + HOST + PASSWD + DBNAME + DBPORT) */

console.log("Conectada con exito")

function addMessage(message) {
    /* list.push(message); */
    const myMessage = new Model(message)
    myMessage.save();
}

function getMessage() {
    return list;
}

module.exports = {
    add: addMessage,
    list: getMessage,
    //get
    //update
    //delete
}