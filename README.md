# gridcalendar
Customizable Javascript calendar with Promise

Requires Moment.JS: https://momentjs.com/


USAGE:

Plug and play!
Just include the script and css files along with moment.js, and that's all the setup you need.

```
gridcal(startdate, [title], [calendarID])
	.then(function (result) {
		// do someting with result
		console.log("PROMISE RESULT", result);
		document.getElementById("target").innerHTML = result;
	});
```

`startdate`: Date string in any format that is compatible with moment.js parser

`title`: optional title to put at the top of the calendar.

`calendarID`: optional ID, if you want to perform other styling or javascript manipulation to the calendar.


Returns a Promise result that contains the selected date as a String with the format Y-MM-DD (eg - 2019-05-28)


See the <a href="https://quartertone.github.io/gridcalendar/">DEMO</a>
