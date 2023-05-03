const stoneWeight = (stones) => {
    while (stones.length > 1) {
        stones.sort((a, b) => b - a);
        const x = stones.shift();
        const y = stones.shift();
        if (x !== y) 
            stones.push(x - y);
    }
    return (stones.length===1)?stones[0]:0;
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));


function lastStoneWeight(stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a); // sort stones in descending order
    const y = stones.shift(); // remove the heaviest stone
    const x = stones.shift(); // remove the second heaviest stone
    if (x !== y) {
      stones.push(y - x); // add the difference back to the array
    }
  }
  return stones.length === 1 ? stones[0] : 0;
}