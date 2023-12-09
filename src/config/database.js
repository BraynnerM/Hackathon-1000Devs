const { Pool } = require("pg");

const pool = new Pool({
  user: "grazia",
  host: "itcpostgresql.postgres.database.azure.com",
  database: "db004",
  password: "%&unsas_aew27004",
  port: 5432,
  ssl: true,
});

module.exports = pool;
