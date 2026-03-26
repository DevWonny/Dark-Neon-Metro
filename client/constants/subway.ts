export const SUBWAY_NEON_COLORS: { [key: string]: string } = {
  1001: "#2E5BFF", // * 1호선
  1002: "#39FF14", // * 2호선
  1003: '#FFB700', // * 3호선
  1004: '#00D4FF', // * 4호선
  1005: '#BF00FF', // * 5호선
  1006: '#FF5E00', // * 6호선
  1007: '#76FF03', // * 7호선
  1008: '#FF007F', // * 8호선
  1009: '#D4AF37', // * 9호선
  1063: '#4FFFB0',// * 경의중앙선
  1065: '#0095FF',// * 공항철도
  1067: '#17EAD9',// * 경춘선
  1075: '#FFD700',// * 수인분당선
  1077: '#FF3131',// * 신분당선
  1092: '#BFFF00',// * 우이신설
  1032: '#9E9E9E',// * GTX-A
  1021: '#00A3FF', // * 인천선
  1028: '#FFD300' // * 인천 2호선
}

export const getLineColor = (lineId: string) => {
  return SUBWAY_NEON_COLORS[lineId] || '#fff'
}


// 호선 종류 
export const SUBWAY_LINES = [
  '1호선', '2호선', '3호선', '4호선', '5호선',
  '6호선', '7호선', '8호선', '9호선', '경의선',
  '공항철도', '경춘', '수인분당', '신분당',
  '우이신설', 'GTX-A', '인천선', '인천2호선'
] as const

// 호선 종류 타입 추출
export type SubwayLineType = typeof SUBWAY_LINES[number];