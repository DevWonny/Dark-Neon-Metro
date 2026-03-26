import { useState } from "react";

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

export default function SelectorDropdown(type: string) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState(-1);

  return (
    <div className="line-selector-container relative">
      <button></button>

      <ul></ul>
    </div>
  );
}
