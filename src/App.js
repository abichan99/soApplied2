/* eslint-disable */

import { useState } from 'react';
import './App.css';

import UserSelectionForm from './components/userSelectionForm';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        앉아가자
      </h1>
      <h4 className="text-xl font-bold">
        앉아서 갈 확률이 높은 칸을 추천합니다
      </h4>
      <UserSelectionForm/>
    </div>
  );
}

export default App;
