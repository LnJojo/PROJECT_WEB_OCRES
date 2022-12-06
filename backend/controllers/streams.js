//get Stream
const Stream = require("../models/streams");

const getStreams = async (req, res) => {
    try {
        const streams = await Stream.find();
        console.log(streams.data);
        res.status(200).json({ success: true, data: streams })
    } catch (error) {
        res.status(409).json({ success: false, data: [], error: error })
    }
}
const getStream = async (req, res) => {
    const streamId = req.params.streamId
    try {
        const streams = await Stream.find({
            id: streamId
        })
        res.status(200).json({ success: true, data: streams })
    }
    catch (error) {
        res.status(409).json({ success: false, data: [], error: error })
    }
}

//add crypto to DB
const postStream = async (req, res) => {
    try {
        const { id } = req.body
        const { name } = req.body
        const newStream = new Stream({
            id: id,
            name: name
        })
        const savedStream = await newStream.save()
        res.status(201).json({ success: true, data: savedStream })

    }
    catch (error) {
        res.status(409).json({ success: false, data: [], error: error })
    }
}

//update data in db
const updateStream = async (req, res) => {
    const streamId = req.params.streamId;
    const { id } = req.body;
    const { name } = req.body;
    try {
        const stream = await Stream.updateOne({ id: streamId }, {
            $set: {
                id: id,
                name: name
            }
        })
        const updatedStreamData = await Stream.find({ id: streamId });
        res.status(201).json({ success: true, data: updatedStreamData })
    }
    catch (error) {
        res.status(409).json({ success: false, data: [], error: error })
    }
}

const deleteStream = async (req, res) => {
    const streamId = req.params.streamId
    try {
        await Stream.remove({ id: streamId })
        res.status(201).json({ success: true, data: "Stream deleted" })
    }
    catch (error) {
        res.status(409).json({ success: false, data: [], error: error })
    }
}

module.exports = {
    postStream,
    getStreams,
    getStream,
    updateStream,
    deleteStream
}