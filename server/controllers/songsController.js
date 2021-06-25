const {Song, Genre} = require('../models')


class SongsController{
    static home(req, res){
        res.status(200).json({message: `welcome to my music player`})
    }
    static getAllSongs(req, res){
        Song.findAll({ include: Genre })
            .then(songs=>{
                res.status(200).json(songs)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = SongsController