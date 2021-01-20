// Little Annie is very excited for upcoming events. She want's to know how many days she have to wait for a specific event.
//
// Your job is to help her out.
//
//   Task: Write a function which returns the number of days from today till the given date. The function will take a Date object as parameter. You have to round the amount of days.
//
//   If the event is in the past, return "The day is in the past!"
// If the event is today, return "Today is the day!"
// Else, return "x days"

function countDays(d){
  const now = new Date();
  const now1 = new Date();

  now1.setHours(0, 0, 0, 0)

  if (d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth() && d.getDate() === now.getDate()) {
    return "Today is the day!";
  } else if (d.getTime() < now1.getTime()) {
    return "The day is in the past!";
  } else {
    return Math.round((d - now) / 1000 / 60 / 60 / 24) + ' days';
  }
}
