// type
import { OriginStationData, StationData } from "@/types/station";

export default function transformStationData(originData: OriginStationData[]): StationData[] {
  return originData.map(data => ({ code: data.STATION_CD, name: data.STATION_NM, line: data.LINE_NUM }));
}