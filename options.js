const { program } = require("commander");

program
  .option("-s, --shift <shift>", "shift")
  .option("-i, --input <input>", "input")
  .option("-o, --output <output>", "output")
  .option("-a, --action <action>", "action")
  .parse();

const options = program.opts();

module.exports = options;
