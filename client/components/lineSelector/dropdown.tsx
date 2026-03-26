import { useState } from "react";
// type
import { SubwayLineType } from "@/constants/subway";
import { StationData } from "@/types/station";
interface SelectDropdownType {
  items: readonly SubwayLineType[] | StationData[];
  onSelect: (item: string | SubwayLineType) => void;
}

export default function SelectorDropdown({
  items,
  onSelect,
}: SelectDropdownType) {
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
                onSelect(getLabel(item));
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
