

function ConvertIntoArray() {
    if (!head) { return [] }

    let curr = head
    let convertedArray = []

    while (curr) {
        convertedArray.push(curr.value)
        curr = curr.next
    }

    return convertedArray
}