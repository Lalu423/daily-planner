$(function () {
//created a var to call dayjs
  var today = dayjs();
//This will display the current day. 
  $('#currentDay').text(today.format('dddd, MMMM D YYYY'));
 //This is the save button function that will save text in the text area. 
  $('.saveBtn').on('click', function () {
    const key = $(this).parent().attr('id');
    const value = $(this).siblings('.description').val();
    localStorage.setItem(key, value);
  });

  function hourChecker() {
    //Get current time
    var currentTime = dayjs().format('H')
    console.log("currentTime: ", currentTime)
    //this checks for the current hour
    $('.time-block').each(function () {
      // This will get the time block
      const key = parseInt($(this).attr('id').split('-')[1]);
      console.log("key: ", key)

      // This will compare time blocks and toggle the classes to represent the current hour in the correct color format.
      if (key === currentTime) {
        $(this).removeClass('past future').addClass('present')

      } else if (key < currentTime) {
        $(this).removeClass('future present').addClass('past')
      } else {
        $(this).removeClass('past present').addClass('future')
      }


    });
  }
  //This calls the hour checker function. 
  hourChecker();
 //This loads the saved text in the corresponding text field it was saved in. 
  $('.time-block').each(function () {
    const key = $(this).attr('id');
    const value = localStorage.getItem(key);
    $(this).children('.description').val(value);
  });
//This will check the hour every second. 
  hourChecker();
  setInterval(updateTime, 1000);
  
});

