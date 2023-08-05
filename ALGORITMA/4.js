// Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

// diagonal pertama = 1 + 5 + 9 = 15
// diagonal kedua = 0 + 5 + 7 = 12

// maka hasilnya adalah 15 - 12 = 3

const diagonals = (matrix) => {
  const first = matrix[0][0] + matrix[1][1] + matrix[2][2];
  const second = matrix[0][2] + matrix[1][1] + matrix[2][0];

  console.log(Math.abs(first - second));
};

diagonals([
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
]);
