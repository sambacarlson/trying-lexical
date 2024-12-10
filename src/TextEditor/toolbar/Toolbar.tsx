import React from "react";
import TextDropdown from "../components/TextDropdown";
import BtnIcon from "../components/BtnIcon";
import ToolDropdown from "../components/ToolDropdown";
import { editorHandler } from "../utils";

export default function Toolbar() {
  const handler = editorHandler();
  return (
    <div className="flex flex-wrap items-center justify-start gap-1 p-1 bg-slate-200 [&>*]:rounded-md [&>*]:bg-slate-50">
      <div className="flex gap-1 p-1">
        <BtnIcon
          name="undo"
          onPress={handler.undo}
          disabled={!handler.canUndo}
        />
        <BtnIcon
          name="redo"
          onPress={handler.redo}
          disabled={!handler.canRedo}
        />
      </div>
      <div className="">
        <ToolDropdown
          defaultOption={
            <BtnIcon name="" setIcon="normal" onPress={() => {}} />
          }
          options={[
            <BtnIcon
              name=""
              setIcon="Small"
              onPress={() => {}}
              active={true}
            />,
            <BtnIcon
              name=""
              setIcon="Normal"
              onPress={() => {}}
              disabled={true}
            />,
            <BtnIcon name="" setIcon="Large" onPress={() => {}} />,
          ]}
        />
      </div>
      <div className="flex gap-1 p-1">
        <BtnIcon
          name="bold"
          onPress={handler.bold}
          active={handler.isBold()}
          disabled={!handler.canBold()}
        />
        <BtnIcon
          name="italic"
          onPress={handler.italic}
          active={handler.isItalic()}
        />
        <BtnIcon name="underline" onPress={handler.underline} />
      </div>
      <div className="flex gap-1 p-1">
        <BtnIcon name="ordered_list" onPress={() => {}} />
        <BtnIcon name="bullet_list" onPress={() => {}} />
      </div>
      <div className="">
        <ToolDropdown
          defaultOption={<BtnIcon name="align_left" onPress={() => {}} />}
          dropDownDirection="horizontal"
          options={[
            <BtnIcon name="align_left" onPress={() => {}} active={true} />,
            <BtnIcon name="align_center" onPress={() => {}} disabled={true} />,
            <BtnIcon name="align_justify" onPress={() => {}} />,
            <BtnIcon name="align_right" onPress={() => {}} />,
          ]}
        />
      </div>
      <div className="flex p-1 gap-1">
        <BtnIcon name="indent_left" onPress={() => {}} />
        <BtnIcon name="indent_right" onPress={() => {}} />
      </div>
      <div className="flex p-1 gap-1">
        <BtnIcon name="quote" onPress={() => {}} />
        <BtnIcon name="link" onPress={() => {}} />
      </div>
      <div className="flex p-1 gap-1 cursor-pointer">
        <BtnIcon name="table" onPress={() => {}} />
      </div>
    </div>
  );
}
