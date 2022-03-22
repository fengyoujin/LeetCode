/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(s.length < numRows || numRows === 1){return s}
    let rows = [];
    let reverse = false;
    let count = 0;

    for (let i = 0; i < numRows; i++) rows[i] = [];
    for (let i = 0; i < s.length; i++) {
        rows[count].push(s[i]);
        reverse ? count-- : count++;
        if (count === numRows - 1 || count === 0) reverse = !reverse;
    }
    return rows.reduce((str, cur) => str + cur.join(''), '');;
};
// console.log(convert('PAYPALISHIRING',4));
// @lc code=end

