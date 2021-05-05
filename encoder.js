const alphabet = require("./alphabet");

const encode = (text, shift, action) => {
  shift = action === "decode" ? -shift : shift;
  return text
    .split("")
    .map((el) => {
      if (alphabet.includes(el)) {
        const index = (alphabet.indexOf(el) + shift * 2) % 52;
        return alphabet[index];
      }
      return el;
    })
    .join("");
};

module.exports = encode;
