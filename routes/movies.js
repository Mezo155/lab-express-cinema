const express = require('express');
const router = express.Router();
const movies = require("../seeds/movies.json");


/* GET movies page */
router.get('/movies', (req, res, next) => { 
res.render('movies', {movies: movies});
});
// el movies despues de res.render es para acceder al nombre del hbs,
// el segundo {movies:} es el nombre que le pongo para acceder a los datos, es el que se pone despues del each
//el valor : movies accede a los datos de mi array, se llama asi porque la const en el seed de los datos el const movies
module.exports = router;