/* eslint-disable jest/valid-title */
import { validateOptVal } from "../funcs_js/validators";

test('test validateOptVal', () => {
    testWithInvalidVals(["", "dafs$", "한국어!",
        "more than 50 words                                                  "]);
    testWithValidVals(["한국어", "123123", "1호선", "오목교(목동운동장앞)", "오목교 (목동운동장앞)", "호선을 선택"]);
});

function testWithInvalidVals(wordList) {
    for (let i = 0; i < wordList.length; i++) {
        const word = wordList[i];
        if (validateOptVal(word)) {console.log(word)};
        expect(validateOptVal(word)).toBe(false);
    }
}
function testWithValidVals(wordList) {
    for (let i = 0; i < wordList.length; i++) {
        const word = wordList[i];
        if (!validateOptVal(word)) {console.log(word)};
        expect(validateOptVal(word)).toBe(true);
    }
}
