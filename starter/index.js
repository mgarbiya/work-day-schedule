/* References */
let currentDayEl = $("#currentDay")
let containerEl = $(".container")

/* Show Date and Time */
$('#currentDay').text(dayjs().format('dddd, MMMM D'));
