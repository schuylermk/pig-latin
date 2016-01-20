var pigLatin = function(text) {
  if(beginConsonant(text)) {
    var newText = text.slice(0,1);
      return text.substring(1,text.length) + newText + "ay";
      } else {
    return (text + "ay");
  }
}

var beginConsonant = function(text) {
  if(text[0] !== 'a' && text[0]!== 'e' && text[0]!== 'i' && text[0]!== 'o' && text[0]!== 'u') {
    return true;
  } else {
    return false;
  }
}
