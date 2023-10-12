const example = [
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"]
];

const whereIsWaldo = (matrix) => {
  const uniqueValues = new Set();

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      uniqueValues.add(matrix[row][col]);
    }
  }

  let uniqueValue;
  for (const value of uniqueValues) {
    let count = 0;
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        if (matrix[row][col] === value) {
          count++;
        }
      }
    }
    if (count === 1) {
      uniqueValue = value;
      break;
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === uniqueValue) {
        return [row + 1, col + 1]; // Adjust for 1-indexing
      }
    }
  }
}

const result = whereIsWaldo(example);
console.log(result); // Output: [3, 2]
