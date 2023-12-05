import React from "react";
const rank = {
  LOW: "쾌적",
  MIDDLE: "보통",
  HIGH: "혼잡",
};

const getColorClass = (rank) => {
  switch (rank) {
    case "LOW":
      return "bg-green-500"; // GREEN
    case "MIDDLE":
      return "bg-yellow-500"; // YELLOW
    case "HIGH":
      return "bg-red-500"; // RED
    default:
      return "bg-gray-500"; // GRAY
  }
};

function ResultView({ dataToRecommend }) {
  return (
    <div>
      <p className="text-2xl font-bold ck mb-2 text-customText dark:text-customText">
        추천 역 및 칸
      </p>
      {stationComponent(dataToRecommend.seats[0])}
      {stationComponent(dataToRecommend.seats[1])}
      {stationComponent(dataToRecommend.seats[2])}
    </div>
  );
}

export default ResultView;

function stationComponent(resultStation) {
  const stationName = resultStation.name;
  return (
    <div className="mb-8">
      <h1 className="text-xl font-bold ck mb-2 text-customText dark:text-customText">
        {stationName}
      </h1>
      {carComponent(resultStation.recommendCars[0])}
      {carComponent(resultStation.recommendCars[1])}
      {carComponent(resultStation.recommendCars[2])}
      <div className="justify-center flex mt-8">
        <div className="flex h-7 w-80 ">
          {[...Array(10).keys()].map((index) => (
            <div
              key={index}
              className={`w-[calc(100%/10)] h-full ${getColorClass(
                resultStation.totalCars[index].rank
              )}`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function carComponent(resultCar) {
  return (
    <div className="flex justify-center">
      <p className="mx-4 text-customText text-lg font-bold">
        {resultCar.car + "량"}
      </p>
      <p className="mx-4 text-customText text-lg font-bold">
        {rank[resultCar.rank]}
      </p>
    </div>
  );
}
