# Sequelize-Tutorial-2021
Using the JS ORM Sequelize to create a database, tables, relationships between tables, and inserting records.

# How to use
- Download NodeJS, and get npm (node package manager) working on your command line.
- clone repo
- run: `npm install`

# Dependencies

## Express
This module handles routing.  In other words, it specifies endpoints for GET, POST, PUT, PATCH, DELETE, etc requests.

## Consign
This module handles importing modules automatically from a specified directory.  This is not really necessary, but it makes importing modules much less of a headache.

## Sqlite3
Local storage database.  Great for local development, prototyping, but also a viable alternative to small projects without the need to spend $10/mo for a dedicated database or a VM.  Sqlite3 has problems installing in Node v14.  Make sure you update npm.  If the issue presists, downgrade node version, or run: `npm install node-gyp -g node-gyp` and build from source using: `npm install --build-from-source`.  Things will probably change in the future like all Javascript libs, so good luck :')

## Sequelize
ORM used to specify/define the database schema, and handle migrations.  It has a steep learning curve, but in the long run makes SQL querying much less of a headache.

# Development dependecies

## Sequelize-cli
Used to initialize database (if it doesn not exist) and establish a server-to-database connection.  See usage here: https://www.npmjs.com/package/sequelize-cli

# Author's notes

Folder structure credit goes to FaztWeb.  Original repo here: https://github.com/FaztWeb/nodejs-sequelize-rest-api
