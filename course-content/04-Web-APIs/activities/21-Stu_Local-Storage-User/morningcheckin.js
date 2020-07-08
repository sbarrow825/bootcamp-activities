var vowels = ["a", "e", "i", "o", "u"];
var counter;

function countVowels(inputMessage) {
    counter = 0;
    for (i = 0; i < inputMessage.length; i += 1) {
        for (j = 0; j < vowels.length; j +=1) {
            if (i === j) {
                counter += 1;
                break
            }
        }
    }
}