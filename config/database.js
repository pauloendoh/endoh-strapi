require("dotenv").config();

const parse = require("pg-connection-string").parse;
console.log(process.env.DATABASE_URL);
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: false,
    },
    debug: false,
  },
});
