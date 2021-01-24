// Given a time in a time format class, return it without year, month and day.
//
//   It should return a string including milliseconds with 3 decimals.
//
//   Example:
//
// new Date(2016, 2, 8, 16, 42, 59)
// //Should return:
// "16:42:59,000"

function convert(time){
  const date = new Date(time);
  let hours = date.getHours().toString().padStart(2, '0');
  let minutes = date.getMinutes().toString().padStart(2, '0');
  let seconds = date.getSeconds().toString().padStart(2, '0');
  let milliseconds = date.getMilliseconds().toString().padStart(3, '0');

  return `${hours}:${minutes}:${seconds},${milliseconds}`;
}
