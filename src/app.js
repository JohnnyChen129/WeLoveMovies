if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const moviesRouter = require("./movies/movies.router")
const moviesController = require("./movies/movies.controller")
const moviesService = require("./movies/movies.service")


const cors = require('cors');

app.use(express.json());
app.use(cors());

const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

app.use(notFound);
app.use(errorHandler);

module.exports = app;
