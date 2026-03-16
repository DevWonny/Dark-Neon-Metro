/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";

export default function Main() {
  const [line, setLine] = useState("2호선");
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

  return (
    <div className="flex flex-col">
      <button onClick={fetchData}>Click</button>

      <button onClick={testData}>TEST2</button>
    </div>
  );
}
