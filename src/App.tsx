import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TextEditor } from "./TextEditor";

function App() {
  return (
    <div className="App">
      <p className="Title">POC lexical text editor</p>
      <div className="">
        <p className="Title">Text editor</p>
        <div className="EditorContainer">
          <TextEditor />
        </div>
      </div>
      <div className="">
        <p className="Title">Output raw</p>
        <div className="output">sadfadf</div>
      </div>
    </div>
  );
}

export default App;
