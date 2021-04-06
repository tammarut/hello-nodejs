const path = require("path");
const fs = require("fs");
const http = require("http");

const myBuffer1 = new Buffer(5);
const myBuffer2 = new Buffer(10);
const bufferArr = [myBuffer1, myBuffer2];
console.log("😡 bufferArr:", bufferArr);

// Getting the directory path one folder above
console.log("🔥Current Directory:", __dirname);
pathAbove = path.join(__dirname, "..");
console.log("🌞Directory above:", pathAbove);

// 1. Writable Streams
const file = fs.createWriteStream("writable_file.txt");
for (let i = 0; i < 10; i++) {
  file.write(`Hello: ${i}\n`);
}
file.end();

// 2. Readable Streams
const readableStream = fs.createReadStream("writable_file.txt", {
  highWaterMark: 10,
});
console.log("😈readableStream:", readableStream);

readableStream.on("readable", () => {
  process.stdout.write(`🌀 [${readableStream.read()}]`);
});

readableStream.on("end", () => {
  console.log("✅ DONE!");
});

// 3. Stream Pipelines
const server = http.createServer((req, res) => {
  // fs.readFile("./video.mp4", (err, data) => {
  //   if (err) {
  //     throw err;
  //   }
  //   res.end(data);
  // });
  const src = fs.createReadStream("./video.mp4");
  src.pipe(res);
});

server.listen(8080);
