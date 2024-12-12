import React from "react";
import BtnIcon from "../components/BtnIcon";
import ToolDropdown from "../components/ToolDropdown";
import { useEditorHandler } from "../utils";

export default function Toolbar() {
  const toolbarRef = React.useRef(null);
  const handler = useEditorHandler({ compRef: toolbarRef }); // handler hook
  return (
    <div
      ref={toolbarRef}
      className="flex flex-wrap items-center justify-start gap-1 p-1 bg-slate-200 [&>*]:rounded-md [&>*]:bg-slate-50"
    >
      <div className="flex gap-1 p-1">
        <BtnIcon
          name="undo"
          onPress={handler.undo.undo}
          disabled={!handler.undo.canUndo}
        />
        <BtnIcon
          name="redo"
          onPress={handler.redo.redo}
          disabled={!handler.redo.canRedo}
        />
      </div>
      <div className="">
        <ToolDropdown
          defaultOption={
            <BtnIcon
              name=""
              setIcon="H1"
              onPress={handler.h1}
              active={handler.isH1()}
              disabled={!handler.canH1()}
            />
          }
          options={[
            <BtnIcon
              name=""
              setIcon="H1"
              onPress={handler.h1}
              active={handler.isH1()}
              disabled={!handler.canH1()}
            />,
            <BtnIcon
              name=""
              setIcon="H2"
              onPress={handler.h2}
              active={handler.isH2()}
              disabled={!handler.canH2()}
            />,
            <BtnIcon
              name=""
              setIcon="H3"
              onPress={handler.h3}
              active={handler.isH3()}
              disabled={!handler.canH3()}
            />,
          ]}
        />
      </div>
      <div className="flex gap-1 p-1">
        <BtnIcon
          name="bold"
          onPress={handler.bold.bold}
          active={handler.bold.isBold}
          disabled={!handler.bold.canBold}
        />
        <BtnIcon
          name="italic"
          onPress={handler.italic.italic}
          active={handler.italic.isItalic}
          disabled={!handler.italic.canItalic}
        />
        <BtnIcon
          name="underline"
          onPress={handler.underline.underline}
          active={handler.underline.isUnderline}
          disabled={!handler.underline.canUnderline}
        />
      </div>
      <div className="flex gap-1 p-1">
        <BtnIcon name="ordered_list" onPress={() => {}} />
        <BtnIcon name="bullet_list" onPress={() => {}} />
      </div>
      <div className="">
        <ToolDropdown
          defaultOption={
            <BtnIcon
              name="align_left"
              onPress={handler.alignLeft}
              active={handler.isAlignLeft()}
              disabled={!handler.canAlignLeft()}
            />
          }
          dropDownDirection="horizontal"
          options={[
            <BtnIcon
              name="align_left"
              onPress={handler.alignLeft}
              active={handler.isAlignLeft()}
              disabled={!handler.canAlignLeft()}
            />,
            <BtnIcon
              name="align_center"
              onPress={handler.alignCenter}
              active={handler.isAlignCenter()}
              disabled={!handler.canAlignCenter()}
            />,
            <BtnIcon
              name="align_justify"
              onPress={handler.alignJustify}
              active={handler.isAlignJustify()}
              disabled={!handler.canAlignJustify()}
            />,
            <BtnIcon
              name="align_right"
              onPress={handler.alignRight}
              active={handler.isAlignRight()}
              disabled={!handler.canAlignRight()}
            />,
          ]}
        />
      </div>
      <div className="flex p-1 gap-1">
        <BtnIcon
          name="indent_left"
          onPress={handler.indentLeft}
          active={handler.isIndentLeft()}
          disabled={!handler.canIndentLeft()}
        />
        <BtnIcon
          name="indent_right"
          onPress={handler.indentRight}
          active={handler.isIndentRight()}
          disabled={!handler.canIndentRight()}
        />
      </div>
      <div className="flex p-1 gap-1">
        <BtnIcon
          name="quote"
          onPress={handler.quote}
          active={handler.isQuote()}
          disabled={!handler.canQuote()}
        />
        <BtnIcon
          name="link"
          onPress={handler.link}
          active={handler.isLink()}
          disabled={!handler.canLink()}
        />
      </div>
      <div className="flex p-1 gap-1 cursor-pointer">
        <BtnIcon name="table" onPress={() => {}} />
      </div>
    </div>
  );
}
