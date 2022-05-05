

$(document).ready(function() {
  // export this to a new funciton later
  const date = new Date();
  const today = date.getDate();
  const currentMonth = date.getMonth();
  let $topMid = (".current-month-year");
  $(".current-month-year").append(`${currentMonth} 2022`);
  const $contain = $("#dates-container");
  let arr = months[currentMonth];
  addDates(arr);
  
  $("button").click(function() {
    let item = findMonth(this.id);
    // console.log(item);
    // let item = findMonth($(this).text());
    // console.log(item);
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
  $(".date").click(function() {
    renderDate();
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
  <button class="date-button">${inp}</button></div>` : `<div></div>`);

  $("#dates-container").append($block);
};

function findMonth(inp) {
  let $contain = $("#dates-container");
  let out = 0;
  switch(inp) {
    case "January":
    case 0:
      $contain.empty();
      addDates(months[0]);
      break;
    case "February":
    case 1:
      $contain.empty();
      addDates(months[1]);
      break;
    case "March":
    case 2:
      $contain.empty();
      addDates(months[2]);
      break;
    case "April":
    case 3:
      $contain.empty();
      addDates(months[3]);
      break;
    case "May":
    case 4:
      $contain.empty();
      addDates(months[4]);
      break;
    case "June":
    case 5:
      $contain.empty();
      addDates(months[5]);
      break;
    case "July":
    case 6:
      $contain.empty();
      addDates(months[6]);
      break;
    case "August":
    case 7:
      $contain.empty();
      addDates(months[7]);
      break;
    case "September":
    case 8:
      $contain.empty();
      addDates(months[8]);
      break;
    case "October":
    case 9:
      $contain.empty();
      addDates(months[9]);
      break;
    case "November":
    case 10:
      $contain.empty();
      addDates(months[10]);
      break;
    case "December":
    case 11:
      $contain.empty();
      addDates(months[11]);
      break;
    default:
      console.log(`error`);
      break;
  }
  return out;
}

// function loadDate(month, date) {
//   let $contain = $(".date-schedule-container");
//   let $today = $(".date-schedule");
//   $today.empty();
//   $today.append(`<div class="day-date">MAY ${date}</div>`);
//   // loadTasks();
// }

function renderDate() {
  let $today = $("<div>AREA</div>");
  $today.empty();
  
  let $quarterOne = (`
     <div class="date-hour">0:00</div>
     <div class="date-hour">1:00</div>
     <div class="date-hour">2:00</div>
     <div class="date-hour">3:00</div>
     <div class="date-hour">4:00</div>
     <div class="date-hour">5:00</div>
  `);
  let $quarterTwo = (`
    <div class="date-hour">6:00</div>
    <div class="date-hour">7:00</div>
    <div class="date-hour">8:00</div>
    <div class="date-hour">9:00</div>
    <div class="date-hour">10:00</div>
    <div class="date-hour">11:00</div>
  `);
    let $quarterThree = (`
    <div class="date-hour">12:00</div>
    <div class="date-hour">13:00</div>
    <div class="date-hour">14:00</div>
    <div class="date-hour">15:00</div>
    <div class="date-hour">16:00</div>
    <div class="date-hour">17:00</div>
  `);
    let $quarterFour = (`
    <div class="date-hour">18:00</div>
    <div class="date-hour">19:00</div>
    <div class="date-hour">20:00</div>
    <div class="date-hour">21:00</div>
    <div class="date-hour">22:00</div>
    <div class="date-hour">23:00</div>
  `);
    
   $today.append($quarterOne);
   $today.append($quarterTwo);
   $today.append($quarterThree);
   $today.append($quarterFour);
  
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