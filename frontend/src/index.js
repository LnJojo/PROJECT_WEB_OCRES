import React from "react";
//import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import ReactDOM from "react-dom";
import Games from "./components/Games";
import SearchBar from "./components/SearchBar";
//import axios from "axios";



import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import Streams from "./components/Streams";
import FRStreams from "./components/FRStreams";
import Clip from "./components/Clip";

//go into api.js and paste your twitch API key into the variable
//to test the app properly

//const BACKEND_BASE_URL = "http://localhost:3000/routes/";




function App() {

  //const [streamers, setStreamers] = useState({});

  //useEffect(() => {
  //axios.get(BACKEND_BASE_URL + "/streams/").then((data) => setStreamers(data))

  //}, [])

  return (
    <Router>
      <Header />
      <Games />
      <p></p>
      <Streams />
      <p></p>
      <FRStreams />
      <p></p>
      <Clip />
      <p></p>
      <SearchBar />

    </Router >
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
