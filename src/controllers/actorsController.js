const db = require('../database/models');

module.exports = {
    list: (req, res) => {
        db.Actors.findAll()
        .then(actors => {
            return res.render('actorsList', {actors})
        })
        .catch(error => res.send(error))
    },
    detail: (req, res) => {
        db.Actors.findByPk(req.params.id)
        .then(actor => {
            return res.render('actorsDetail', {actor})
        })
        .catch(error => res.send(error))
    }
}