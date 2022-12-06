//get crypto
const Game = require("../models/games");
const getGames = async (req, res) => {
    try {
        const games = await Game.find();
        console.log(games.data);
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
        const { _id } = req.body
        const { _name } = req.body
        const { _box_art_url } = req.body
        const { _igbd_id } = req.body
        const newGame = new Game({
            id: _id,
            name: _name,
            box_art_url: _box_art_url,
            igbd_id: _igbd_id
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
    const { id } = req.body;
    const { name } = req.body;
    const { box_art_url } = req.body;
    const { igbd_id } = req.body;
    try {
        const game = await Game.updateOne({ id: gameId }, {
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