import React from "react";
import TextDropdown from "../components/TextDropdown";
import BtnIcon from "../components/BtnIcon";
import Icondropdown from "../components/IconDropdown";

export default function Toolbar() {
  return (
    <div className="flex flex-wrap items-center justify-start gap-1 p-1 bg-slate-200 [&>*]:rounded-md [&>*]:bg-slate-50">
      <div className="flex gap-1 p-1">
        <BtnIcon name="undo" onPress={() => {}} />
        <BtnIcon name="redo" onPress={() => {}} />
      </div>
      <div className="">
        <TextDropdown
          onSelect={() => {}}
          options={[`small`, "normal", "Large"]}
          defaultOption="normal"
        />
      </div>
      <div className="flex gap-1 p-1">
        <BtnIcon name="bold" onPress={() => {}} />
        <BtnIcon name="italic" onPress={() => {}} />
        <BtnIcon name="underline" onPress={() => {}} />
      </div>
      <div className="flex gap-1 p-1">
        <BtnIcon name="ordered_list" onPress={() => {}} />
        <BtnIcon name="bullet_list" onPress={() => {}} />
      </div>
      <div className="">
        <Icondropdown
          defaultOption={<BtnIcon name="align_left" onPress={() => {}} />}
          options={[
            <BtnIcon name="align_left" onPress={() => {}} />,
            <BtnIcon name="align_center" onPress={() => {}} />,
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
