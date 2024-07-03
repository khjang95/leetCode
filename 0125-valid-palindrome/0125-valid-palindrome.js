/**
 * @param {string} s
 * @return {boolean}
 */

 function isAlphanumeric(char) {
    return /^[a-z0-9]$/i.test(char);
}

var isPalindrome = function(s) {
        let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // 왼쪽 포인터가 알파벳이나 숫자가 아닐 경우 건너뜁니다.
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }
        // 오른쪽 포인터가 알파벳이나 숫자가 아닐 경우 건너뜁니다.
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }

        // 현재 위치의 문자를 소문자로 변환하여 비교합니다.
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        // 포인터를 이동시킵니다.
        left++;
        right--;
    }

    return true;
};