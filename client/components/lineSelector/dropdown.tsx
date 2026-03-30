import { useState } from "react";
// type
import { SubwayLineType, getLineColor } from "@/constants/subway";
import { StationData } from "@/types/station";
// style
import "@/styles/components/dropdown.scss";
import { ChevronDown } from "lucide-react";
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

  const className = (item: unknown) => {
    if (!item) return "";

    // Type 체크
    if (typeof item === "object" && "name" in item) {
      return "station";
    }

    if (typeof item === "object" && "label" in item) {
      return "line";
    }

    return "";
  };

  const getLabel = (item: unknown): string => {
    if (!item) return "";

    // type 체크 진행
    if (typeof item === "object" && "name" in item) {
      return item.name as string;
    }

    if (typeof item === "object" && "label" in item) {
      return item.label as string;
    }

    return "";
  };

  const onSelectClick = (item: unknown): string | SubwayLineType => {
    if (!item) return "";

    // Type 체크
    if (typeof item === "object" && "name" in item) {
      return item.name as string;
    }

    if (typeof item === "object" && "label" in item) {
      return item as SubwayLineType;
    }

    return "";
  };

  return (
    <div className="line-selector-container relative">
      <button
        className="cursor-pointer w-full h-full flex items-center justify-between"
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="dropdown-menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{getLabel(items[dropdownIndex])}</p>
        <ChevronDown className={`icon-down ${isOpen && "rotate"}`} />
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
                onSelect(onSelectClick(item));
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
