import { useState } from "react";
// type
import { StationData } from "@/types/station";
import { SubwayLineType, SUBWAY_LINES } from "@/constants/subway";
// component
import SelectorDropdown from "./dropdown";
// style
import "@/styles/components/lineSelector.scss";
interface propsData {
  stationData: StationData[];
}

export default function LineSelector({ stationData }: propsData) {
  // console.log("🚀 ~ LineSelector ~ stationData:", stationData);
  const [isLineOpen, setIsLineOpen] = useState(false);
  const [lineIndex, setLineIndex] = useState(-1);
  const [isStationOpen, setIsStationOpen] = useState(false);
  const [stationIndex, setStationIndex] = useState(-1);

  return (
    <aside className="line-selector-container absolute">
      <div className="station-dropdown-container">
        {/* 호선 선택 */}
        <SelectorDropdown items={SUBWAY_LINES}></SelectorDropdown>
        {/* 역 선택 */}
        <SelectorDropdown items={stationData}></SelectorDropdown>
      </div>
    </aside>
  );
}
