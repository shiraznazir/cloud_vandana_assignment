console.log("Reverse Words");

// time start 11:00 AM

let str = "This is a sunny day";

const reverseStringByWords = () => {
  let temp = "";
  let reverse = "";
  for (let a of str) {
    if (a === " ") {
      reverse += temp;
      temp = "";
      reverse += " ";
    } else {
      temp = a + temp;
    }
  }
  reverse += temp;
  return reverse;
};

const result = reverseStringByWords();

console.log("Result ", result);
