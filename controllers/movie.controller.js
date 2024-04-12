const Movie = require("../models/Movie.model")

module.exports.getMovie = (req, res, next) => {
    Movie.find()
        .then((movies) => {
            res.render("movies", {movies});
        })
        .catch((err) => {
            next(err);
        });
}
module.exports.getMovieId = (req, res, next) => {
    const movieId = req.params.moviesId;
    Movie.findById(movieId)
    .then((movie) => {
        res.render("details", {movie});
    })
    .catch((err) => {
        next(err);
    })
}