import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import React from "react";
import BtnIcon from "./components/BtnIcon";
import ClickAwayListener from "./components/ClickAwayListener";

export default function Toolbar() {
  const [editor] = useLexicalComposerContext();
  const [textAlign, setTextAlign] = React.useState("align_left");
  const [fontStyle, setFontStyle] = React.useState<
    "large" | "normal" | "small"
  >("normal");
  const [dropdowns, setDropdowns] = React.useState<{
    alignment: boolean;
    fontStyle: boolean;
  }>({ alignment: false, fontStyle: false });
  React.useEffect(() => {
    // closes dropdowns when any button any value is chosen from the dropdown
    setDropdowns({ alignment: false, fontStyle: false });
  }, [textAlign, fontStyle]);

  React.useEffect(() => {
    // calls dropdown handlers
    console.log("currently selected alignment: ", textAlign);
  }, [textAlign]);
  return (
    <div className="flex flex-wrap bg-slate-100 rounded-md p-1 [&>*]:h-fit">
      {/* undo and redo */}
      <div className="flex items-center justify-center gap-x-0.5 m-1 bg-white rounded-md p-1">
        <BtnIcon onPress={() => {}} name={"undo"} />
        <BtnIcon onPress={() => {}} name={"redo"} />
      </div>

      {/* font styles */}
      <div className="group relative flex items-center justify-center gap-x-0.5 m-1 bg-white rounded-md p-1 cursor-pointer">
        <BtnIcon
          onPress={() => {}}
          name={""}
          setIcon={`<span style="padding:0 8px;">${fontStyle}</span>`}
        />
        <div
          onClick={() =>
            setDropdowns((prevState) => ({
              ...prevState,
              fontStyle: !prevState.fontStyle,
            }))
          }
          className="flex flex-col items-center justify-between [&>*]:leading-[.5rem] duration-300 transform hover:rotate-180"
        >
          <span className="">^</span>
          <span className="transform rotate-180">^</span>
        </div>
        {dropdowns.fontStyle && (
          <ClickAwayListener
            onClickAway={() =>
              setDropdowns({ alignment: false, fontStyle: false })
            }
          >
            <div className="flex flex-col gap-1 absolute z-[1] top-[85%] left-0 m-1 max-h-[inherit] overflow-hidden bg-white rounded-md">
              <BtnIcon
                onPress={() => {
                  setFontStyle("small");
                }}
                name={""}
                setIcon={`<small>Small</small>`}
              />
              <BtnIcon
                onPress={() => {
                  setFontStyle("normal");
                }}
                name={""}
                setIcon={`<span>Normal</span>`}
              />
              <BtnIcon
                onPress={() => {
                  setFontStyle("large");
                }}
                name={""}
                setIcon={`<spans style="font-size:1.5rem;">Large</spans>`}
              />
            </div>
          </ClickAwayListener>
        )}
      </div>

      {/* bold italic underline */}
      <div className="flex items-center justify-center gap-x-0.5 m-1 bg-white rounded-md p-1">
        <BtnIcon onPress={() => {}} name={"bold"} />
        <BtnIcon onPress={() => {}} name={"italic"} />
        <BtnIcon onPress={() => {}} name={"underline"} />
      </div>

      {/* lists */}
      <div className="flex items-center justify-center gap-x-0.5 m-1 bg-white rounded-md p-1">
        <BtnIcon onPress={() => {}} name={"ordered_list"} />
        <BtnIcon onPress={() => {}} name={"bullet_list"} />
      </div>

      {/* text alignments */}
      <div className="group relative flex items-center justify-center gap-x-0.5 m-1 bg-white rounded-md p-1 cursor-pointer">
        <BtnIcon onPress={() => {}} name={textAlign} />
        <div
          onClick={() => {
            setDropdowns((prevState) => ({
              ...prevState,
              alignment: !prevState.alignment,
            }));
          }}
          className="flex flex-col items-center justify-between [&>*]:leading-[.5rem] duration-300 transform hover:rotate-180"
        >
          <span className="">^</span>
          <span className="transform rotate-180">^</span>
        </div>
        {dropdowns.alignment && (
          <ClickAwayListener
            onClickAway={() =>
              setDropdowns({ alignment: false, fontStyle: false })
            }
          >
            <div className="flex flex-col gap-1 absolute z-[1] top-[85%] left-0 m-1 max-h-[inherit] overflow-hidden bg-white rounded-md">
              <BtnIcon
                onPress={() => {
                  setTextAlign("align_left");
                }}
                name={"align_left"}
              />
              <BtnIcon
                onPress={() => {
                  setTextAlign("align_center");
                }}
                name={"align_center"}
              />
              <BtnIcon
                onPress={() => {
                  setTextAlign("align_justified");
                }}
                name={"align_justified"}
              />
              <BtnIcon
                onPress={() => {
                  setTextAlign("align_right");
                }}
                name={"align_right"}
              />
            </div>
          </ClickAwayListener>
        )}
      </div>
      <div className="flex items-center justify-center gap-x-0.5 m-1 bg-white rounded-md p-1"></div>
    </div>
  );
}
