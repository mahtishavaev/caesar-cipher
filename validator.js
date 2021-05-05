const fs = require("fs");

const validateInput = (input) => {
  if (input === undefined) return;

  try {
    fs.accessSync(input, fs.constants.F_OK);
  } catch (error) {
    console.error(`File ${input} doesn't exist`);
    process.exit(1);
  }

  try {
    fs.accessSync(input, fs.constants.R_OK);
  } catch (error) {
    console.error(`Can't read file ${input}`);
    process.exit(1);
  }
};

const validateOutput = (output) => {
  if (output === undefined) return;

  try {
    fs.accessSync(output, fs.constants.F_OK);
  } catch (error) {
    console.error(`File ${output} doesn't exist`);
    process.exit(1);
  }

  try {
    fs.accessSync(output, fs.constants.W_OK);
  } catch (error) {
    console.error(`Can't write to file ${output}`);
    process.exit(1);
  }
};

const validateShift = (shift) => {
  if (shift === undefined) {
    console.error(`"shift" is required`);
    process.exit(1);
  }
  if (!Number.isInteger(Number(shift))) {
    console.error(`"shift" must be an integer number`);
    process.exit(1);
  }
};

const validateAction = (action) => {
  if (action === undefined) {
    console.error(`"action" is required`);
    process.exit(1);
  }
  if (!(action === "encode" || action === "decode")) {
    console.error(`"action" must be either "encode" or "decode"`);
    process.exit(1);
  }
};

const validateOptions = (options) => {
  validateInput(options.input);
  validateOutput(options.output);
  validateShift(options.shift);
  validateAction(options.action);
};

module.exports = validateOptions;
