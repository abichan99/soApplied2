/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { LINES, INFO_EACH_LINE } from './components/subwayInfo';
import { DROPDOWN_LIST_VALS } from './components/userSelectionForm';
import { limitedDestinationList } from './components/funcs_js/limitDestinations';

test('초기화면 선택지', () => {
  const {container} = render(<App />);
  checkOptVal(container, ["default", "default", "default", "default"]);
  checkOptions([["default"].concat(LINES), ["default"], ["default"], ["default"]], container);
});
test('호선 선택 후 선택지', () => {
  const {container} = render(<App />);
  const line = "1호선";
  selectOptions(container, [line]);
  checkOptVal(container, [line, "default", "default", "default"]);
  checkOptions([["default"].concat(LINES), ["default"].concat(INFO_EACH_LINE[line].directions), ["default"], ["default"]], container);
});
test('방향 선택 후 선택지', () => {
  const {container} = render(<App />);
  const [line, direction] = ["1호선", "인천역방면", "default", "default"]; 
  selectOptions(container, [line, direction]);
  checkOptVal(container, [line, direction, "default", "default"]);
  checkOptions([["default"].concat(LINES), ["default"].concat(INFO_EACH_LINE[line].directions), ["default"].concat(INFO_EACH_LINE[line].stations[direction]), ["default"]], container);
});
test('승차역 선택 후 선택지', () => {
  const {container} = render(<App />);
  const [line, direction, departureStation] = ["1호선", "인천역방면", "회기"]; 
  selectOptions(container, [line, direction, departureStation]);
  checkOptVal(container, [line, direction, departureStation, "default"]);
  const destStationsExpect = limitedDestinationList(line, direction, departureStation);
  checkOptions([["default"].concat(LINES), ["default"].concat(INFO_EACH_LINE[line].directions), ["default"].concat(INFO_EACH_LINE[line].stations[direction]), ["default"].concat(destStationsExpect)], container);
});
test('하차역 선택 후 선택지', () => {
  const {container} = render(<App />);
  const [line, direction, departureStation, destStation] = ["1호선", "인천역방면", "회기", "종각"]; 
  selectOptions(container, [line, direction, departureStation, destStation]);
  checkOptVal(container, [line, direction, departureStation, destStation]);
  const destStationsExpect = limitedDestinationList(line, direction, departureStation);
  checkOptions([["default"].concat(LINES), ["default"].concat(INFO_EACH_LINE[line].directions), ["default"].concat(INFO_EACH_LINE[line].stations[direction]), ["default"].concat(destStationsExpect)], container);
});
test('승차역으로 종점 선택 시 하차역 선택지가 default값 밖에 없는지 확인', () => {
  const {container} = render(<App />);
  const [line, direction, departureStation] = ["1호선", "인천역방면", "인천"]; 
  selectOptions(container, [line, direction, departureStation]);
  checkOptVal(container, [line, direction, departureStation, "default"]);
  const destStationsExpect = limitedDestinationList(line, direction, departureStation);
  checkOptions([["default"].concat(LINES), ["default"].concat(INFO_EACH_LINE[line].directions), ["default"].concat(INFO_EACH_LINE[line].stations[direction]), ["default"].concat(destStationsExpect)], container);
});
test('호선 재선택시 선택지 초기화', () => {
  const {container} = render(<App />);
  const [line, direction, departureStation, destStation] = ["1호선", "인천역방면", "회기", "종각"]; 
  selectOptions(container, [line, direction, departureStation, destStation]);
  selectOptions(container, ["2호선"]);
  checkOptVal(container, ["2호선", "default", "default", "default"]);
  checkOptions([["default"].concat(LINES), ["default"].concat(INFO_EACH_LINE["2호선"].directions), ["default"], ["default"]], container);
});
test('방향 재선택시 선택지 초기화', () => {
  const {container} = render(<App />);
  const [line, direction, departureStation, destStation] = ["1호선", "인천역방면", "회기", "종각"]; 
  selectOptions(container, [line, direction, departureStation, destStation]);
  selectOptions(container, ["2호선", "성수역방면"]);
  checkOptVal(container, ["2호선", "성수역방면", "default", "default"]);
  checkOptions([["default"].concat(LINES), ["default"].concat(INFO_EACH_LINE["2호선"].directions), ["default"].concat(INFO_EACH_LINE["2호선"].stations["성수역방면"]), ["default"]], container);
});
test('출발역 재선택시 선택지 초기화', () => {
  const {container} = render(<App />);
  const [line, direction, departureStation, destStation] = ["1호선", "인천역방면", "회기", "종각"]; 
  selectOptions(container, [line, direction, departureStation, destStation]);
  selectOptions(container, ["2호선", "성수역방면", "용답"]);
  checkOptVal(container, ["2호선", "성수역방면", "용답", "default"]);
  const destStationsExpect = limitedDestinationList("2호선", "성수역방면", "용답");
  checkOptions([["default"].concat(LINES), ["default"].concat(INFO_EACH_LINE["2호선"].directions), ["default"].concat(INFO_EACH_LINE["2호선"].stations["성수역방면"]), ["default"].concat(destStationsExpect)], container);
});

