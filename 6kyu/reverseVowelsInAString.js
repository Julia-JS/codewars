// In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:
//
// reverseVowels("Hello!"); // "Holle!"
// reverseVowels("Tomatoes"); // "Temotaos"
// reverseVowels("Reverse Vowels In A String") // "RivArsI Vewols en e Streng"
// For simplicity, you can treat the letter y as a consonant, not a vowel.

function reverseVowels(str) {
  var vowels = str.split(/[^aeiou]/gi).filter(a => a).join('').split('').reverse();
  return [...str].map(a => 'aeiouAEIOU'.includes(a) ? vowels.shift() : a).join('');
}
