// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
//
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
//
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str){
  var strNew = str.split(/[-_]/).map(a => a.slice(0, 1).toUpperCase() + a.slice(1)).join('');
  return str.charAt(0).toLowerCase() === str.charAt(0) ? strNew.slice(0, 1).toLowerCase() + strNew.slice(1) : strNew;
}
