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
  var random2 = Math.floor(Math.random() * 5 + 1);
  var randomDirectoryReal = destination1 + "/" + randomDirectory[random2];
  var randomFileContents = fs.readFileSync(
    sampleHandsFolder + "/" + randomhand[random],
    "UTF8"
  );
  fs.appendFile(randomDirectoryReal, randomFileContents, "UTF8", err => {
    if (err) throw err;
    // console.log("going: ", randomDirectoryReal);
    // console.log("coming from:", randomhand[random]);

    // console.log(randomFileContents);
  });
  grabPokerStarsHandNo(randomFileContents);
}

//---------------------------------TASK THREE-----------------------------------------------

function callEveryFiveSeconds() {
  setInterval(appendRandomContentToRandomFile, 5000);
}

appendRandomContentToRandomFile();
callEveryFiveSeconds();

// //-----------------------------------TASK FOUR---------------------------------------------

function grabPokerStarsHandNo(randomFileContents) {
  // console.log(randomFileContents);
  var randomHandNumber = Math.floor(
    Math.random() * 900000000000 + 100000000000
  );
  // console.log(randomHandNumber);
  var splitByNewLine = randomFileContents.split("\n");
  var getHash = splitByNewLine[0].split(" ")[2];
  console.log("gethash", getHash);
  new RegExp(getHash, "g");
  new RegExp(randomHandNumber, "g");
  var test = randomFileContents.replace(getHash, randomHandNumber);

  console.log(randomHandNumber);

  console.log(test);
}
