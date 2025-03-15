var sentence = "ke";
var pattern = /[Mk]e/; // matching for Me or ke
var validate = pattern.test(sentence)
console.log(1,sentence,validate)



var sentence = "a1";
var pattern = /[1-6]/; // matching for 1 to 6
var validate = pattern.test(sentence)
console.log(2,sentence,validate)



var sentence = "B7";
var pattern = /[A-Za-z0-7]/; //capital or small alphabet or numeric
var validate = pattern.test(sentence)
console.log(3,sentence,validate)




//About ^
var sentence = "Genshin Impact";
var pattern = /^Gensh/; //start with Gensh
var validate = pattern.test(sentence)
console.log(4,sentence,validate)




var sentence ="Wutheringw";
var pattern = /[^Ww]/; //not W or w
 //when searching, the First "W" is ignored and then found "u" so it return true
var validate = pattern.test(sentence)
console.log(5,sentence,validate)




var sentence ="NOT";
var pattern = /[^A-Z]/; // not Capital Letters and return true if found
var validate = pattern.test(sentence)
console.log(6,sentence,validate)



var sentence ="h.";
var pattern = /[^.]/; // not dot otherwise return false
var validate = pattern.test(sentence) //RETURN AT h and does not look further
console.log(7,sentence,validate)



var sentence ="hello";
var pattern = /[^e]/; // not dot otherwise return false
var validate = pattern.test(sentence)
console.log(8,sentence,validate)




var sentence ="u^";
var pattern = /[e^i]/;
//see if there is e or ^ or i and ^ is treated as literal CHARACTER
var validate = pattern.test(sentence)
console.log(9,sentence,validate)



//about ?
var sentence ="colour";
var pattern = /colou?r/;
var validate = pattern.test(sentence)
console.log(10,sentence,validate)


//wild card
var sentence ="good";
var pattern = /g.d/;
var validate = pattern.test(sentence)
console.log(11,sentence,validate)



var sentence ="kyawOne";
var pattern = /[0-9]*/;
var validate = pattern.test(sentence)
console.log(12,sentence,validate)



var sentence ="kyawTwo";
var pattern = /[0-9]+/;
var validate = pattern.test(sentence)
console.log(13,sentence,validate)



//Must Start with [Kyaw and End with Myat.]
var sentence ="[KyawNyanMyat.]";
var pattern = /^\[Kyaw.*Myat\.\]$/;
var validate = pattern.test(sentence)
console.log(14,sentence,validate)





var sentence ="kyaw";
var pattern = /[0-9]*/;
var validate = pattern.test(sentence)
console.log(15,sentence,validate)



var sentence ="Wuwa";
var pattern = /Genshin|Wuwa/;
var validate = pattern.test(sentence)
console.log(16,sentence, validate)



var sentence ="DemonGoddess";
var pattern = /Demon(God|Goddess)/;
var validate = pattern.test(sentence)
console.log(17,sentence, validate)



var sentence ="Genshin";
var pattern = /^.{1,3}shin/;
var validate = pattern.test(sentence)
console.log(18,sentence, validate)



var sentence ="kk";
var pattern = /\d/; // searching for digit
var validate = pattern.test(sentence)
console.log(19,sentence, validate)



var sentence ="kk";
var pattern = /\D/; // searching for non-digit
var validate = pattern.test(sentence)
console.log(20,sentence, validate)



var sentence ="_";
var pattern = /\w/; // searching for alphabet, numberic, underscore
var validate = pattern.test(sentence)
console.log(21,sentence, validate)


var sentence ="NeedWhiteSpace";
var pattern = /\s/; //searching for white space and tab
var validate = pattern.test(sentence)
console.log(22,sentence, validate)


var sentence =" ";
var pattern = /\S/; //searching for Non-whitespace
var validate = pattern.test(sentence)
console.log(23,sentence, validate)


