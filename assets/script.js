$(function () {

  var today = dayjs();

  $('#currentDay').text(today.format('dddd, MMMM D YYYY'));
 
  $('.saveBtn').on('click', function () {
    const key = $(this).parent().attr('id');
    const value = $(this).siblings('.description').val();
    localStorage.setItem(key, value);
  });

  function hourChecker() {
    //Get current time
    var currentTime = dayjs().format('H')
    console.log("currentTime: ", currentTime)
    //Checking for each hour
    $('.time-block').each(function () {
      // get time block
      const key = parseInt($(this).attr('id').split('-')[1]);
      console.log("key: ", key)

      // Compare time block to current time
      if (key === currentTime) {
        $(this).removeClass('past future').addClass('present')

      } else if (key < currentTime) {
        $(this).removeClass('future present').addClass('past')
      } else {
        $(this).removeClass('past present').addClass('future')
      }


    });




  }
  hourChecker();
 
  $('.time-block').each(function () {
    const key = $(this).attr('id');
    const value = localStorage.getItem(key);
    $(this).children('.description').val(value);
  });

  hourChecker();
  setInterval(updateTime, 1000);
  
});

