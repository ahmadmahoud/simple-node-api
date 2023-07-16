const { Pool } = require('pg')
const dotenv = require("dotenv").config()

const database_Config = {
  host: process.env.host,
  user: process.env.user,
  database: process.env.database,
  password: process.env.password,
  port: process.env.port,
  connectionTimeoutMillis: 300,
  idleTimeoutMillis: 200,
  max: 20,
}

const pool = new Pool(
  database_Config
)

pool.on('connect', (client) => {
  console.log("datatbase is connect")
})


pool.on('remove', (client) => {
  console.log("data base is remove")
})







module.exports = pool