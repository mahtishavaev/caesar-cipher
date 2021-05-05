const { pipeline, Transform } = require("stream");
const fs = require("fs");

const options = require("./options");
const validateOptions = require("./validator");
const encode = require("./encoder");

validateOptions(options);

const readableStream = options.input ? fs.createReadStream(options.input, "utf8") : process.stdin;
const writableStream = options.output
  ? fs.createWriteStream(options.output, { flags: "a" })
  : process.stdout;
const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(encode(chunk.toString(), options.shift, options.action));
    callback();
  },
});

pipeline(readableStream, transformStream, writableStream, (err) =>
  err ? console.error(err) : console.log("Done")
);
