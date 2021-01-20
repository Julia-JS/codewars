// Oh no! I need to find out what day it is on a few particular dates. Help me figure it out. Return "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", or "Saturday".
//
//   Dates may be passed in as strings (formatted as MM/DD/YYYY) or as Date objects.

function getDayOfTheWeek(date) {
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  if (typeof date === 'string') {
    const [month, day, year] = date.split('/');
    const d = new Date(year, month - 1, day);
    return weekDays[d.getDay()];
  } else {
    return weekDays[date.getDay()];
  }
}
