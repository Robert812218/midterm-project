$(document).ready(function() {
  const date = new Date();
  const today = date.getDate();
  const currentMonth = date.getMonth();
  console.log(`currentMonth: ${currentMonth}\nCurrent Day: ${today}`);
  let arr = months[currentMonth];
  addDates(arr);
  
  $('#dates-container[today]').css("background-color", "red");
   
   $('#January').click(function(){
    $('.days-of-week').css("background-color", "red");
    })
  $('.month').click(function(){
    addDates(arr);
    console.log(`month clicked`);
    // figure out how to make background of current date change color
  })
});

function addDates(conditions) {
  let start = conditions[0];
  let mid = conditions[1];
  let end = conditions[2];
  let newArr = [];
  let count = 1;
  let cont = $('#dates-container');
  let blank = `<div>X</div>`;
  
  
  do {
    cont.append(blank);
    start--;
  } while (start > 0);
  
  do {
    let block = `<div>${count}</div>`;
    cont.append(block);
    count++;
  } while (count < mid);
  
  do {
    cont.append(blank);
    end--;
  } while (end > 0);
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

