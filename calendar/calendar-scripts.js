$(document).ready(function() {
  const date = new Date();
  const today = date.getDate();
  const currentMonth = date.getMonth();
  const $contain = $("#dates-container");
  let arr = months[currentMonth];
  addDates(arr);
  
  $("button").click(function() {
    let item = findMonth(this.id);
    console.log(item);
  });
  $(".date").click(function() {
    console.log(this);
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
  <button class="date-button">${inp}</button></div>` : `<div></div>` );
  // let $block2 = `<div class="red-block">${inp}<div>`;
  // $('#dates-container').append((inp === today) ? $block2 : $block);

  $("#dates-container").append($block);
};

function findMonth(inp) {
  let $contain = $("#dates-container");
  let out = 0;
  switch(inp) {
    case "January":
      $contain.empty();
      addDates(months[0]);
      break;
    case "February":
      $contain.empty();
      addDates(months[1]);
      break;
    case "March":
      $contain.empty();
      addDates(months[2]);
      out += 2;
      break;
    case "April":
      $contain.empty();
      addDates(months[3]);
      break;
    case "May":
      $contain.empty();
      addDates(months[5]);
      break;
    case "June":
      $contain.empty();
      addDates(months[6]);
      break;
    case "July":
      $contain.empty();
      addDates(months[7]);
      break;
    case "August":
      $contain.empty();
      addDates(months[8]);
      break;
    case "September":
      $contain.empty();
      addDates(months[9]);
      break;
    case "October":
      $contain.empty();
      addDates(months[10]);
      break;
    case "November":
      $contain.empty();
      addDates(months[11]);
      break;
    case "December":
      $contain.empty();
      addDates(months[1]);
      break;
    default:
      console.log(`error`);
  }
  return out;
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

