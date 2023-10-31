/* eslint-disable */

import { useState } from 'react';
import './App.css';

import UserSelectionForm from './components/userSelectionForm';

function App() {
  return (
    <div className="App">
      <div className="Header flex justify-start pt-3 pb-5 mb-5 bg-blue-400 text-slate-100">
        <h1 className="text-3xl font-bold px-10">
          앉아가자
        </h1>
        <h4 className="text-xl font-bold text-center mr-auto my-auto">
          앉아서 갈 확률이 높은 칸을 추천합니다
        </h4>
      </div>
      <UserSelectionForm/>
    </div>
  );
}

export default App;
