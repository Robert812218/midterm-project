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
   // Renders the month of the button clicked
  $("button").click(function() {
    let item = findMonth(this.id);
  });
  // Brings up 24 hour block beside calendar
  $(".date-button").on('click', function() {
    let today = $(this).text();
    // console.log(`month: ${today}`);
    // console.log(currentMonth);
    renderDate(today, currentMonth);
  
  });
  // Move back one month
  $(".month-previous").click(function() {
    $(".current-month-year").empty();
    let mon = findLN(currentMonth, 0);
    console.log(`mon: ${mon}`);
    $(".current-month-year").append(`${mon} 2022`);
    currentMonth--;
  });
  // Move forward one month
  $(".month-next").click(function() {
    $(".current-month-year").empty();
    let mon = findLN(currentMonth, 1);
    console.log(`mon: ${mon}`);
    $(".current-month-year").append(`${mon} 2022`);
    currentMonth++;
  });
  // Appends task to date/calendar
    $(".list-group-item").find("button").on('click', function() {
      // const chunk = this.parentElement.textContent;
      // console.log(chunk);
      // const task = $(this).text();
      // const task2 = this.parentElement.text;
      // let $task = this;
      // console.log(`chunk: ${chunk}\n task: ${task}`);
      // console.log(`task2: ${task2}`);
      // ////
      // const chunk = this.parentElement;
      // console.log(chunk);
      // ////
      // console.log($(this));
      // console.log(this);
      // const chunk2 = $(this).find("label").html();
      // console.log($(this).find("label").val());
      // console.log(chunk2);
      // const label = $(".form-check-label").text();
      // console.log(label);


    });
    $(".new-time-date-form").on('click', function(inp) {
      console.log("this is a form");
      $(".render-form").append(createCalendarComponent());
      
    });
  });
  
 // Appends dates to month
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
  
 // Adds x number of blank/date/blank blocks to each month
 function appendBlock(inp) {
  const date = new Date();
  const today = date.getDate();
  let $block = (inp > 0 ? `<div class="date">
  <button class="date-button">${inp}</button></div>` : `<div></div>`);
  
  $("#dates-container").append($block);
 };
  
  
 //  Takes input and determines which month to render/renders month
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
  
 // appends 24 hrs to the selected date
 function renderDate(day, month) {
  let $today = $(".date-schedule");
  let mon = findMonthForDate(month);
  $today.empty();
  $today.append(`<div class="date-header">${mon} ${day}</div>`);
   // keeping this in case something Im about to try doesnt work
  
  // let $dateHours = (`
  //   <div class="date-hours">
  //     <div class="date-hour">0:00</div>
  //     <div class="date-hour">1:00</div>
  //     <div class="date-hour">2:00</div>
  //     <div class="date-hour">3:00</div>
  //     <div class="date-hour">4:00</div>
  //     <div class="date-hour">5:00</div>
  //     <div class="date-hour">6:00</div>
  //     <div class="date-hour">7:00</div>
  //     <div class="date-hour">8:00</div>
  //     <div class="date-hour">9:00</div>
  //     <div class="date-hour">10:00</div>
  //     <div class="date-hour">11:00</div>
  //     <div class="date-hour">12:00</div>
  //     <div class="date-hour">13:00</div>
  //     <div class="date-hour">14:00</div>
  //     <div class="date-hour">15:00</div>
  //     <div class="date-hour">16:00</div>
  //     <div class="date-hour">17:00</div>
  //     <div class="date-hour">18:00</div>
  //     <div class="date-hour">19:00</div>
  //     <div class="date-hour">20:00</div>
  //     <div class="date-hour">21:00</div>
  //     <div class="date-hour">22:00</div>
  //     <div class="date-hour">23:00</div>
  //   </div>
  // `);
  
  let $dateHours = (`
  <div class="date-hours">
    <div class="date-hour">
      <p id="time-0">0:00</p>
    </div>
    <div class="date-hour">
      <p id="time-1">1:00</p>
    </div>
    <div class="date-hour">
      <p id="time-2">2:00</p>
    </div>
    <div class="date-hour">
      <p id="time-3">3:00</p>
    </div>
    <div class="date-hour">
      <p id="time-4">4:00</p>
    </div>
    <div class="date-hour">
      <p id="time-5">5:00</p>
    </div>
    <div class="date-hour">
      <p id="time-6">6:00</p>
    </div>
    <div class="date-hour">
      <p id="time-7">7:00</p>
    </div>
    <div class="date-hour">
        <p id="time-8">8:00</p>
    </div>
    <div class="date-hour">
      <p id="time-9">9:00</p>
    </div>
    <div class="date-hour">
      <p id="time-10">10:00</p>
    </div>
    <div class="date-hour">
      <p id="time-11">11:00</p>
    </div>
    <div class="date-hour">
      <p id="time-12">12:00</p>
    </div>
    <div class="date-hour">
      <p id="time-13">13:00</p>
    </div>
    <div class="date-hour">
      <p id="time-14">14:00</p>
    </div>
    <div class="date-hour">
      <p id="time-15">15:00</p>
    </div>
    <div class="date-hour">
      <p id="time-16">16:00</p>
    </div>
    <div class="date-hour">
      <p id="time-17">17:00</p>
    </div>
    <div class="date-hour">
      <p id="time-18">18:00</p>
    </div>
    <div class="date-hour">
      <p id="time-19">19:00</p>
    </div>
    <div class="date-hour">
      <p id="time-">20:00</p>
    </div>
    <div class="date-hour">
      <p id="time-">21:00</p>
    </div>
    <div class="date-hour">
      <p id="time-">22:00</p>
    </div>
    <div class="date-hour">
      <p id="time-">23:00</p>
    </div>
  </div>
 `);
  $today.append($dateHours);
  return $today;
 };
  
  
 // $(this).children.text()
 // $(this).parent.text()
  
 // Moves the calendar to the previous or following month
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


 // creates a form to add input to dates
 function connectTaskForm(inp) {
  let $dataForm = (`<div class="data-form">${inp}</div>`);

  // let $formEat = (`
  //   <form>
  //     <label for="new-eat-date">What day would you like to eat ${inp}?</label><br>
  //     <input type="text" id="new-eat-date" name="new-eat-date"><br>
  //     <label for="new-eat-time"></label>What time would you like to eat ${inp}<br>
  //     <input type="text" id="new-eat-time" name="new-eat-time">
  //   </form>
  // `);
  // let $formBuy = (`
  //   <form>
  //     <label for="new-purchase-date">What day would you like to go buy ${inp}?</label><br>
  //     <input type="text" id="new-purchase-date" name="new-purchase-date"><br>
  //     <label for="new-purchase-time">What time would you like to purchase ${inp}</label><br>
  //     <input type="text" id="new-purchase-time" name="new-purchase-time">
  //   </form>
  // `);
  // let $formWatch = (`
  //   <form>
  //     <label for="new-watch-date">What day would you like to watch ${inp}?</label><br>
  //     <input type="text" id="new-watch-date" name="new-watch-date"><br>
  //     <label for="new-watch-time">What time would you like to watch ${inp}</label><br>
  //     <input type="text" id="new-watch-time" name="new-watch-time">
  //   </form>
  // `);
  // let $formRead = (`
  //   <form>
  //   <form>
  //     <label for="new-read-date">What day would you like to read ${inp}?</label><br>
  //     <input type="text" id="new-read-date" name="new-read-date"><br>
  //     <label for="new-read-time">What time would you like to read ${inp}</label><br>
  //     <input type="text" id="new-read-time" name="new-read-time">
  //   </form>
  // `);
  // let $formGeneral = (`
  //   <form>
  //     <label for="new-general-date">What day would you like to ... ${inp}?</label><br>
  //     <input type="text" id="new-general-date" name="new-general-date"><br>
  //     <label for="new-general-time">What time would you like to ... ${inp}</label><br>
  //     <input type="text" id="new-general-time" name="new-general-time">
  //   </form>
  // `);
  // switch(inp[0]) {
  //   case 'Eat':
  //     $dataForm.append($formEat);
  //     break;
  //   case 'Buy':
  //     $dataForm.append($formBuy);
  //     break;
  //   case 'Watch':
  //     $dataForm.append($formWatch);
  //     break;
  //   case 'Read':
  //     $dataForm.append($formRead);
  //     break;
  //   default:
  //     $dataForm.append($formGeneral);
  //     break;
  // }
  return $dataForm;
 };

 function createCalendarComponent(name) {
   console.log(`nameAdded: ${name}`);
  //  let $newForm = (`
  //    <form>
  //      <label for="new-task-date">What day would you like to ${name}?</label><br>
  //      <input type="text" id="new-task-date" name="new-task-date"><br>
  //      <label for="new-task-time"></label>What time would you like to ${name}<br>
  //      <input type="text" id="new-task-time" name="new-task-time">
  //    </form>
  //  `);
  let $newForm = (`
  <form class="new-task-form-outer">
    <label for="new-task-date">What date would you like to do task ${name}?</label><br>
    <input type="text" id="new-task-date" name="new-task-date"><br>
    <label for="new-task-time"></label>What time would you like to do task ${name}<br>
    <input type="text" id="new-task-time" name="new-task-time">
    <button type="submit" id="new-task-form-submit">SUBMIT</button>
  </form>
  `);
   $(".new-time-date-form").append($newForm);
   return $newForm;
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
 