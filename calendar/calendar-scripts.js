$(document).ready(function() {
  const date = new Date();
  const today = date.getDate();
  const currentMonth = date.getMonth();
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
    // console.log($(this).text());
    // console.log(this);
    for (const i in months) {
      console.log(arr);
      
    }
    
  });
  $(".month-next").click(function() {
    console.log(arr);
  });
  $(".date").click(function() {
    console.log(`this: ${this}`);
    // let $ting = this;
    // $ting.css('color','red');
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
      currentMonth = months[0];
      break;
    case "February":
    case 1:
      $contain.empty();
      addDates(months[1]);
      currentMonth = months[1];
      break;
    case "March":
    case 2:
      $contain.empty();
      addDates(months[2]);
      currentMonth = months[2];
      break;
    case "April":
    case 3:
      $contain.empty();
      addDates(months[3]);
      currentMonth = months[3];
      break;
    case "May":
    case 4:
      $contain.empty();
      addDates(months[4]);
      currentMonth = months[4];
      break;
    case "June":
    case 5:
      $contain.empty();
      addDates(months[5]);
      currentMonth = months[5];
      break;
    case "July":
    case 6:
      $contain.empty();
      addDates(months[6]);
      currentMonth = months[6];
      break;
    case "August":
    case 7:
      $contain.empty();
      addDates(months[7]);
      currentMonth = months[7];
      break;
    case "September":
    case 8:
      $contain.empty();
      addDates(months[8]);
      currentMonth = months[8];
      break;
    case "October":
    case 9:
      $contain.empty();
      addDates(months[9]);
      currentMonth = months[9];
      break;
    case "November":
    case 10:
      $contain.empty();
      addDates(months[10]);
      currentMonth = months[10];
      break;
    case "December":
    case 11:
      $contain.empty();
      addDates(months[11]);
      currentMonth = months[11];
      break;
    default:
      console.log(`error`);
  }
  return out;
}

function loadDate(month, date) {
  let $contain = $(".date-schedule-container");
  let $today = $(".date-schedule");
  $today.empty();
  $today.append(`<div class="day-date">MAY ${date}</div>`);
  // loadTasks();
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