var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var weeks = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Saturday", "Sunday"];
var foundThisLetter;

function isPangram(inputArray) {
    inputArray = inputArray.toLowerCase();
    for (i = 0; i < alphabet.length; i += 1) {
        for (i = 0; i < inputArray.length; i += 1) {
            if (inputArray[i] === alphabet[i]) {
                foundThisLetter = true;
            }
        }
        if (!foundThisLetter) {
            return false;
        }
    }
    if (alphabet[i] === "z") {
        return true;
    } else {
        return false;
    }
}

console.log(isPangram("abcdefghijklmnopqrstuvwxyz"));
console.log(isPangram("The quick brown fox jumped over the lazy dog"));
console.log(isPangram("xd"));

function dayOfTheWeek(dayNumber) {
    return weeks[dayNumber - 1];
}

console.log(dayOfTheWeek(1));
console.log(dayOfTheWeek(4));
console.log(dayOfTheWeek(7));
console.log(dayOfTheWeek(8));
console.log(dayOfTheWeek(-1));