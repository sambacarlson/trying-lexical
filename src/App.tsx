import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TextEditor } from "./TextEditor";
import TextDropdown from "./TextEditor/components/TextDropdown";
import IconDropdown from "./TextEditor/components/IconDropdown";
import BtnIcon from "./TextEditor/components/BtnIcon";

function App() {
  return (
    <div className="App">
      <p className="Title">POC lexical text editor</p>
      <div className="">
        <p className="Title">Text editor</p>
        <div className="EditorContainer">
          <TextDropdown
            onSelect={(value: string) => {
              console.log("selected: ", value);
            }}
            options={["option", "option1", "option2", "option3 is long"]}
            defaultOption="option"
          />
          <IconDropdown
            options={[
              <BtnIcon
                onPress={() => {
                  console.log("aligned_left");
                }}
                name={"align_left"}
              />,
              <BtnIcon
                onPress={() => {
                  console.log("aligned_center");
                }}
                name={"align_center"}
              />,
              <BtnIcon
                onPress={() => {
                  console.log("aligned_justified");
                }}
                name={"align_justified"}
              />,
            ]}
          />
          {/* <TextEditor /> */}
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
