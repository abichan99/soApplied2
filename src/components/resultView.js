import React from "react";

function ResultView(props) {
  const { parameter } = props;
  return (
    <div>
      <h1>아래 내용은 결과 출력 예시</h1>
      <h1>1순위 : 3번쨰 칸</h1>
      <h1>2순위 : 7번쨰 칸</h1>
      <h1>3순위 : 4번째 칸</h1>
      <p>{parameter}</p>
    </div>
  );
}

export default ResultView;
