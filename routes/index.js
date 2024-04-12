const express = require('express');
const router = express.Router();
const homeController = require("../controllers/home.controller");
const movieController = require("../controllers/movie.controller")

/* GET home page */
router.get('/', homeController.getHome);

router.get('/movies', movieController.getMovie);

router.get("/movies/:moviesId", movieController.getMovieId )

module.exports = router;
