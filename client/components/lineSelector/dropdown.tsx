import { useState } from "react";
// type
import { SubwayLineType } from "@/constants/subway";
import { StationData } from "@/types/station";
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

interface SelectDropdownType {
  items: readonly SubwayLineType[] | StationData[];
}

export default function SelectorDropdown({ items }: SelectDropdownType) {
  console.log("🚀 ~ SelectorDropdown ~ items:", items);
  console.log(items[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState(0);

  const getLabel = (item: unknown): string => {
    if (!item) return "";

    // type 체크 진행
    if (typeof item === "object" && "name" in item) {
      return item.name as string;
    }

    return String(item);
  };

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
        {getLabel(items[dropdownIndex])}
      </button>

      {isOpen && (
        <ul
          className="absolute "
          id="dropdown-menu"
          role="listbox"
          aria-label="selector-label"
        >
          {items.map((item, index) => (
            <li
              key={`line-selector-dropdown-${getLabel(items[dropdownIndex])}-${index}`}
              onClick={() => {
                setDropdownIndex(index);
                setIsOpen(false);
              }}
            >
              {getLabel(item)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
