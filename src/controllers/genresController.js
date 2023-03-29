const db = require('../database/models');

module.exports = {
    list: (req, res) => {
        db.Genres.findAll()
        .then(genres => {
            return res.render('genresList', {genres})
        })
        .catch(error => res.send(error))
    },
    detail: (req, res) => {
        db.Genres.findByPk(req.params.id)
        .then(genre => {
            return res.render('genresDetail', {genre})
        })
        .catch(error => res.send(error))
    }
}