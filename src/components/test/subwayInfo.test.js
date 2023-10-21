import { LINES, INFO_EACH_LINE } from "../subwayInfo";

test('LINES의 모든 요소가 INFO_EACH_LINE의 키값인지 확인', () => {
    const keyList = Object.keys(INFO_EACH_LINE);
    const isSubset = LINES.every(val => keyList.includes(val));
    expect(isSubset).toBe(true);
});
test('호선, 방향에 따른 역 개수 확인', () => {
    // checkNumStations(호선, 방향, 역 개수 기대값)
    checkNumStations("경의중앙선", "서울역방면", 22);
});
test('INFO_EACH_LINE에 관해, 방향에 따른 역 리스트가 존재하는지 확인', () => {
    for (let i = 0; i < LINES.length; i++) {
        const line = LINES[i];
        for (let i = 0; i < INFO_EACH_LINE[line].directions.length; i++) {
            const direction = INFO_EACH_LINE[line].directions[i];
            const result = (INFO_EACH_LINE[line].stations[direction] !== undefined);
            if (!result) {console.log(direction)}
            expect(result).toBe(true);
        }
    }
});
test('INFO_EACH_LINE에 관해, 역 리스트의 마지막 요소와 방향(~방면)이 일치하는지 확인', () => {
    for (let i = 0; i < LINES.length; i++) {
        const line = LINES[i];
        for (let i = 0; i < INFO_EACH_LINE[line].directions.length; i++) {
            const direction = INFO_EACH_LINE[line].directions[i];
            const directionStation = direction.slice(0,-3);
            if (directionStation === "시청(종점)") {
                continue;
            }
            const lastElem = INFO_EACH_LINE[line].stations[direction].pop();
            const result = (lastElem!==undefined && directionStation!==undefined && directionStation===lastElem);
            if (!result) {console.log(directionStation+"     "+lastElem)}
            expect(result).toBe(true);
        }
    }
});

/**
 * 
 * @param {*} line LINES에 포함된 호선명 
 * @param {*} direction line에 대한 방향(~방면)
 * @param {*} expectedNum 역 개수 기대값
 */
function checkNumStations(line, direction, expectedNum) {
    const stationList = INFO_EACH_LINE[line].stations[direction]
    expect(stationList.length).toBe(expectedNum);
}