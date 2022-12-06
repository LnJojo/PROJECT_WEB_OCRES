import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import ReactDOM from "react-dom";
import Games from "./components/Games";
import Search from "./components/Search";


import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import Streams from "./components/Streams";

//go into api.js and paste your twitch API key into the variable
//to test the app properly
function App() {
  return (
    <Router>
      <Header />
      <Search />
      <p></p>
      <Games />
      <Streams />

    </Router >
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
