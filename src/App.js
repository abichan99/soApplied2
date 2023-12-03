/* eslint-disable */
import "./App.css";
import React, { useState } from "react";

import UserSelectionForm from "./components/userSelectionForm";
import ResultView from "./components/resultView";

function App() {
  const [dataToRecommend, setDataToRecommend] = useState("共有する値");
  const updateData = (newValue) => {
    setDataToRecommend(newValue);
  };
  return (
    <div className="App">
      <div className="Header flex-wrap justify-start items-center  pt-3 pb-3 mb-5 bg-customText text-slate-100">
        <h1 className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold px-10">
          오늘도 고생하니까, 앉아가자
        </h1>
      </div>
      <div className="flex">
        <div className="w-1/2">
          {/* 왼쪽에 표시될 컴포넌트 */}
          <UserSelectionForm updateData={updateData}/>
        </div>
        <div className="w-1/2">
          {/* 오른쪽에 표시될 컴포넌트 */}
          <ResultView dataToRecommend={dataToRecommend}/>
        </div>
      </div>
    </div>
  );
}

export default App;
