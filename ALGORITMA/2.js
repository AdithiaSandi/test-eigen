const sentence = "Saya sangat senang mengerjakan soal algoritma";

const longest = (str) => {
  const words = str.split(" ").sort((a, b) => a.length - b.length);
  console.log(words[words.length - 1]);
};

longest(sentence);
// mengerjakan: 11 character
