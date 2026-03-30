/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
// component
import Timer from "@/components/timer";
import LineSelector from "@/components/lineSelector";

// type
import { OriginStationData, StationData } from "@/types/station";
import { SUBWAY_LINES, SubwayLineType } from "@/constants/subway";
// utils
import transformStationData from "@/utils/transformStationData";

export default function Main() {
  const [line, setLine] = useState<SubwayLineType>(SUBWAY_LINES[0]);
  const [station, setStation] = useState("신림");
  const [data, setData] = useState<any>(null);
  const [stationList, setStationList] = useState<StationData[]>([]); // 호선별 역 리스트

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/subway/${line}`);
      const data = await response.json();
      setData(data);
      console.log("🚀 ~ fetchData ~ data:", data);
    } catch (error) {
      console.log("🚀 ~ fetchData ~ error:", error);
    }
  };

  const testData = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/subwayArrival/${station}`,
      );

      const data = await response.json();
      console.log("🚀 ~ testData ~ data:", data);
    } catch (error) {
      console.log("🚀 ~ testData ~ e:", error);
    }
  };

  const subwayStationData = async (line: string) => {
    console.log("🚀 ~ subwayStationData ~ line:", line);
    try {
      const response = await fetch(
        `http://localhost:4000/api/subwayStation/${line}`,
      );

      const data: OriginStationData[] = await response.json();

      setStationList(transformStationData(data));
    } catch (err) {
      console.log("🚀 ~ subwayStationData ~ err:", err);
    }
  };

  // 호선 변경
  const onSelectLine = (line: SubwayLineType) => {
    setLine(line);
  };

  // 역 변경
  const onSelectStation = (station: string) => {
    console.log("🚀 ~ onSelectStation ~ station:", station);
  };

  useEffect(() => {
    const initData = async () => {
      console.log("test", line);
      await subwayStationData(line.label);
    };

    initData();
  }, [line]);

  return (
    <div className="relative w-screen h-screen">
      {/* 각 컴포넌트 위치는 나중에 노선 등이 나오면 잡기 */}
      <Timer />
      <LineSelector
        stationData={stationList}
        onSelectLine={onSelectLine}
        onSelectStation={onSelectStation}
      />
    </div>
  );
}
