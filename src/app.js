'use strict';

const express = require("express");
const consign = require("consign");
const app = express();

/*
This is op.  Basically removes the need to import
each route/controller/lib manually by simply specifying 
the directory.
*/
consign( 
    {
        cwd: __dirname
    })
.include("models/index.js")
.then( 'libs/middlewares.js')
.then( 'routers')
.then( 'libs/boot.js')
.into(app);
