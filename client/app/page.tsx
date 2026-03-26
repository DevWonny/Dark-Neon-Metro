/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
// component
import Timer from "@/components/timer";
import LineSelector from "@/components/lineSelector";

// type
import { OriginStationData, StationData } from "@/types/station";
// utils
import transformStationData from "@/utils/transformStationData";

export default function Main() {
  const [line, setLine] = useState("1호선");
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

  useEffect(() => {
    const initData = async () => {
      await subwayStationData(line);
    };

    initData();
  }, [line]);

  return (
    <div className="relative w-screen h-screen">
      {/* 각 컴포넌트 위치는 나중에 노선 등이 나오면 잡기 */}
      <Timer />
      <LineSelector stationData={stationList} />
    </div>
  );
}
