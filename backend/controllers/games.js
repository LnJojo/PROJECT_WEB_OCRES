//get crypto
const Game = require("../models/games")
const getGames = async (req, res) => {
    try {
        const games = await games.find();
        res.status(200).json({ success: true, data: games })
    } catch (error) {
        res.status(409).json({ success: false, data: [], error: error })
    }
}
const getGame = async (req, res) => {
    const gameId = req.params.gameId
    try {
        const games = await Game.find({
            id: gameId
        })
        res.status(200).json({ success: true, data: games })
    }
    catch (error) {
        res.status(409).json({ success: false, data: [], error: error })
    }
}

//add crypto to DB
const postGame = async (req, res) => {
    try {
        const { id } = req.body
        const { name } = req.body
        const { box_art_url } = req.body
        const { igbd_id } = req.body
        const newCrypto = new Crypt({
            id: id,
            name: name,
            box_art_url: box_art_url,
            igbd_id: igbd_id
        })
        const savedGame = await newGame.save()
        res.status(201).json({ success: true, data: savedGame })

    }
    catch (error) {
        res.status(409).json({ success: false, data: [], error: error })
    }
}

//update data in db
const updateGame = async (req, res) => {
    const gameId = req.params.gameId;
    const { id } = req.body
    const { name } = req.body
    const { box_art_url } = req.body
    const { igbd_id } = req.body
    try {
        const game = await Crypt.updateOne({ id: gameId }, {
            $set: {
                id: id,
                name: name,
                box_art_url: box_art_url,
                igbd_id: igbd_id
            }
        })
        const updatedGameData = await Game.find({ id: gameId });
        res.status(201).json({ success: true, data: updatedGameData })
    }
    catch (error) {
        res.status(409).json({ success: false, data: [], error: error })
    }
}

const deleteGame = async (req, res) => {
    const gameId = req.params.gameId
    try {
        await Game.remove({ id: gameId })
        res.status(201).json({ success: true, data: "Game deleted" })
    }
    catch (error) {
        res.status(409).json({ success: false, data: [], error: error })
    }
}
module.exports = {
    postGame,
    getGames,
    getGame,
    updateGame,
    deleteGame
}