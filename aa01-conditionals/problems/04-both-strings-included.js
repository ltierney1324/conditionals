/*
Define a function named bothStringsIncluded that accepts a sentence string,
and two strings as parameters (for a total of 3 parameters). The function
should return true if both strings are found in the sentence, otherwise
it should return false.
*/

// Your code here
function bothStringsIncluded(str, word1, word2){
    if(str.includes(word1) && str.includes(word2)){
        return true;
    }else{
        return false;
    }
}

// console.log(bothStringsIncluded("how now brown cow?", "panther", "cow"));  //=> false
// console.log(bothStringsIncluded("Dance party!", "Dance", "party"));        //=> true
// console.log(bothStringsIncluded("Question?", "tion", "?"));                //=> true
// console.log(bothStringsIncluded("I love programming", "apple", "potato")); //=> false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = bothStringsIncluded;
