const Pool = require('pg').Pool


const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'sampleCrud',
    password:'aswanthek6488',
    port:5432
})

module.exports = pool