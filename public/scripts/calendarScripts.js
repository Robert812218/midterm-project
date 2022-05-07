$(document).ready(function() {
  // export this to a new funciton later
  const date = new Date();
  const today = date.getDate();
  let currentMonth = date.getMonth();
  let $topMid = (".current-month-year");
  $(".current-month-year").append(`${currentMonth} 2022`);
  const $contain = $("#dates-container");
  let arr = months[currentMonth];
  addDates(arr);

  $("button").click(function() {
    let item = findMonth(this.id);

  });
  $(".date-button").on('click', function() {
    let today = $(this).text();
    // console.log(`month: ${today}`);
    // console.log(currentMonth);
    renderDate(today, currentMonth);

  });
  $(".month-previous").click(function() {
    $(".current-month-year").empty();
    let mon = findLN(currentMonth, 0);
    console.log(`mon: ${mon}`);
    $(".current-month-year").append(`${mon} 2022`);
    currentMonth--;
  });
  $(".month-next").click(function() {
    $(".current-month-year").empty();
    let mon = findLN(currentMonth, 1);
    console.log(`mon: ${mon}`);
    $(".current-month-year").append(`${mon} 2022`);
    currentMonth++;
  });
  $(".add-calendar-task").on('click', function() {
    // console.log($(this).text());
    // connectTaskForm();
    let task
  });
});

const addDates = function(conditions, day) {
  let start = conditions[0];
  let mid = conditions[1];
  let end = conditions[2];
  let count = 1;

  if (start !== 0) {
      do {
      appendBlock(0);
      start--;
    } while (start > 0);
  }

  do {
    appendBlock(count);
    count++;
  } while (count < mid);

  do {
    appendBlock(0);
    end--;
  } while (end > 0);

};

function appendBlock(inp) {
  const date = new Date();
  const today = date.getDate();
  let $block = (inp > 0 ? `<div class="date">
  <button class="date-button btn btn-outline-primary">${inp}</button></div>` : `<div></div>`);

  $("#dates-container").append($block);
};

function findMonth(inp) {
  let $contain = $("#dates-container");
  let $currentTimeHeader = $(".current-time-header");

  let out = 0;
  switch(inp) {
    case "January":
    case 0:
      $contain.empty();
      addDates(months[0]);
      $currentTimeHeader.empty();
      $currentTimeHeader.append(findMonthForDate(0));
      break;
    case "February":
    case 1:
      $contain.empty();
      addDates(months[1]);
      $currentTimeHeader.empty();
      $currentTimeHeader.append(findMonthForDate(1));
      break;
    case "March":
    case 2:
      $contain.empty();
      addDates(months[2]);
      $currentTimeHeader.empty();
      $currentTimeHeader.append(findMonthForDate(2));
      break;
    case "April":
    case 3:
      $contain.empty();
      addDates(months[3]);
      $currentTimeHeader.empty();
      $currentTimeHeader.append(findMonthForDate(3));
      break;
    case "May":
    case 4:
      $contain.empty();
      addDates(months[4]);
      $currentTimeHeader.empty();
      $currentTimeHeader.append(findMonthForDate(4));
      break;
    case "June":
    case 5:
      $contain.empty();
      $currentTimeHeader.empty();
      addDates(months[5]);
      $currentTimeHeader.append(findMonthForDate(5));
      break;
    case "July":
    case 6:
      $contain.empty();
      $currentTimeHeader.empty();
      addDates(months[6]);
      $currentTimeHeader.append(findMonthForDate(6));
      break;
    case "August":
    case 7:
      $contain.empty();
      $currentTimeHeader.empty();
      addDates(months[7]);
      $currentTimeHeader.append(findMonthForDate(7));
      break;
    case "September":
    case 8:
      $contain.empty();
      $currentTimeHeader.empty();
      addDates(months[8]);
      $currentTimeHeader.append(findMonthForDate(8));
      break;
    case "October":
    case 9:
      $contain.empty();
      $currentTimeHeader.empty();
      addDates(months[9]);
      $currentTimeHeader.append(findMonthForDate(9));
      break;
    case "November":
    case 10:
      $contain.empty();
      $currentTimeHeader.empty();
      addDates(months[10]);
      $currentTimeHeader.append(findMonthForDate(10));
      break;
    case "December":
    case 11:
      $contain.empty();
      $currentTimeHeader.empty();
      addDates(months[11]);
      $currentTimeHeader.append(findMonthForDate(11));
      break;
    default:
      // console.log(`error`);
      break;
  }
  return out;
}

function renderDate(day, month) {
  let $today = $(".date-schedule");
  let mon = findMonthForDate(month);
  $today.empty();
  $today.append(`<div class="date-header">${mon} ${day}</div>`);

  let $dateHours = (`
    <div class="date-hours">
      <div class="date-hour">0:00</div>
      <div class="date-hour">1:00</div>
      <div class="date-hour">2:00</div>
      <div class="date-hour">3:00</div>
      <div class="date-hour">4:00</div>
      <div class="date-hour">5:00</div>
      <div class="date-hour">6:00</div>
      <div class="date-hour">7:00</div>
      <div class="date-hour">8:00</div>
      <div class="date-hour">9:00</div>
      <div class="date-hour">10:00</div>
      <div class="date-hour">11:00</div>
      <div class="date-hour">12:00</div>
      <div class="date-hour">13:00</div>
      <div class="date-hour">14:00</div>
      <div class="date-hour">15:00</div>
      <div class="date-hour">16:00</div>
      <div class="date-hour">17:00</div>
      <div class="date-hour">18:00</div>
      <div class="date-hour">19:00</div>
      <div class="date-hour">20:00</div>
      <div class="date-hour">21:00</div>
      <div class="date-hour">22:00</div>
      <div class="date-hour">23:00</div>
    </div>
  `);
  $today.append($dateHours);
  return $today;
};

