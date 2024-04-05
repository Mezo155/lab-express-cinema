const mongoose = require("mongoose");
//importamos los modelos
const movie = require("../models/Movie.model");
//importamos los datos
const movies = require("./movies.json")
//conectamos a la base de datos
require("../db/index");