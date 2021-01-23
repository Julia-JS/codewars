// Given a number of minutes, translate it into a readible human timestamp.
//
//   For example: 100 minutes equals "1 hour 40 minutes" And: 52874 minutes equals "1 month 1 week 1 day 17 hours 14 minutes"
//
// Given that each month has 28 days.
//
//   The largest amount of minutes you'll have to test for is under a year so you'll have to translate it to Months, Weeks, Days, Hours and Minutes.

function displayValue(value) {
  let result = [];
  const months = Math.floor(value / 60 / 24 / 28);
  const weeks = Math.floor((value - months * 60 * 24 * 28) / 60 / 24 / 7);
  const days =  Math.floor((value - months * 60 * 24 * 28 - weeks * 60 * 24 * 7) / 60 / 24);
  const hours = Math.floor((value - months * 60 * 24 * 28 - weeks * 60 * 24 * 7 - days * 60 * 24) / 60);
  const minutes = value % (60);

  if (months) {
    result.push(months + ` month${months > 1 ? 's' : ''}`);
  }

  if (weeks) {
    result.push(weeks + ` week${weeks > 1 ? 's' : ''}`);
  }

  if (days) {
    result.push(days + ` day${days > 1 ? 's' : ''}`);
  }

  if (hours) {
    result.push(hours + ` hour${hours > 1 ? 's' : ''}`);
  }

  if (minutes) {
    result.push(minutes + ` minute${minutes > 1 ? 's' : ''}`);
  }

  return result.join(' ');
}

