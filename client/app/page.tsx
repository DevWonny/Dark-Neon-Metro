/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";

export default function Main() {
  const [line, setLine] = useState("1호선");
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

  return (
    <div>
      <button onClick={fetchData}>Click</button>
    </div>
  );
}
