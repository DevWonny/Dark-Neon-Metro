import { useState } from "react";
// type
import { StationData } from "@/types/station";
// component
import SelectorDropdown from "./dropdown";
// style
import "@/styles/components/lineSelector.scss";
interface propsData {
  stationData: StationData[];
}

export default function LineSelector({ stationData }: propsData) {
  const [isLineOpen, setIsLineOpen] = useState(false);
  const [lineIndex, setLineIndex] = useState(-1);
  const [isStationOpen, setIsStationOpen] = useState(false);
  const [stationIndex, setStationIndex] = useState(-1);

  return (
    <aside className="line-selector-container absolute">
      <div className="station-dropdown-container">
        <SelectorDropdown type="test"></SelectorDropdown>
        <SelectorDropdown type="test"></SelectorDropdown>
      </div>
    </aside>
  );
}
