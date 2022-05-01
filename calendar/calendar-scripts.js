$(document).ready(function() {
  const date = new Date();
  // const today = date.getDate();
  // const currentMonth = date.getMonth();
  
  $('.month').click(function(){
    renderMonth(this.id, date);
  })
});

function renderMonth(month, date) {
  $(".dates-container").empty();
  let start = arr[1];
  let len = start + arr.length;
  let cal = $("dates-calendar");
  let count = 1;
  
  for (let i = start; i < len; i++) {
    cal[i].append(count);
    count++;
  }
}

// arr: [numberDays, startIndex];
const months = {
  January: [31, 6],
  February: [28, 2],
  March: [30, 2],
  April: [30, 5],
  May: [31, 0],
  June: [30, 3],
  July: [31, 5],
  August: [31, 1],
  September: [30, 4],
  October: [31, 6],
  November: [30, 2],
  December: [31, 4],
}

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December"
// ];