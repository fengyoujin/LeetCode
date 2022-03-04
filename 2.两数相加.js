/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let List = new ListNode();
    let head = List;
    while (!!l1||!!l2||!!List) {
        let sum = !List?0:List.next;
        if(!!l1){
            sum+=l1.val;
        }
        if(!!l2){
            sum+=l2.val;
        }
        if(!!List){
            sum+=List.val;
        }
        l1=!l1?null:l1.next
        l2=!l2?null:l2.next;
        if(sum>=10){
            List.val=sum%10;
            List.next = new ListNode(Math.floor(sum/10));
            List=List.next;
        }else{
            List.val=sum;
            if(!!l1||!!l2){
                List.next = new ListNode(0)
            }
            List=List.next;
        }
    }
    return head;
};
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val);
//     this.next = (next===undefined ? null : next);
// }
// let result = addTwoNumbers(new ListNode(128),new ListNode(2));
// console.log(result);
// @lc code=end

