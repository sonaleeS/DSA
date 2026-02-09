//sonali => ilanos

function reverseString(s) {
    let len = s.length
    let halfLen = Math.floor(len / 2)

    for (let i = 0; i < halfLen; i++) {
        let temp = s[i]
        s[i] = s[len - 1 - i]
        s[len - 1 - i] = temp
    }
    //ANOTHER WAY
    for (let i = 0; i < halfLen; i++) {
        swap(i, s - 1 - i)
    }
};


let s = ["h", "e", "l", "l", "o"]
reverseString(s)

console.log(s)
