import React from "react";
import { LINES, INFO_EACH_LINE } from "./subwayInfo";
import { limitedDestinationList } from "./funcs_js/limitDestinations";
import { validateOptVals } from "./funcs_js/validators";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers";

// 드롭다운 리스트 선택지 동적생성 시 사용하는 변수들
export const DROPDOWN_LIST_VALS = {
  // 사용자에게 입력받을값: {label: 사용자에게 표시될 라벨, id: 생성될 코드 속 셀렉트 요소의 아이디, optInitVal: 선택지 디폴드값}
  line: {
    label: "select a line",
    id: "line-list",
    optInitVal: "Select a line Number",
  },
  direction: {
    label: "select a direction",
    id: "direction-list",
    optInitVal: "Select a direction",
  },
  departureStation: {
    label: "select a departure station",
    id: "departure-station-list",
    optInitVal: "Select Your Departure Station",
  },
  destStation: {
    label: "select a destination station",
    id: "dest-station-list",
    optInitVal: "Select Your Arrival Station",
  },
};

class UserSelectionForm extends React.Component {
  constructor(props) {
    super(props);
    this.timePickerRef = React.createRef();
    this.state = {
      selectedTime: null,
    }
  }
  returnSelectedTime = () => {
    // refを使用してTimePickerコンポーネントにアクセス
    const component = this.timePickerRef.current;
    const time = component.children[1].children[0].value;
    return time;
  };
  updateSelectedTime = (newTime) => {
    this.setState({ selectedTime: newTime });
  };
  render() {
    return (
      <div>
        {/* 사용자 입력란 (template: https://flowbite.com/docs/components/forms/)*/}
        <form
          className="inline-flex flex-col"
          method="get"
          onSubmit={(e) => {
            this.ajaxAfterValidation(e);
          }}
        >
          {/* 선택된 호선과 방향에 따라 출발역,호선역 선택지를 동적으로 생성
                        출발역에 따라 도착역 선택지를 제한
                        submit시 값을 validate
                    1. 선택안된 부분이 있으면 에러*/}

          <DropdownList
            vals={DROPDOWN_LIST_VALS.line}
            options={LINES}
            onChangeMode={() => {
              setOptionsByLine(
                document.getElementById(DROPDOWN_LIST_VALS.line.id).value
              );
            }}
          ></DropdownList>
          <DropdownList
            vals={DROPDOWN_LIST_VALS.direction}
            options=""
            onChangeMode={() => {
              setOptionsByDirection(
                document.getElementById(DROPDOWN_LIST_VALS.line.id).value,
                document.getElementById(DROPDOWN_LIST_VALS.direction.id).value
              );
            }}
          ></DropdownList>
          <DropdownList
            vals={DROPDOWN_LIST_VALS.departureStation}
            options=""
            onChangeMode={() => {
              setOptionsByDepartureStation(
                document.getElementById(DROPDOWN_LIST_VALS.line.id).value,
                document.getElementById(DROPDOWN_LIST_VALS.direction.id).value,
                document.getElementById(DROPDOWN_LIST_VALS.departureStation.id)
                  .value
              );
            }}
          ></DropdownList>
          <DropdownList
            vals={DROPDOWN_LIST_VALS.destStation}
            options=""
            onChangeMode={() => {
              clearValidityMsg()
            }}
          ></DropdownList>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="py-4">
              <TimePicker
                ref={this.timePickerRef}
                value={this.state.selectedTime}
                onChange={this.updateSelectedTime}
                label="탑승시간과 가장 가까운 시간을 선택해 주세요"
                timeSteps={{ hours: 1, minutes: 10, seconds: 5 }}
                ampm={false}
                id="time-picker"
              />
            </div>
          </LocalizationProvider>
          <button
            type="submit"
            className="text-white bg-customText hover:customText focus:ring-4
            focus:outline-none focus:ring-blue-300 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center dark:customText
            dark:hover:customText dark:focus:ring-blue-800"
          >
            {" "}
            검색
          </button>
        </form>
      </div>
    );
  }
  // TODO: ajax리퀘스트구현하기
  ajaxAfterValidation(e) {
    e.preventDefault();
    this.props.updateData("data updated");
    const time = this.returnSelectedTime().split(":");
    if(time.length===1) {
      window.alert("탑승예정시각을 입력해주세요");
    }
    const [h, m] = [time[0], time[1]];
    const optValList = [
      e.target.children[0].getElementsByTagName("select")[0].value, // 호선 선택값
      e.target.children[1].getElementsByTagName("select")[0].value, // 방향 선택값
      e.target.children[2].getElementsByTagName("select")[0].value, // 출발역 선택값
      e.target.children[3].getElementsByTagName("select")[0].value, // 도착역 선택값
    ];
    const dataToSend = {
      hour: h,
      minute: m,
      start: optValList[2] + "역", // 출발역 파라미터 값
      end: optValList[3] + "역", // 도착역 파라미터 값
      subwayLine: optValList[0], // 호선 파라미터 값 
    }
    // 입력치가 default값일때 입력값 미선택으로 간주, 애러
    const errMsg = ["호선", "방향", "승차역", "하차역"];
    for (let i = 0; i < optValList.length; i++) {
      const optVal = optValList[i];
      if (optVal === "default") {
        const selectElem = e.target.children[i].getElementsByTagName("select")[0];
        selectElem.setCustomValidity(errMsg[i] + "을 선택해 주세요");
        selectElem.reportValidity();
        return;
      }
    }
    // 입력치 검증

    if (!validateOptVals(optValList)) {
      window.alert("다시 선택해 주세요.");
      return;
    }
    const baseUrl = "http://localhost:8080/api/recommend"
    const url = baseUrl+ "?hour="+dataToSend.hour+"&minute="+dataToSend.minute+
                "&start="+dataToSend.start+"&end="+dataToSend.end+"&subwayLine="+dataToSend.subwayLine;
    fetch(url, {
      method: "GET",
    })
    // TODO: 에이피아이랑 연결 되면 .then((response) => response)을 .then((response) => response.json())으로 바꾸기
    .then((response) => response.json())
    .then((data) => {
      console.log(JSON.stringify(data));
      console.log("sfdfsfd");
      // console.log("Data sent successfully:", data);
    })
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
    optionsHTML.push(
      <option key={opt} value={opt}>
        {opt}
      </option>
    );
  }
  return (
    <div className="w-full hs-dropdown relative inline-flex flex-col ">
      <label
        htmlFor="repeat-password"
        className="text-xl font-bold ck mb-2 text-gray-900 dark:text-white"
      >
        {props.vals.label}
      </label>
      <select
        id={props.vals.id}
        className="py-3 px-10 sm:px-6 md:px-20 lg:px-30 xl:px-12 block border-2 border-customText rounded-md text-customText text-lg dark:border-customText dark:text-customText dark:bg-customBg"
        onChange={(e) => {
          e.preventDefault();
          props.onChangeMode();
        }}
      >
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
  clearValidityMsg();
  const directionSelecElemID = DROPDOWN_LIST_VALS.direction.id;
  // 호선이 선택되지 않앗거나 값이 무효할 시 방향 선택지를 디폴트값만 남겨놓고 삭제
  if (!LINES.includes(line)) {
    removeExceptDefaultOption([directionSelecElemID]);
    return;
  }
  const directionsSelectedLine = INFO_EACH_LINE[line].directions;
  createOptionsHTML(directionSelecElemID, directionsSelectedLine);
  removeExceptDefaultOption([
    DROPDOWN_LIST_VALS.departureStation.id,
    DROPDOWN_LIST_VALS.destStation.id,
  ]);
}
/**
 * 선택된 호선과 방향에 맞는 역 선택지를 생성, 하차역 선택지를 디폴트값만 남겨놓고 삭제
 * @param {string} line LINES안에 포함된 호선명
 * @param {string} direction OPTIONS_EACH_LINE[line].directions에 포함된 방향명(~행)
 */
function setOptionsByDirection(line, direction) {
  clearValidityMsg();
  const directionList = INFO_EACH_LINE[line].directions;
  const departureStationSelectElemID = DROPDOWN_LIST_VALS.departureStation.id;
  const destStationSelectElemID = DROPDOWN_LIST_VALS.destStation.id;
  // 방향이 선택되지 않앗거나 값이 무효할 시 탑승역 선택지를 디폴트값만 남겨놓고 삭제
  if (directionList === undefined) {
    removeExceptDefaultOption([departureStationSelectElemID]);
    return;
  } else if (!directionList.includes(direction)) {
    removeExceptDefaultOption([departureStationSelectElemID]);
    return;
  }
  const stationList = INFO_EACH_LINE[line].stations[direction];
  createOptionsHTML(departureStationSelectElemID, stationList);
  removeExceptDefaultOption([destStationSelectElemID]);
}
function setOptionsByDepartureStation(line, direction, departureStation) {
  clearValidityMsg();
  const destStationSelectElemID = DROPDOWN_LIST_VALS.destStation.id;
  const stationList = INFO_EACH_LINE[line].stations[direction];
  // 출발역 선택되지 않앗거나 값이 무효할 시 하차역 선택지를 디폴트값만 남겨놓고 삭제
  if (stationList === undefined) {
    removeExceptDefaultOption([destStationSelectElemID]);
    return;
  } else if (!stationList.includes(departureStation)) {
    removeExceptDefaultOption([destStationSelectElemID]);
    return;
  }
  const list = limitedDestinationList(line, direction, departureStation);
  createOptionsHTML(destStationSelectElemID, list);
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
  let optionsHTML =
    // eslint-disable-next-line no-useless-concat
    "" + '<option value="default">' + defaultOptVal + "</option>";
  // 선택지html생성
  for (let i = 0; i < optionList.length; i++) {
    const optVal = optionList[i];
    optionsHTML +=
      "<option key=" + optVal + " value=" + optVal + ">" + optVal + "</option>";
  }
  selectElem.innerHTML = optionsHTML;
}
function clearValidityMsg() {
  const selectElems = [
    document.getElementById(DROPDOWN_LIST_VALS.line.id),
    document.getElementById(DROPDOWN_LIST_VALS.direction.id),
    document.getElementById(DROPDOWN_LIST_VALS.departureStation.id),
    document.getElementById(DROPDOWN_LIST_VALS.destStation.id),
  ];
  for (let i = 0; i < selectElems.length; i++) {
    const selectElem = selectElems[i];
    selectElem.setCustomValidity("");
    selectElem.reportValidity();
  }
}

export default UserSelectionForm;