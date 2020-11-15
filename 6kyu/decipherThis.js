// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:
// For each word:
// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
//
// Note: there are no special characters used, only letters and spaces
//
// Examples:
// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

function decipherThis(str) {
  var numbers = str.match(/\d{1,}/g).map(a => String.fromCharCode(a));
  var letters = str.split(/\d{1,}/g).filter(a => a).map(a => a.trim()).map(a => (a.length === 1 ? a : a.substr(a.length - 1) + a.substr(1, a.length - 2) + a.substr(0, 1)) + ' ');
  var string = '';

  for (let i = 0; i < numbers.length; i++) {
    string += numbers[i] + letters[i];
  }

  return string.trim();
};
