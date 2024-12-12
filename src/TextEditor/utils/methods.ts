import React, { useState, useEffect, useCallback, useRef, } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { FORMAT_ELEMENT_COMMAND, FORMAT_TEXT_COMMAND, UNDO_COMMAND, REDO_COMMAND, $getSelection, $isRangeSelection, CAN_UNDO_COMMAND, CAN_REDO_COMMAND } from 'lexical';
import { mergeRegister } from '@lexical/utils';
export default function useEditorHandler({ compRef }: { compRef: React.MutableRefObject<null> }) {

  const [editor] = useLexicalComposerContext()
  const LowPriority = 1;

  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"))
      setIsUnderline(selection.hasFormat("underline"));
    }
  }, [])

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateToolbar()
        })
      }),
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload) => {
          setCanUndo(payload)
          return false;
        },
        LowPriority
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload) => {
          setCanRedo(payload)
          return false;
        },
        LowPriority
      )
    )
  }, [editor, $updateToolbar])

  // undo & redo
  const undo = { undo: () => editor.dispatchCommand(UNDO_COMMAND, undefined), canUndo }
  const redo = { redo: () => editor.dispatchCommand(REDO_COMMAND, undefined), canRedo }

  // bold italic
  const bold = { bold: () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold"), isBold, canBold: true };
  const italic = { italic: () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic"), isItalic, canItalic: true };

  // underline
  const underline = { underline: () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline"), isUnderline, canUnderline: true };

  // headings
  const h1 = () => { };
  const isH1 = (): boolean => { return false };
  const canH1 = (): boolean => { return true };
  const h2 = () => { };
  const isH2 = (): boolean => { return false };
  const canH2 = (): boolean => { return true };
  const h3 = () => { };
  const isH3 = (): boolean => { return false };
  const canH3 = (): boolean => { return true };

  // lists
  const handleOrderedList = () => { };
  const handleBulletList = () => { };

  // indents
  const indentLeft = () => { };
  const isIndentLeft = (): boolean => { return false }
  const canIndentLeft = (): boolean => { return true }
  const indentRight = () => { };
  const isIndentRight = (): boolean => { return false }
  const canIndentRight = (): boolean => { return true }

  // quotes & links
  const quote = () => { };
  const isQuote = (): boolean => { return false };
  const canQuote = (): boolean => { return true };
  const link = () => { };
  const isLink = (): boolean => { return false };
  const canLink = (): boolean => { return true };

  // allignements
  const alignLeft = () => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left");
  const isAlignLeft = (): boolean => { return false };
  const canAlignLeft = (): boolean => { return true };
  const alignCenter = () => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center");
  const isAlignCenter = (): boolean => { return false };
  const canAlignCenter = (): boolean => { return true };
  const alignJustify = () => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify");
  const isAlignJustify = (): boolean => { return false };
  const canAlignJustify = (): boolean => { return true };
  const alignRight = () => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right");
  const isAlignRight = (): boolean => { return false };
  const canAlignRight = (): boolean => { return true };



  // tables
  const handleTable = () => { };

  return {
    undo,
    redo,
    bold,
    italic,
    underline,
    h1,
    isH1,
    canH1,
    h2,
    isH2,
    canH2,
    h3,
    isH3,
    canH3,
    handleOrderedList,
    handleBulletList,
    indentLeft,
    isIndentLeft,
    canIndentLeft,
    indentRight,
    isIndentRight,
    canIndentRight,
    quote,
    isQuote,
    canQuote,
    link,
    isLink,
    canLink,
    alignLeft,
    canAlignLeft,
    isAlignLeft,
    alignCenter,
    canAlignCenter,
    isAlignCenter,
    alignJustify,
    canAlignJustify,
    isAlignJustify,
    alignRight,
    canAlignRight,
    isAlignRight,
    handleTable,
  };
};