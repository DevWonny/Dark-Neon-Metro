// * Server에서 넘어오는 데이터 타입
export interface OriginStationData {
  FR_CODE: string; // 외부 코드
  LINE_NUM: string; // 호선
  STATION_CD: string; // 전철역 코드
  STATION_NM: string; // 전철역 명
  STATION_NM_CHN: string; // 전철역 명(중국어)
  STATION_NM_ENG: string; // 전철역 명(영어)
  STATION_NM_JPN: string; // 전철역 명(일어)
}

// * Client에서 사용할 가공 데이터 타입
export interface StationData {
  code: string, // 전철역 코드
  name: string,// 전철역 명칭(일단 한국어만)
  line: string, // 호선
}