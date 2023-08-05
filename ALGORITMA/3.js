const counter = (input, query) => {
  const ans = [];
  for (let i = 0; i < query.length; i++) {
    let count = 0;
    for (let j = 0; j < input.length; j++) {
      input[j] === query[i] ? count++ : null;
    }
    ans.push(count);
  }

  console.log(ans);
};

counter(["xc", "dz", "bbb", "dz"], ["bbb", "ac", "dz"]);

// INPUT = ['xc', 'dz', 'bbb', 'dz']
// QUERY = ['bbb', 'ac', 'dz']

// OUTPUT = [1, 0, 2]
