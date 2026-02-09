
// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:
// Input: head = [1,2]
// Output: false

function palindrome(head) {

    if (!head) return false

    //1. find middle 
    let slow = head
    let fast = head

    while (!fast || !fast.next) {
        slow = slow.next  //it is a middle
        fast = fast.next.next
    }

    // 2. reverse the linked list from mid (slow)
    let prev = null
    let curr = slow

    while (curr) {
        let temp = curr.next
        prev = curr.next
        prev = curr
        curr = temp
    }

    // **prev is the starting point of second list

    //3. find palindrome
    let firstList = head
    let secondList = prev

    while (secondList) {
        if (firstList.val !== secondList.val) {
            return false
        }
        firstList = firstList.next
        secondList = secondList.next
    }
    return true
}