// I highly recommend listening Vivaldi's Four Seasons as an inspiration to solve this Kata :)
//
// In the UK, winter begins on 21 December and ends on 20 March. Spring begins on 21 March and ends on 20 June. Summer begins on 21 June and ends on 20 September. Autumn begins on 21 September and ends on 20 December.
//
//   Given a date day from 1 (January 1st) to 365 (December 31th) your task is to return the season of the year that corresponds to that day. If the number given is greater than 365, return "The year flew by!".
//
//   Note: We are not considering leap years.

function fourSeasons(d){
  if (d > 365) {
    return 'The year flew by!';
  }
  const springStart = 79;
  const summerStart = 171;
  const autumnStart = 263;
  const winterStart = 354;

  switch(true) {
    case (d > springStart && d <= summerStart):
      return 'Spring Season';
    case (d > summerStart && d <= autumnStart):
      return 'Summer Season';
    case (d > autumnStart && d <= winterStart):
      return 'Autumn Season';
    case (d > winterStart || d <= springStart):
      return 'Winter Season';
  }
}
