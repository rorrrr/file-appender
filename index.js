console.log("hello world");

var fs = require("fs");
const samplehand1 = "./sampleHands/sampleHand1.txt";
const destination1 = "./RealTimeStorage";
var testFileContents = fs.readFileSync(samplehand1, "UTF8");

var destinationDirectory = fs.readdirSync(destination1, "UTF8");
var destinationFilePath = destination1 + "/" + destinationDirectory[0];
var destinationContents = fs.readFileSync(
  destination1 + "/" + destinationDirectory[0],
  "UTF8"
);

fs.appendFile(destinationFilePath, testFileContents, "UTF8", err => {
  if (err) throw err;
  // console.log("success lol");
});

// ------------------------------------TASK TWO--------------------------------------------

// var random = Math.floor(Math.random() * 5 + 1);
var sampleHandsFolder = "./sampleHands";
var randomhand = fs.readdirSync(sampleHandsFolder, "UTF8");
// console.log(randomhand[random]);

// var randomFileContents = fs.readFileSync(
//   sampleHandsFolder + "/" + randomhand[random],
//   "UTF8"
// );

// console.log(randomFileContents);

var randomDirectory = fs.readdirSync(destination1, "UTF8");
// var randomDirectoryReal = destination1 + "/" + randomDirectory[random];
// console.log(randomDirectoryReal);

// fs.appendFile(randomDirectoryReal, randomFileContents, "UTF8", err => {
//   if (err) throw err;
//   console.log(randomDirectoryReal);
//   console.log(randomFileContents);
// });

// function appendRandomContentToRandomFile() {
//   fs.appendFile(randomDirectoryReal, randomFileContents, "UTF8", err => {
//     if (err) throw err;
//     console.log(randomDirectoryReal);
//     console.log(randomFileContents);
//   });
// }

function appendRandomContentToRandomFile() {
  var random = Math.floor(Math.random() * 5 + 1);
  var randomDirectoryReal = destination1 + "/" + randomDirectory[random];
  var randomFileContents = fs.readFileSync(
    sampleHandsFolder + "/" + randomhand[random],
    "UTF8"
  );
  fs.appendFile(randomDirectoryReal, randomFileContents, "UTF8", err => {
    if (err) throw err;
    console.log(randomDirectoryReal);
    console.log(randomFileContents);
  });
}

// appendRandomContentToRandomFile();
//---------------------------------TASK THREE-----------------------------------------------

// var callEveryFiveSeconds = setInterval(appendRandomContentToRandomFile, 5000);
// console.log(randomDirectoryReal);
// console.log(randomFileContents);

function callEveryFiveSeconds() {
  setInterval(appendRandomContentToRandomFile, 5000);
}

callEveryFiveSeconds();
