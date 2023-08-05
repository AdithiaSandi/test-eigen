const reverse = (str) => {
  const char = [];
  const num = [];
  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i])) {
      char.push(str[i]);
    } else {
      num.push(parseInt(str[i]));
    }
  }
  console.log(
    char
      .reverse()
      .concat(num.sort((a, b) => a - b).map((item) => item.toString()))
  );
};

reverse("NEGIE1342");
