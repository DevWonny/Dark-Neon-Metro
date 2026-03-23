import { useEffect, useState } from "react";
import "@/styles/components/timer.scss";
// dayjs
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
dayjs.extend(timezone);

export default function Timer() {
  const [now, setNow] = useState(dayjs().tz("Asia/Seoul"));

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(dayjs().tz("Asia/Seoul"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <aside className="timer-container absolute flex flex-col items-center justify-center">
      <p className="date text-2xl">{now.format("YYYY-MM-DD")}</p>
      <p className="time text-lg">{now.format("HH:mm:ss")}</p>
      {/* 상태 텍스트 필요 */}
      <p className="server-status text-base flex items-center">
        Server Connected
      </p>
    </aside>
  );
}
