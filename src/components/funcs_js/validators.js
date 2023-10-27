export function validateOptVals(optValToValidateList) {
    for (let i = 0; i < optValToValidateList.length; i++) {
        const word = optValToValidateList[i];
        if (!validateOptVal(word)) {
            return false;
        }
    }
    return true;
}
/**
 * 영문자, 한글 또는 숫자, 1~50자
 * @param {*} wordToValidate 
 * @returns 검증 결과, 검증 성공시 true, 아닐 시 false　
 */
export function validateOptVal(wordToValidate) {
    const regex = /^[ㄱ-ㅎ가-힣a-zA-Z0-9_ ()]{1,50}$/ui;
    const match = regex.test(wordToValidate);
    return match;
}
export function validateDate(wordToValidate) {
    // TODO 기능구현
    const regex = /^[a-z0-9]{1,100}$/u;
    const match = regex.test(wordToValidate);
    return match;
}