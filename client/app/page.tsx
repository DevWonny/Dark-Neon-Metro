/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
// component
import Timer from "@/components/timer";
import LineSelector from "@/components/lineSelector";

export default function Main() {
  const [line, setLine] = useState("");
  const [station, setStation] = useState("신림");
  const [data, setData] = useState<any>(null);

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

      const data = await response.json();
      console.log("🚀 ~ subwayStationData ~ data:", data);
    } catch (err) {
      console.log("🚀 ~ subwayStationData ~ err:", err);
    }
  };

  // useEffect(() => {
  //   console.log("🚀 ~ Main ~ stations:", stations);
  // }, [stations]);

  return (
    <div className="relative w-screen h-screen">
      {/* 각 컴포넌트 위치는 나중에 노선 등이 나오면 잡기 */}
      <Timer />
      <LineSelector />
      <button
        className="cursor-pointer text-3xl absolute "
        onClick={() => subwayStationData("1호선")}
      >
        TEST
      </button>
    </div>
  );
}
