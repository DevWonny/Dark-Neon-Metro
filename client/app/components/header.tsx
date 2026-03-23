import { useState, useEffect } from "react";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function Header() {
  const [now, setNow] = useState(dayjs().tz("Asia/Seoul"));

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(dayjs().tz("Asia/Seoul"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="w-full flex items-center justify-between">
      <div className="logo">Dark Neon Metro</div>
      <aside className="time-container">
        <p>{now.format("YYYY-MM-DD HH:mm:ss")}</p>
      </aside>
    </header>
  );
}
