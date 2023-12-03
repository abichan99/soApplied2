import React from "react";

const dummyData = {
  seats: [
      {
          "results": [
              {
                  "result": 45,
                  "car": 9
              },
              {
                  "result": 53,
                  "car": 6
              },
              {
                  "result": 58,
                  "car": 10
              }
          ],
          "name": "시청역"
      },
      {
          "results": [
              {
                  "result": 66,
                  "car": 10
              },
              {
                  "result": 69,
                  "car": 9
              },
              {
                  "result": 85,
                  "car": 8
              }
          ],
          "name": "청량리역"
      },
      {
          "results": [
              {
                  "result": 72,
                  "car": 6
              },
              {
                  "result": 73,
                  "car": 10
              },
              {
                  "result": 81,
                  "car": 9
              }
          ],
          "name": "제기동역"
      }
  ]
}

function ResultView({ dataToRecommend }) {
  const parameter = dataToRecommend;
  return (
    <div>
      <h1>아래 내용은 결과 출력 예시</h1>
      <h1>1순위 : 3번쨰 칸</h1>
      <h1>2순위 : 7번쨰 칸</h1>
      <h1>3순위 : 4번째 칸</h1>
      <p>{ parameter }</p>
    </div>
  );
}

export default ResultView;
