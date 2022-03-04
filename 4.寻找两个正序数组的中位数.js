/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = nums1.concat(nums2);
    nums.sort((a,b)=>{return a-b});
    let index = Math.ceil(nums.length/2-1);
    let num = nums.length%2==0?(nums[index]+nums[index+1])/2:nums[index]
    return num;
};
findMedianSortedArrays([1,3],[2,3])
// @lc code=end

