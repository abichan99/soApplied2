import React from "react";

const dummyData = {
    "seats": [
        {
            "name": "청량리역",
            "recommendCars": [
                {
                    "car": 10,
                    "rank": "LOW"
                },
                {
                    "car": 9,
                    "rank": "LOW"
                },
                {
                    "car": 8,
                    "rank": "LOW"
                }
            ],
            "totalCars": [
                {
                    "car": 1,
                    "rank": "LOW"
                },
                {
                    "car": 2,
                    "rank": "LOW"
                },
                {
                    "car": 3,
                    "rank": "LOW"
                },
                {
                    "car": 4,
                    "rank": "LOW"
                },
                {
                    "car": 5,
                    "rank": "LOW"
                },
                {
                    "car": 6,
                    "rank": "LOW"
                },
                {
                    "car": 7,
                    "rank": "LOW"
                },
                {
                    "car": 8,
                    "rank": "LOW"
                },
                {
                    "car": 9,
                    "rank": "LOW"
                },
                {
                    "car": 10,
                    "rank": "LOW"
                }
            ]
        },
        {
            "name": "제기동역",
            "recommendCars": [
                {
                    "car": 1,
                    "rank": "LOW"
                },
                {
                    "car": 9,
                    "rank": "LOW"
                },
                {
                    "car": 8,
                    "rank": "MIDDLE"
                }
            ],
            "totalCars": [
                {
                    "car": 1,
                    "rank": "LOW"
                },
                {
                    "car": 2,
                    "rank": "LOW"
                },
                {
                    "car": 3,
                    "rank": "LOW"
                },
                {
                    "car": 4,
                    "rank": "LOW"
                },
                {
                    "car": 5,
                    "rank": "LOW"
                },
                {
                    "car": 6,
                    "rank": "LOW"
                },
                {
                    "car": 7,
                    "rank": "LOW"
                },
                {
                    "car": 8,
                    "rank": "LOW"
                },
                {
                    "car": 9,
                    "rank": "LOW"
                },
                {
                    "car": 10,
                    "rank": "LOW"
                }
            ]
        },
        {
            "name": "신설동역",
            "recommendCars": [
                {
                    "car": 10,
                    "rank": "LOW"
                },
                {
                    "car": 9,
                    "rank": "LOW"
                },
                {
                    "car": 8,
                    "rank": "LOW"
                }
            ],
            "totalCars": [
                {
                    "car": 1,
                    "rank": "LOW"
                },
                {
                    "car": 2,
                    "rank": "LOW"
                },
                {
                    "car": 3,
                    "rank": "LOW"
                },
                {
                    "car": 4,
                    "rank": "LOW"
                },
                {
                    "car": 5,
                    "rank": "LOW"
                },
                {
                    "car": 6,
                    "rank": "LOW"
                },
                {
                    "car": 7,
                    "rank": "LOW"
                },
                {
                    "car": 8,
                    "rank": "LOW"
                },
                {
                    "car": 9,
                    "rank": "LOW"
                },
                {
                    "car": 10,
                    "rank": "LOW"
                }
            ]
        }
    ]
}
const rank = {
    "LOW": "쾌적",
    "MIDDLE": "보통",
    "HIGH": "혼잡",
}

function ResultView({ dataToRecommend }) {
  return (
    <div>
      <p
        className="text-2xl font-bold ck mb-2 text-gray-900 dark:text-white"
      >
        추천 역 및 칸
      </p>
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
        <div className="mb-8">
          <h1
            className="text-xl font-bold ck mb-2 text-gray-900 dark:text-white"
          >
            { stationName }
          </h1>
          { car(resultStation.recommendCars[0]) }
          { car(resultStation.recommendCars[1]) }
          { car(resultStation.recommendCars[2]) }
        </div>
    );
}
function car(resultCar) {
    return (
        <div className="flex justify-center">
          <p className="mx-4 text-customText text-lg font-bold">{ resultCar.car+"량" }</p>
          <p className="mx-4 text-customText text-lg font-bold">{ rank[resultCar.rank] }</p>
        </div>
    )
}