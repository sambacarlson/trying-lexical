import { IconToolNameType, setIconValue } from "../toolbar/tools";

const BtnIcon = (props: {
  onPress: () => void;
  name: IconToolNameType;
  active?: boolean;
  disabled?: boolean;
  setIcon?: string;
}) => {
  let iconValue = props.setIcon || setIconValue(props.name);

  const handlePress = () => {
    !props.disabled && props.onPress();
  };
  return (
    <button
      onClick={handlePress}
      className={`${props.active && "bg-blue-200"} ${
        props.disabled ? "text-black/50" : "hover:border-blue-600"
      } ${
        props.setIcon ? "p-1" : "h-6 w-6"
      }  border border-blue-300 rounded-md  text-black duration-300 font-mono -tracking-[.05rem]`}
    >
      <div
        dangerouslySetInnerHTML={{ __html: iconValue }}
        className="leading-none flex items-center justify-center"
      />
    </button>
  );
};

export default BtnIcon;
