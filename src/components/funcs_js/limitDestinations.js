import { LINES, INFO_EACH_LINE } from "../subwayInfo"
/**
 * 
 * @param {string} line 호선명 
 * @param {string} direction 방향(~방면)
 * @param {string} DepartureStation (출발역)
 */
export function limitedDestinationList(line, direction, departureStation) {
    // 선택지가 무효하면 빈 배열을 리턴
    if (!(LINES.includes(line) && 
          INFO_EACH_LINE[line].directions.includes(direction) && 
          INFO_EACH_LINE[line].stations[direction].includes(departureStation))) {
        return [];
    }
    if ((line==="1호선" && direction==="소요산역방면") ||
    (line==="5호선" && direction==="방화역방면") ||
    (line==="경의중앙선" && direction==="문산역방면")) {
        return divergingLine(line, departureStation);
    } else if (line==="2호선" && direction==="시청역방면") {
        return circulatingLine(line, direction, departureStation);
    } else {
        const stationList = INFO_EACH_LINE[line].stations[direction];
        return generalLine(stationList, departureStation);
    }
}
function divergingLine(line, departureStation) {
    const stationLists = Object.values(INFO_EACH_LINE[line].stations);
    let stationList = [];
    for (let i = 0; i < stationLists.length; i++) {
        stationList = stationLists[i];
        if (stationList.includes(departureStation)) {
            break;
        }
    }
    // reverse()쓰면 원래 배열까지 바꿔버려서 여기선못씀
    return generalLine(stationList.toReversed(), departureStation);
}
function circulatingLine(line, direction, departureStation) {
    const stationList = INFO_EACH_LINE[line].stations[direction];
    return generalLine(stationList, departureStation);
}
/**
 * 분기하지않는(일직선의) 노선에 대해 사용
 * 예를들어서 1호선 소요산행열차는 인천쪽에서 온 열차일수도잇고 신창쪽에서 온 열차일수도잇음
 * 즉, 분기하는 노선이기떄문에 이 함수 말고 전용 함수를 사용해야함
*/
function generalLine(stationList, departureStation) {
    console.log(stationList);
    const index = stationList.indexOf(departureStation);
    const destinationList = stationList.slice(index+1);
    return destinationList;
}