import * as React from "react";
import {render} from "react-dom";

import Home from "./screens/Home";
import AppBar from "./components/Appbar";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Home />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
