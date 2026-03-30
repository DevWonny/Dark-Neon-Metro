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
  onSelectLine: (line: SubwayLineType) => void;
  onSelectStation: (station: string) => void;
}

export default function LineSelector({
  stationData,
  onSelectLine,
  onSelectStation,
}: propsData) {
  return (
    <aside className="line-selector-container absolute">
      <div className="station-dropdown-container flex gap-[20px]">
        {/* 호선 선택 */}
        <SelectorDropdown
          items={SUBWAY_LINES}
          onSelect={(item) => onSelectLine(item as SubwayLineType)}
        ></SelectorDropdown>
        {/* 역 선택 */}
        <SelectorDropdown
          items={stationData}
          onSelect={(item) => onSelectStation(item as string)}
        ></SelectorDropdown>
      </div>
    </aside>
  );
}
