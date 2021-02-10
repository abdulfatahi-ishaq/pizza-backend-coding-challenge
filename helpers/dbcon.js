const { mysql } = require('./packages');

module.exports = {
    db : mysql.createConnection({
        host: process.env.host,
        user: process.env.userid,
        password: process.env.password,
        database: process.env.database
    })
}