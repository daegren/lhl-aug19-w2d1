const repeatNumber = (value, repeat) => {
  let output = "";
  for (let i = 0; i < repeat; i++) {
    output += value;
  }

  return output;
};

module.exports = data => {
  let output = [];
  data.forEach(([value, repeat]) => {
    let repeatedString = repeatNumber(value, repeat);
    output.push(repeatedString);
  });

  return output.join(", ");
};
