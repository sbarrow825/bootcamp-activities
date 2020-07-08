function palindrome(word) {
    var backwards = "";
    for (i = word.length - 1; i > -1; i -= 1) {
        backwards.concat(word[i]);
    }
    if (backwards === word) {
        return true;
    }
    else {
        return false;
    }
}