import React from "react";
import ClickAwayListener from "./ClickAwayListener";

export default function TextDropdown({
  onSelect,
  options,
  defaultOption,
}: {
  onSelect: (value: string) => void;
  options: string[];
  defaultOption?: string;
}) {
  const [selected, setSelected] = React.useState(defaultOption || "");
  const [showDropdown, setShowDropdoown] = React.useState<boolean>(false);
  return (
    <ClickAwayListener
      onClickAway={() => {
        setShowDropdoown(false);
      }}
    >
      <div className="relative flex [&>*]:p-1 cursor-pointer w-fit rounded-md">
        <span
          onClick={() => {
            onSelect(selected);
          }}
          className=""
        >
          {selected}
        </span>
        <span
          onClick={() => {
            setShowDropdoown(!showDropdown);
          }}
          className={`${
            showDropdown && "rotate-180"
          } hover:rotate-45 duration-300 flex flex-col items-center justify-end`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="m4.427 7.427l3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427"
            />
          </svg>
        </span>
        <div
          className={`${
            !showDropdown && "hidden"
          } absolute top-[100%] border border-black/20 bg-slate-100 rounded-md !px-0 min-w-full flex flex-col`}
        >
          {options.map((value, index) => (
            <span
              key={index + value}
              onClick={() => {
                setShowDropdoown(false);
                setSelected(value);
                onSelect(value);
              }}
              className="whitespace-nowrap p-1 rounded-md hover:bg-black/10"
            >
              {value}
            </span>
          ))}
        </div>
      </div>
    </ClickAwayListener>
  );
}
