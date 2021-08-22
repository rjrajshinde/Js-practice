// Given a date, return the corresponding day of the week for that date.

// The input is given as three integers representing the day, month and year respectively.

// Return the answer as one of the following values 
//{"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.


// Example 1:
// Input: day = 31, month = 8, year = 2019
// Output: "Saturday"

// Example 2:
// Input: day = 18, month = 7, year = 1999
// Output: "Sunday"

// Example 3:
// Input: day = 15, month = 8, year = 1993
// Output: "Sunday"
 
// Constraints:

// The given dates are valid dates between the years 1971 and 2100.


//Method 1
console.log('Method 1');

var dayOfTheWeek_method1 = function(day, month, year) {
    let dateString = month+'/'+day+"/"+year;
    let weekDay = new Date(dateString);
    return weekDay.toLocaleDateString('En-en', {weekday: 'long'});
};

var day = 31,
  month = 8,
  year = 2019;
console.log(dayOfTheWeek(day, month, year));


//Method 2
console.log('Method 2');
var dayOfTheWeek = function (day, month, year) {
  let dateString = month + "/" + day + "/" + year;
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date(dateString);
  var dayName = days[d.getDay()];
  return dayName
};

  day = 31,
  month = 8,
  year = 2019;
console.log(dayOfTheWeek(day, month, year));
