import Toolbar from "./toolbar/Toolbar";
import { theme } from "./toolbar/themes";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";

function onError(error: Error) {
  console.error(error);
}

function Editor() {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
  };

  return (
    <div className="min-h-[240px] p-2">
      <LexicalComposer initialConfig={initialConfig}>
        <Toolbar />
        <div className="relative">
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="outline-none min-h-[150px]" />
            }
            placeholder={
              <p className="-z-[1] absolute top-0 left-0 opacity-40">
                Enter some text...
              </p>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
        </div>
        <HistoryPlugin />
      </LexicalComposer>
    </div>
  );
}
export default Editor;
