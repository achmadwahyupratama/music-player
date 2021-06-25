const {Song, Genre} = require('../models')


class GenresController{
    static home(req, res){
        res.status(200).json({message: `welcome to my music player`})
    }
    static getAllGenres(req, res){
        Genre.findAll({ include: Song })
            .then(genres=>{
                res.status(200).json(genres)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = GenresController