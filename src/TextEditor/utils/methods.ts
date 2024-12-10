export default function editorHandler() {
  // undo & redo
  const undo = () => { }
  const canUndo = (): boolean => { return true };
  const redo = () => { }
  const canRedo = (): boolean => { return true };

  // bold
  const bold = () => { };
  const canBold = (): boolean => { return true };
  const isBold = (): boolean => { return false };

  // italic
  const italic = () => { };
  const canItalic = (): boolean => { return true };
  const isItalic = (): boolean => { return true };

  // underline
  const underline = () => { };
  const canUnderline = (): boolean => { return true };
  const isUnderline = (): boolean => { return true };

  // headings
  const handleH1 = () => { };
  const handleH2 = () => { };
  const handleH3 = () => { };

  // lists
  const handleOrderedList = () => { };
  const handleBulletList = () => { };

  // indents
  const handleIndentLeft = () => { };
  const handleIndentRight = () => { };

  // quotes & links
  const handleQuote = () => { };
  const handleLink = () => { };

  // tables
  const handleTable = () => { };

  return {
    undo,
    canUndo,
    redo,
    canRedo,
    bold,
    canBold,
    isBold,
    italic,
    canItalic,
    isItalic,
    underline,
    canUnderline,
    isUnderline,
    handleH1,
    handleH2,
    handleH3,
    handleOrderedList,
    handleBulletList,
    handleIndentLeft,
    handleIndentRight,
    handleQuote,
    handleLink,
    handleTable,
  };
};