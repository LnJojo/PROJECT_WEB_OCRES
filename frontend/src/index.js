import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import ReactDOM from "react-dom";
import Games from "./components/Games";
<<<<<<< HEAD
import Search from "./components/Search";
import axios from "axios";


=======
>>>>>>> d467ca32650a8019622e7b36a6d247ffaf85b4c6
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import Streams from "./components/Streams";
import FRStreams from "./components/FRStreams";
import Clip from "./components/Clip";
<<<<<<< HEAD

//go into api.js and paste your twitch API key into the variable
//to test the app properly

const BACKEND_BASE_URL = "http://localhost:3000/routes/";
=======
import Search from './components/SearchBar'

>>>>>>> d467ca32650a8019622e7b36a6d247ffaf85b4c6

function App() {

  const [streamers, setStreamers] = useState({});

  useEffect(() =>{
    axios.get(BACKEND_BASE_URL+"/streams/").then((data)=> setStreamers(data))

  }, [])

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
<<<<<<< HEAD
      <div>{streamers.id}</div>
      <div>{streamers.name}</div>
=======
      <Search />
>>>>>>> d467ca32650a8019622e7b36a6d247ffaf85b4c6
    </Router >
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
