var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require('cors');
const mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var gamesRouter = require("./routes/games");
var streamsRouter = require("./routes/streams");
var clipsRouter = require("./routes/clips");


var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/games", gamesRouter);
app.use("/streams", streamsRouter);
app.use("/clips", clipsRouter);


const Connection = async () => {

    try {
        await mongoose.connect("mongodb+srv://LnJojo:yXPqNPzuXmhaFZvg@cluster0.wqs7oyp.mongodb.net/ProjetWeb?retryWrites=true&w=majority"), {

            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true

        }
        console.log("connection db on")
    }
    catch (error) {
        console.log("no connection db")
    }
}

Connection()


module.exports = app;
