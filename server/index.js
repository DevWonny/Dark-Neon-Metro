// * Socket.io는 단독으로 실행되기 보다는 http 서버 위에서 동작
// 웹 서버 프레임워크
const express = require("express");
// Node.js 기본 HTTP 모듈
const http = require("http");
const { Server } = require("socket.io");
// 교차 출처 리소스 공유 보안 설정
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
// * 브라우저 보안 정책상 다른 도메인에서 해당 서버로 접근하는것을 허용해주는 설정
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    // * Next 주소
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const SUBWAY_KEY = process.env.SUBWAY_API_KEY;
const NORMAL_KEY = process.env.NORMAL_API_KEY;
const PORT = process.env.PORT;
const URL = "http://swopenAPI.seoul.go.kr/api/subway";

// * 실시간 열차 위치 정보
const getSubwayData = async (line) => {
  try {
    const url = encodeURI(
      `${URL}/${SUBWAY_KEY}/json/realtimePosition/0/5/${line}`,
    );

    const response = await axios.get(url);

    if (response.data.errorMessage.status === 200) {
      return response.data.realtimePositionList;
    }
    return [];
  } catch (error) {
    console.log("API 호출 에러", error);
    return [];
  }
};

// * 실시간 열차 도작 정보
const getSubwayArrivalData = async (station) => {
  try {
    const url = encodeURI(
      `${URL}/${SUBWAY_KEY}/json/realtimeStationArrival/0/5/${station}`,
    );

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
};

app.get("/api/subway/:line", async (req, res) => {
  const { line } = req.params;
  console.log(`${line} 수신 요청`);

  const data = await getSubwayData(line);
  console.log("🚀 ~ data:", data);

  if (data) {
    res.json(data);
  } else {
    res.status(500).json({ error: "데이터를 가져오지 못했습니다." });
  }
});

app.get("/api/subwayArrival/:station", async (req, res) => {
  const { station } = req.params;
  const data = await getSubwayArrivalData(station);

  console.log("🚀 ~ data:", data);
  if (data) {
    res.json(data);
  } else {
    return null;
  }
});

server.listen(PORT, () => {
  console.log(`포트 ${PORT} 작동중`);
});
