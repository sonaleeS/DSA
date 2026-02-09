// Problem Statement:
// You’re given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is different from "A".

// Example:
// Input: jewels = “aA”, stones = “aAAbbbb”
// Output: 3

// Input: jewels = “z”, stones = “ZZ”
// Output: 0

let jewels = "aA"
let stones = "aAAbbbb"

function jewelsStones(jewels, stones) {
    let count = 0
    let nSet = new Set()

    for (let i = 0; i < jewels.length; i++) {
        nSet.add(jewels[i])
    }
    for (let j = 0; j < stones.length; j++) {
        if (nSet.has(stones[j])) {
            count++
        }
    }
    return count
}
const result = jewelsStones(jewels, stones)
console.log('result', result);