// Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.
//
// Ex:
// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

function dashatize(num) {
  return [...Math.abs(num).toString()].map(a => a % 2 ? '-' + a + '-' : a).join('').replace(/--/g, '-').replace(/^-|-$/g, '');
}
