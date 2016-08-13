// easy Arabic Cypher

var keywords = [
  // translated keywords
  ['MATCH', ''],
  ['REPLACE', ''],

  // square brackets not readily available on Arabic keyboard
  ['{', '['],
  ['}', ']'],

  // Arabic comma
  ['،', ',']
];

module.exports = function (arabicCypher) {
  for (var a = 0; a < keywords.length; a++) {
    var repr = new RegExp(keywords[a][0], 'g');
    arabicCypher = arabicCypher.replace(repr, keywords[a][1]);
  }
  return arabicCypher;
}
