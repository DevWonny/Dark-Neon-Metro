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
  // 라인별 색상, 역은 흰색으로
  const lineColor = (item: unknown) => {
    if (!item) return "#fff";

    if (typeof item === "object" && "name" in item) {
      return "#fff";
    }
    if (typeof item === "object" && "code" in item) {
      return getLineColor(item.code as string);
    }

    return "#fff";
  };

  // 화면에 표출될 라벨
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

  // 라인 or 역 선택시 호출(라인을 object로 넘기기 위해 활용)
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
        <p
          style={
            {
              color: lineColor(items[dropdownIndex]),
              "--active": lineColor(items[dropdownIndex]),
            } as React.CSSProperties
          }
          className={` ${lineColor(items[dropdownIndex]) !== "#fff" && "active"}`}
        >
          {getLabel(items[dropdownIndex])}
        </p>
        <ChevronDown className={`icon-down ${isOpen && "rotate"}`} />
      </button>

      {isOpen && (
        <ul
          className="absolute w-full"
          id="dropdown-menu"
          role="listbox"
          aria-label="selector-label"
        >
          {items.map((item, index) => (
            <li
              key={`line-selector-dropdown-${getLabel(items[dropdownIndex])}-${index}`}
              className={`w-full ${dropdownIndex === index && "active"}`}
              style={{
                color:
                  dropdownIndex === index
                    ? lineColor(items[dropdownIndex])
                    : "#fff",
              }}
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
