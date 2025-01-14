import React, { ReactNode, MouseEvent } from "react";
import ClickAwayListener from "./ClickAwayListener";

/**
 * Drop down with ReactNode as options.
 * @param {ReactNode[]} options - Array of ReactNode to display in the dropdown. Each Option should define it's own onClick method
 * @param {ReactNode} defaultOoption - Default ReactNode to be selected. should also define it's own onClick handler
 * @returns void
 */
export default function ToolDropdown({
  options,
  defaultOption,
  dropDownDirection,
}: {
  options: ReactNode[];
  defaultOption?: ReactNode;
  dropDownDirection?: "horizontal" | "vertical";
}) {
  const [selected, setSelected] = React.useState<ReactNode>(
    defaultOption || <span className="px-3 py-3"></span>
  );
  const [showDropdown, setShowDropdown] = React.useState<boolean>(false);
  return (
    <ClickAwayListener
      onClickAway={() => {
        setShowDropdown(false);
      }}
    >
      <div className="relative flex cursor-pointer w-fit rounded-md p-1">
        <span
          onClick={() => {
            if (!options.includes(selected) && options.length) {
              setShowDropdown(true);
            } else {
              setShowDropdown(false);
            }
          }}
          className="relative flex items-center justify-center"
        >
          {selected}
        </span>
        <span
          onClick={() => {
            setShowDropdown(!showDropdown);
          }}
          className={`${
            showDropdown && "rotate-180"
          } hover:rotate-45 duration-300 flex flex-col items-center justify-end flex-1`}
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
          className={`${!showDropdown && "hidden"} ${
            dropDownDirection === "horizontal"
              ? "flex-row py-2 px-1"
              : "flex-col py-1 px-2"
          } absolute z-[1] top-[100%] left-0 bg-slate-100 rounded-md flex gap-1 min-w-full`}
        >
          {options.map((value, index) => (
            <span
              onClick={() => {
                setSelected(value);
                setShowDropdown(false);
              }}
              key={index}
              className="whitespace-nowrap rounded-md flex-col"
            >
              {value}
            </span>
          ))}
        </div>
      </div>
    </ClickAwayListener>
  );
}
