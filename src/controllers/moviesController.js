const db = require('../database/models');

module.exports = {
    list: (req, res) => {
        db.Movies.findAll()
        .then(movies => {
            return res.render('moviesList', {movies})
        })
        .catch(error => res.send(error))
    },
    new: (req, res) => {
        db.Movies.findAll({
            order: [['release_date', 'DESC']],
        })
        .then(movies => {
            return res.render('newestMovies', {movies})
        })
        .catch(error => res.send(error))
    },
    recomended: (req, res) => {
        db.Movies.findAll({
            order: [['release_date', 'DESC']],
            limit: 5
        })
        .then(movies => {
            return res.render('recommendedMovies', {movies})
        })
        .catch(error => res.send(error))
    },
    detail: (req, res) => {
        db.Movies.findByPk(req.params.id)
        .then(movie => {
            return res.render('moviesDetail', {movie})
        })
        .catch(error => res.send(error))
    },
}