function selectOptions(container, optList) {
  const [lineSelectElem, directionSelectElem, departureSelectElem, destStationSelectElem] = getSelectElems(container);
  if (optList[0]===undefined) {
    return;
  }
  fireEvent.change(lineSelectElem, { target: { value: optList[0] } });
  if (optList[1]===undefined) {
    return;
  }
  fireEvent.change(directionSelectElem, { target: { value: optList[1] } });
  if (optList[2]===undefined) {
    return;
  }
  fireEvent.change(departureSelectElem, { target: { value: optList[2] } });
  if (optList[3]===undefined) {
    return;
  }
  fireEvent.change(destStationSelectElem, { target: { value: optList[3] } });
}
/**
 * 
 * @param {Array} optValList 각 선택지 별 선택된 욥션의 value 기댓값
*/
function checkOptVal(container, optValList) {
  const [lineSelectElem, directionSelectElem, departureStationSelectElem, destStationSelectElem] = getSelectElems(container);
  if (!lineSelectElem.value){ console.log("expected: " + optValList[0] + "  , received: " + lineSelectElem.value) };
  if (!directionSelectElem.value){ console.log("expected: " + optValList[1] + "  , received: " + directionSelectElem.value) };
  if (!departureStationSelectElem.value){ console.log("expected: " + optValList[2] + "  , received: " + departureStationSelectElem.value) };
  if (!destStationSelectElem.value){ console.log("expected: " + optValList[3] + "  , received: " + destStationSelectElem.value) };
  expect(lineSelectElem.value).toBe(optValList[0]);
  expect(directionSelectElem.value).toBe(optValList[1]);
  expect(departureStationSelectElem.value).toBe(optValList[2]);
  expect(destStationSelectElem.value).toBe(optValList[3]);
}
/**
 * 
 * @param {Array} expectedOptList 각 드롭다운에 따른 선택지 옵션의 value 배열
 * @returns 
 */
function checkOptions(expectedOptList, container) {
  const optValLists = getOptValLists(container);
  const result = compareLists(expectedOptList, optValLists);
  expect(result).toBe(true);
}
/**
 * 
 * @param {*} container 
 * @returns [호선 선택지 value 배열, 방향 선택지 value 배열, 승차역 선택지 value 배열, 하차역 선택지 value 배열]
 */
function getOptValLists(container) {
  const elemList = getSelectElems(container);
  const optValLists = [];
  for (let i = 0; i < elemList.length; i++) {
    const optValList = [];
    const selectElem = elemList[i];
    for (let j = 0; j < selectElem.length; j++) {
      const optVal = selectElem.options[j].value;
      optValList.push(optVal);
    }
    optValLists.push(optValList);
  }
  return optValLists;
}
function getSelectElems(container) {
  return [container.querySelector("#"+DROPDOWN_LIST_VALS.line.id), container.querySelector("#"+DROPDOWN_LIST_VALS.direction.id),
          container.querySelector("#"+DROPDOWN_LIST_VALS.departureStation.id), container.querySelector("#"+DROPDOWN_LIST_VALS.destStation.id)];
}
function compareLists(l1, l2) {
  for (let i = 0; i < l1.length; i++) {
    const elemL1 = l1[i];
    const elemL2 = l2[i];
    if (!compareList(elemL1, elemL2)) {
      console.log("expected: ");
      console.log(elemL1);
      console.log("received: ");
      console.log(elemL2);
      return false;
    }
  }
  return true;
}
function compareList(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i)
    if (a[i] !== b[i]) {
    return false;
    }

  return true;
}