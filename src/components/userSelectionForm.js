import React from 'react';
import { LINES, INFO_EACH_LINE } from './subwayInfo';
import { limitedDestinationList } from './funcs_js/limitDestinations';
import { validateOptVal } from './funcs_js/validators';

// 드롭다운 리스트 선택지 동적생성 시 사용하는 변수들
export const DROPDOWN_LIST_VALS = {
    // 사용자에게 입력받을값: {label: 사용자에게 표시될 라벨, id: 생성될 코드 속 셀렉트 요소의 아이디, optInitVal: 선택지 디폴드값}
    line: {label: "select a line", id: "line-list", optInitVal: "호선을 선택"},
    direction: {label: "select a direction", id: "direction-list", optInitVal: "방향을 선택"},
    departureStation: {label: "select a departure station", id: "departure-station-list", optInitVal: "출발역을 선택"},
    destStation: {label: "select a destination station", id: "destination-station-list", optInitVal: "종착역을 선택"},
};

class UserSelectionForm extends React.Component {
    render(){
        return (
            <div>
                {/* 사용자 입력란 (template: https://flowbite.com/docs/components/forms/)*/}
                <form className="inline-flex flex-col">
                    {/* 선택된 호선과 방향에 따라 출발역,호선역 선택지를 동적으로 생성
                        출발역에 따라 도착역 선택지를 제한
                        submit시 값을 validate
                            1. 선택안된 부분이 있으면 에러*/}
                    <DropdownList vals={DROPDOWN_LIST_VALS.line} options={LINES} onChangeMode={()=>{setOptionsByLine(document.getElementById(DROPDOWN_LIST_VALS.line.id).value)}}></DropdownList>
                    <DropdownList vals={DROPDOWN_LIST_VALS.direction} options="" onChangeMode={()=>{setOptionsByDirection(document.getElementById(DROPDOWN_LIST_VALS.line.id).value, document.getElementById(DROPDOWN_LIST_VALS.direction.id).value)}}></DropdownList>
                    <DropdownList vals={DROPDOWN_LIST_VALS.departureStation} options="" onChangeMode={()=>{setOptionsByDepartureStation(document.getElementById(DROPDOWN_LIST_VALS.line.id).value, document.getElementById(DROPDOWN_LIST_VALS.direction.id).value, document.getElementById(DROPDOWN_LIST_VALS.departureStation.id).value)}}></DropdownList>
                    <DropdownList vals={DROPDOWN_LIST_VALS.destStation} options="" onChangeMode={()=>{}}></DropdownList>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">검색</button>
                </form>
            </div>
        );
    }
}
/**
 * 
 * @param {*} props dropdownListVals의 value값 중 하나
 * @returns 
 */
function DropdownList(props) {
    // dropdown list의 선택지 동적 생성
    let optionsHTML = [];
    for (let i = 0; i < props.options.length; i++) {
        const opt = props.options[i];
        optionsHTML.push(<option key={opt} value={opt}>{opt}</option>);
    }
    return (
        <div className="hs-dropdown relative inline-flex flex-col">
            <label htmlFor="repeat-password" className="text-xl font-bold ck mb-2 text-gray-900 dark:text-white">{props.vals.label}</label>
            <select id={props.vals.id} className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                onChange={e=>{
                    e.preventDefault();
                    props.onChangeMode();
            }}>
                <option value="default">{props.vals.optInitVal}</option>
                {optionsHTML}
            </select>
        </div>
    );
}

/**
 * 선택된 호선의 방향 선택지를 생성, 출발역과 도착역 선택지를 디폴트값빼고 전부 삭제
 * @param {string} line LINES안에 포함된 호선명
 */
function setOptionsByLine(line) {
    const directionSelecElemID = DROPDOWN_LIST_VALS.direction.id;
    // 호선이 선택되지 않앗거나 값이 무효할 시 방향 선택지를 디폴트값만 남겨놓고 삭제
    if (!LINES.includes(line)) {
        removeExceptDefaultOption([directionSelecElemID]);
        return;
    }
    const directionsSelectedLine = INFO_EACH_LINE[line].directions;
    createOptionsHTML(directionSelecElemID, directionsSelectedLine);
    removeExceptDefaultOption([DROPDOWN_LIST_VALS.departureStation.id, DROPDOWN_LIST_VALS.destStation.id])
}
/**
 * 선택된 호선과 방향에 맞는 역 선택지를 생성, 하차역 선택지를 디폴트값만 남겨놓고 삭제
 * @param {string} line LINES안에 포함된 호선명
 * @param {string} direction OPTIONS_EACH_LINE[line].directions에 포함된 방향명(~행)
 */
function setOptionsByDirection(line, direction) {
    const directionList = INFO_EACH_LINE[line].directions;
    const departureStationSelectElemID = DROPDOWN_LIST_VALS.departureStation.id;
    const destinationStationSelectElemID = DROPDOWN_LIST_VALS.destStation.id;
    // 방향이 선택되지 않앗거나 값이 무효할 시 탑승역 선택지를 디폴트값만 남겨놓고 삭제
    if (directionList===undefined) {
        removeExceptDefaultOption([departureStationSelectElemID]);
        return;
    } else if (!directionList.includes(direction)) {
        removeExceptDefaultOption([departureStationSelectElemID]);
        return;
    }
    const stationList = INFO_EACH_LINE[line].stations[direction];
    createOptionsHTML(departureStationSelectElemID, stationList);
    removeExceptDefaultOption([destinationStationSelectElemID]);
}
function setOptionsByDepartureStation(line, direction, departureStation) {
    const destinationStationSelectElemID = DROPDOWN_LIST_VALS.destStation.id;
    const stationList = INFO_EACH_LINE[line].stations[direction];
    // 출발역 선택되지 않앗거나 값이 무효할 시 하차역 선택지를 디폴트값만 남겨놓고 삭제
    if (stationList===undefined) {
        removeExceptDefaultOption([destinationStationSelectElemID]);
        return;
    } else if(!stationList.includes(departureStation)) {
        removeExceptDefaultOption([destinationStationSelectElemID]);
        return;
    }
    const list = limitedDestinationList(line, direction, departureStation);
    createOptionsHTML(destinationStationSelectElemID, list);
}
/**
 * 
 * @param {Array} elemIDlist 디폴트값 선택지만 남길 드롭다운리스트의 아이디 배열
 */
function removeExceptDefaultOption(elemIDlist) {
    for (let i = 0; i < elemIDlist.length; i++) {
        const elemID = elemIDlist[i];
        createOptionsHTML(elemID, []);
    }
}
/**
 * 선택지를 동적 생성
 * @param {string} selectElemID DropdownList내 select요소 id 값
 * @param {string} optionList 추가할 선택지 리스트
 */
function createOptionsHTML(selectElemID, optionList) {
    const selectElem = document.getElementById(selectElemID);
    const defaultOptVal = selectElem.firstChild.textContent;
    let optionsHTML = ""+'<option value="default">'+defaultOptVal+"</option>";
    // 선택지html생성
    for (let i = 0; i < optionList.length; i++) {
        const optVal = optionList[i];
        optionsHTML += "<option key="+optVal+" value="+optVal+">"+optVal+"</option>";
    }
    selectElem.innerHTML=optionsHTML;
}

export default UserSelectionForm;