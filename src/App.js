/* eslint-disable */

import { useState } from "react";
import "./App.css";

import UserSelectionForm from "./components/userSelectionForm";
import ResultView from "./components/resultView";

function App() {
  return (
    <div className="App">
      <div className="Header flex-wrap justify-start items-center  pt-3 pb-3 mb-5 bg-customText text-slate-100">
        <h1 className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold px-10">
          오늘도 고생하니까, 앉아가자
        </h1>
      </div>
      <ResultView />
      <UserSelectionForm />
    </div>
  );
}

export default App;
