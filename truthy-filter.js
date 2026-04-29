const dataArr = [null, false, 0, 1, undefined, true, 11]

const returnTrue = (arr) => {
    let newArr = arr.filter((ele) => Boolean(ele) ) 
    return newArr
}

console.log(returnTrue(dataArr));





