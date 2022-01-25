const input = "Bloody whales don't use Google Translate";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  //console.log("inputIndex = " + input[inputIndex]);
  for (let vowelCount = 0; vowelCount < vowels.length; vowelCount++) {
    if (input[inputIndex] === vowels[vowelCount]) {
      if (input[inputIndex] === 'e') {
        resultArray.push('ee');
      }
      else if (input[inputIndex] === 'u') {
        resultArray.push('uu');
      }
      else {
        resultArray.push(input[inputIndex]);
      }
    }
  }
}

console.log(resultArray.join("").toUpperCase());