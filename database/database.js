const Sequelize = require("sequelize");

const db = new Sequelize({
    dialect: 'sqlite',
    storage: 'tutorial.sqlite'
});

module.exports = db;