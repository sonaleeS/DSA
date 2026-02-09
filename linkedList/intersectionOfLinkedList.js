// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

// For example, the following two linked lists begin to intersect at node c1:

// The test cases are generated such that there are no cycles anywhere in the entire linked structure.

// Note that the linked lists must retain their original structure after the function returns.

let headA = ['a1', 'a2', 'c1', 'c2', 'c3']
let headB = ['b1', 'b2', 'c1', 'c2', 'c3']

var getIntersectionNode = function (headA, headB) {
    let mySet = new Set()

    //add all nodes of head B in set
    while (headB) {
        mySet.add(headB)
        headB = headB.next
    }
    //check head 1 is available in set if yes return node otherwise return null
    while (headA) {
        if (mySet.has(headA)) {
            return headA
        }
        headA = headA.next
    }

    return null
};