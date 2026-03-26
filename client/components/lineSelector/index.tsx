import { useState } from "react";
// style
import "@/styles/components/lineSelector.scss";

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

export default function LineSelector() {
  const [isLineOpen, setIsLineOpen] = useState(false);
  const [lineIndex, setLineIndex] = useState(-1);
  const [isStationOpen, setIsStationOpen] = useState(false);
  const [stationIndex, setStationIndex] = useState(-1);

  return (
    <aside className="line-selector-container absolute">
      <div className="line-dropdown-container relative">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isLineOpen}
          aria-controls="line-dropdown-menu"
          onClick={() => setIsLineOpen(!isLineOpen)}
        >
          {lineIndex >= 0 ? testOptions[lineIndex].label : "선택"}
        </button>

        {isLineOpen && (
          <ul
            className="absolute"
            id="line-dropdown-menu"
            role="listbox"
            aria-label="Test"
          >
            {testOptions.map((option, index) => (
              <li
                key={option.id}
                role="option"
                aria-selected={lineIndex === index}
                onClick={() => {
                  setLineIndex(index);
                  setIsLineOpen(false);
                }}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="station-dropdown-container"></div>
    </aside>
  );
}
