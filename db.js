const db = require('mongoose');
const { config } = require('./config');

const USER = config.dbUser;
const HOST = config.dbHost;
const PASSWD = config.dbPassword;
const DBNAME = config.dbName;
const DBPORT = config.dbPort;
const URL = `mongodb+srv://${USER}:${PASSWD}@${HOST}/${DBNAME}`

db.Promise = global.Promise;

async function connect() {
    await db.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Conectada con exito")
}

module.exports = connect;

