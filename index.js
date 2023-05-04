const lastWordLength = (str) => {
    const strAsArr = str.split(" ").reverse();
    const result = strAsArr[0].length;
    return result;
}
console.log(lastWordLength("i am strong and happy"));