const findLN = function(now, direction) {
  // direction = "last"(0) or "next"(1);
  let inp = now.toString();
  let dir = direction.toString();
  let month = "";

  switch(now){
    case 0:
      switch(dir){
        case "0":
          month += "December";
          findMonth("December");
          break;
        case "1":
          month += "February";
          findMonth("February");
          break;
      }
      break;
    case 1:
      switch(dir){
        case "0":
          month += "January";
          findMonth("January");
          break;
        case "1":
          month += "March";
          findMonth("March");
          break;
      }
      break;
    case 2:
      switch(dir){
        case "0":
          month += "February";
          findMonth("February");
          break;
        case "1":
          month += "April";
          findMonth("April");
          break;
      }
      break;
    case 3:
       switch(dir){
        case "0":
          month += "March";
          findMonth("March");
          break;
        case "1":
          month += "May";
          findMonth("May");
          break;
      }
      break;
    case 4:
       switch(dir){
        case "0":
          month += "April";
           findMonth("April");
          break;
        case "1":
          month += "June";
          findMonth("June");
          break;
      }
      break;
    case 5:
       switch(dir){
        case "0":
          month += "May";
          findMonth("May");
          break;
        case "1":
          month += "July";
          findMonth("July");
          break;
      }
      break;
    case 6:
       switch(dir){
        case "0":
          month += "June";
          findMonth("June");
          break;
        case "1":
          month += "August";
          findMonth("August");
          break;
      }
      break;
    case 7:
       switch(dir){
        case "0":
          month += "July";
          findMonth("July");
          break;
        case "1":
          month += "September";
          findMonth("September");
          break;
      }
      break;
    case 8:
       switch(dir){
         case "0":
          month += "August";
          findMonth("August");
          break;
        case "1":
          month += "October";
          findMonth("October");
          break;
      }
      break;
    case 9:
       switch(dir){
        case "0":
          month += "September";
          findMonth("September");
          break;
        case "1":
          month += "November";
          findMonth("November");
          break;
      }
      break;
    case 10:
       switch(dir){
         case "0":
          month += "October";
          findMonth("October");
          break;
        case "1":
          month += "December";
          findMonth("December");
          break;
      }
      break;
    case 11:
       switch(dir){
        case "0":
          month += "November";
          findMonth("November");
          break;
        case "1":
          month += "January";
          findMonth("January");
          break;
      }
      break;
  }
  return month;
};

function findMonthForDate(inp) {
  let str = "";
  switch(inp) {
    case 0:
      str += "January";
      break;
    case 1:
      str += "February";
      break;
    case 2:
      str += "March";
      break;
    case 3:
      str += "April";
      break;
    case 4:
      str += "May";
      break;
    case 5:
      str += "June";
      break;
    case 6:
      str += "July";
      break;
    case 7:
      str += "August";
      break;
    case 8:
      str += "September";
      break;
    case 9:
      str += "October";
      break;
    case 10:
      str += "November";
      break;
    case 11:
      str += "December";
      break;
  }
  return str;
};

function connectTaskForm() {
  let $form1 = (`
    <form>
      <label for="fname">First name:</label><br>
      <input type="text" id="fname" name="fname"><br>
      <label for="lname">Last name:</label><br>
      <input type="text" id="lname" name="lname">
    </form>
  `);
  return $form1;
}

// arr: [blankBefore, startIndex, blankAfter];
const months = {
  0: [6, 31, 5],
  1: [2, 28, 5],
  2: [2, 30, 3],
  3: [5, 30, 0],
  4: [0, 31, 11],
  5: [3, 30, 2],
  6: [5, 31, 6],
  7: [1, 31, 10],
  8: [4, 30, 8],
  9: [6, 31, 5],
  10: [2, 30, 3],
  11: [4, 31, 7],
}




// // arr: [blankBefore, startIndex, blankAfter];
// const months2021 = {
//   0: [5, 31, 6],
//   1: [0, 28, 6],
//   2: [1, 30, 4],
//   3: [4, 30, 1],
//   4: [6, 31, 5],
//   5: [2, 30, 3],
//   6: [4, 31, 0],
//   7: [0, 31, 4],
//   8: [3, 30, 2],
//   9: [5, 31, 6],
//   10: [0, 30, 4],
//   11: [3, 31, 1],
// },

// const months2022 = {
//   0: [6, 31, 5],
//   1: [2, 28, 5],
//   2: [2, 30, 3],
//   3: [5, 30, 0],
//   4: [0, 31, 11],
//   5: [3, 30, 2],
//   6: [5, 31, 6],
//   7: [1, 31, 10],
//   8: [4, 30, 8],
//   9: [6, 31, 5],
//   10: [2, 30, 3],
//   11: [4, 31, 7],
// },

// const months2023 = {
//   0: [0, 31, 4],
//   1: [3, 28, 4],
//   2: [3, 30, 2],
//   3: [6, 30, 6],
//   4: [1, 31, 3],
//   5: [4, 30, 1],
//   6: [6, 31, 5],
//   7: [2, 31, 2],
//   8: [5, 30, 7],
//   9: [0, 31, 4],
//   10: [3, 30, 2],
//   11: [5, 31, 6],
// },

// const months2024 {
//   0: [1, 31, 3],
//   1: [4, 29, 2],
//   2: [5, 30, 7],
//   3: [1, 30, 4],
//   4: [3, 31, 1],
//   5: [6, 30, 6],
//   6: [1, 31, 3],
//   7: [4, 31, 7],
//   8: [0, 30, 5],
//   9: [2, 31, 2],
//   10: [5, 30, 7],
//   11: [0, 31, 4],
// }

