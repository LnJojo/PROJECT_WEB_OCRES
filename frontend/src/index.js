import React from "react";
import Header from "./components/Header";
import ReactDOM from "react-dom";
import Games from "./components/Games";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import Streams from "./components/Streams";
import FRStreams from "./components/FRStreams";

function App() {
  return (
    <div>
      <Header />
      <Games />
      <Streams />
      <FRStreams />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
