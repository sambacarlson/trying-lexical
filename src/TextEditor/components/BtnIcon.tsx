import { MouseEvent } from "react";
import { IconToolNameType, setIconValue } from "../toolbar/tools";

const BtnIcon = (props: {
  onPress: () => void;
  name: IconToolNameType;
  active?: boolean;
  disabled?: boolean;
  setIcon?: string;
}) => {
  let iconValue = props.setIcon || setIconValue(props.name);

  const handlePress = (event: MouseEvent) => {
    !props.disabled && props.onPress();
    props.disabled && event.stopPropagation();
  };
  return (
    <button
      onClick={(e) => handlePress(e)}
      className={`${props.active && "bg-blue-200"} ${
        props.disabled ? "text-black/50" : "hover:border-blue-600"
      } ${
        props.setIcon ? "p-1 w-full" : "h-6 w-6 justify-center"
      }  border border-blue-300 rounded-md  text-black duration-300 font-mono -tracking-[.05rem] flex items-center`}
    >
      <div
        dangerouslySetInnerHTML={{ __html: iconValue }}
        className="leading-none flex items-center justify-center"
      />
    </button>
  );
};

export default BtnIcon;
