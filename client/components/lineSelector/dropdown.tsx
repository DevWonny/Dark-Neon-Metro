import { useState } from "react";

interface dropdownProps {
  type: string;
}
interface Option {
  id: string;
  label: string;
}

const testOptions: Option[] = [
  { id: "1", label: "test1" },
  { id: "2", label: "test2" },
  { id: "3", label: "test3" },
  { id: "4", label: "test4" },
  { id: "5", label: "test5" },
];

export default function SelectorDropdown({ type }: dropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState(-1);

  return (
    <div className="line-selector-container relative">
      <button
        className="cursor-pointer"
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="dropdown-menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        {dropdownIndex >= 0 ? testOptions[dropdownIndex].label : "Test"}
      </button>

      {isOpen && (
        <ul
          className="absolute"
          id="dropdown-menu"
          role="listbox"
          aria-label="Test"
        >
          {testOptions.map((option, index) => (
            <li
              key={option.id}
              className="cursor-pointer"
              role="option"
              aria-selected={dropdownIndex === index}
              onClick={() => {
                setDropdownIndex(index);
                setIsOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
