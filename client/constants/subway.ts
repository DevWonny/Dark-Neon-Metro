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
  1092: '#BFFF00',// * 우이신설선
  1032: '#9E9E9E',// * GTX-A
}

export const getLineColor = (lineId: string) => {
  return SUBWAY_NEON_COLORS[lineId] || '#fff'
}
