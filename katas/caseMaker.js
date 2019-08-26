const caseify = (word, upper) => {
  const letters = word.split("");
  if (upper) {
    letters[0] = letters[0].toUpperCase();
  } else {
    letters[0] = letters[0].toLowerCase();
  }

  return letters.join("");
};

module.exports = input => {
  if (input.length === 0) {
    return "";
  }
  const words = input.toLowerCase().split(" ");
  const newWords = words.map((word, i) => {
    return caseify(word, i > 0);
  });

  return newWords.join("");
};
