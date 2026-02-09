// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var removeNthFromEnd = function (head, n) {
    let sentinal = new ListNode()
    sentinal.next = head

    let firstPointer = sentinal
    let secondPointer = sentinal

    //reach nth position 
    for (let i = 0; i < n; i++) {
        firstPointer = firstPointer.next
    }

    while (firstPointer.next) {
        firstPointer = firstPointer.next
        secondPointer = secondPointer.next
    }

    secondPointer.next = secondPointer.next.next

    return sentinal.next
};