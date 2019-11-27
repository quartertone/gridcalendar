# gridcalendar
Customizable Javascript calendar with Promise




Requires Moment.JS: https://momentjs.com/



USAGE:

gridcal(startdate,[title], [calendarID]).then(function (result) {	
	// do someting with result
	console.log("PROMISE RESULT", result);
	document.getElementById("target").innerHTML = moment(result).format("ll");
});


startdate: Date string in any format that is compatible with moment.js parser

title: optional title to put at the top of the calendar.

calendarID: optional ID, if you want to perform other styling or javascript manipulation to the calendar.


Returns a PROMISE that contains the selected date in the result.

Resulting date is formatted Y-MM-DD
