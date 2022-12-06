var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var gamesRouter = require("./routes/games");
var streamsRouter = require("./routes/streams");
var clipsRouter = require("./routes/clips");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/games", gamesRouter);
app.use("/streams", streamsRouter);
app.use("/clips", clipsRouter);

module.exports = app;
