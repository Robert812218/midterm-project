$(document).ready(function() {
  const date = new Date();
  const today = date.getDate();
  const currentMonth = date.getMonth();
  let $contain = $("#dates-container");
  let arr = months[currentMonth];
  addDates(arr);
  // Selector context is implemented with the .find() method; therefore, $( "li.item-ii" ).find( "li" ) is equivalent to $( "li", "li.item-ii" ).
  
  
  $('#January').click(function() {
    $contain.empty();
    addDates(months[0]);
  });
  $('#February').click(function() {
    $contain.empty();
    addDates(months[1]);
  });
  $('#March').click(function() {
    $contain.empty();
    addDates(months[2]);
  });
  $('#April').click(function() {
        $contain.empty();
    addDates(months[3]);
  });
  $('#May').click(function() {
        $contain.empty();
    addDates(months[4]);
  });
  $('#June').click(function() {
        $contain.empty();
    addDates(months[5]);
  });
  $('#July').click(function() {
        $contain.empty();
    addDates(months[6]);
  });
  $('#August').click(function() {
        $contain.empty();
    addDates(months[7]);
  });
  $('#September').click(function() {
        $contain.empty();
    addDates(months[8]);
  });
  $('#October').click(function() {
        $contain.empty();
    addDates(months[9]);
  });
  $('#November').click(function() {
        $contain.empty();
    addDates(months[10]);
  });
  $('#December').click(function() {
        $contain.empty();
    addDates(months[11]);
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
  let $block = (inp > 0 ? `<div>${inp}</div>` : `<div></div>` );
  // let $block2 = `<div class="red-block">${inp}<div>`;
  // $('#dates-container').append((inp === today) ? $block2 : $block);

  $("#dates-container").append($block);
};

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

