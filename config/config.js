module.exports = {
  "development": {
    "storage": "states.db",
    "dialect": "sqlite"
  },
  "production": {
    "host": "YOUR_DATABASE_SERVER.database.windows.net",
    "database": "YOUR_DATABASE",
    "username": "YOUR_USER",
    "password": process.env.DB_PASSWORD,
    "dialect": "mssql",
    "ssl": true,
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  }
}

