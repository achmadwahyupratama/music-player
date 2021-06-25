const GenresController = require('../controllers/genresController')
const SongsController = require('../controllers/songsController')
const router = require('express').Router()
router.get('/', SongsController.home)
router.get('/songs', SongsController.getAllSongs)
router.get('/genres', GenresController.getAllGenres)
module.exports = router