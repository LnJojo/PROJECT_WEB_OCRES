import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import ReactDOM from "react-dom";
import Games from "./components/Games";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import Streams from "./components/Streams";
import FRStreams from "./components/FRStreams";
import Clip from "./components/Clip";
import Search from './components/SearchBar'


function App() {
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
      <Search />
    </Router >
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
