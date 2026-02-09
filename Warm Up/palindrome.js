let n = 2552

function CalculatePalindrome(num) {
    if (num < 0) return false;
    let numCopy = num;
    let rev = 0;
    while (num > 0) {
        let rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }
    return rev === numCopy;
}

const result = CalculatePalindrome(n)

console.log(result)