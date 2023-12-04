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
  return (
    <div>
      { station(dummyData.seats[0]) }
      { station(dummyData.seats[1]) }
      { station(dummyData.seats[2]) }
      <p> { dataToRecommend } </p>
    </div>
  );
}

export default ResultView;

function station(resultStation) {
    const stationName = resultStation.name;
    return (
        <div>
          <h1
            className="text-xl font-bold ck mb-2 text-gray-900 dark:text-white"
          >
            { stationName }
          </h1>
          { car(resultStation.results[0]) }
          { car(resultStation.results[1]) }
          { car(resultStation.results[2]) }
        </div>
    );
}
function car(resultCar) {
    return (
        <div className="flex justify-center">
          <p className="mx-4">{ resultCar.car }</p>
          <p className="mx-4">{ resultCar.result }</p>
        </div>
    )
}