// Add your functions here
function map(srcArr, cb) {
    let arr = []

    for(let i=0; i<srcArr.length; i++){
        let index = srcArr[i]
        arr.push(cb(index))
    }
    return arr
}

function reduce(srcArr, cb, starting) {
    let arr = (!!starting) ? starting : srcArr[0]
    let i = (!!starting) ? 0 : 1

    for(; i<srcArr.length; i++){
        arr = cb(srcArr[i], arr)
    }
    return arr
}