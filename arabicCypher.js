// easy Arabic Cypher

var keywords = [
  // translated keywords
  ['MATCH', 'تجد'],
  ['RETURN', 'الرد مع'],

  // square brackets not readily available on Arabic keyboard
  ['{', '['],
  ['}', ']'],

  // Arabic comma
  ['،', ',']
];

function arabicCypher (cypherTxt) {
  for (var a = 0; a < keywords.length; a++) {
    var repr = new RegExp(keywords[a][0], 'g');
    cypherTxt = cypherTxt.replace(repr, keywords[a][1]);
  }
  return cypherTxt;
}

if (typeof module !== 'undefined') {
  module.exports = arabicCypher;
}
