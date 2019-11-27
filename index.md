<html lang="en">
<head>
<title>Gridcalendar test</title>

<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<script src="gridcalendar.js"></script>
<link rel="stylesheet" type="text/css" href="gridcalendar.css" />

</head>
<body>

<main>
<pre>
Customizable Javascript calendar with Promise

Requires Moment.JS: https://momentjs.com/

USAGE:
<code>
gridcal(startdate, [title], [calendarID])
	.then(function (result) {
		// do someting with result
		console.log("PROMISE RESULT", result);
		document.getElementById("target").innerHTML = result;
	});
	</code>
startdate: Date string in any format that is compatible with moment.js parser

title: optional title to put at the top of the calendar.

calendarID: optional ID, if you want to perform other styling or javascript manipulation to the calendar.

Returns a Promise that contains the selected date in the result.

Resulting date is formatted Y-MM-DD (eg - 2019-05-28)
</pre>

<div id="cal">----------</div>

<br/>
<br/>
<input type="date" />

<script type="text/javascript">

document.getElementById("cal").onclick = function(e) {
	e.preventDefault();
	gridcal(this.innerHTML).then(function(result) {
		console.log("PROMISE RESULT", result);
		e.target.innerHTML = moment(result).format("LL");
		//document.getElementById("cal").innerHTML = result;
	});
};







// Experimental code to replace input date elements with DIVs

try {
	var datethings = document.querySelectorAll("input[type='date']");

	for (i = 0; i < datethings.length; i++) {
		let newthing = document.createElement("div");
		newthing.innerHTML = moment().format("ll");
		datethings[i].parentElement.insertBefore(newthing, datethings[i]);
		datethings[i].parentElement.removeChild(datethings[i]);
		//replace date input with DIVs


		newthing.onclick = function(e) {
			e.preventDefault();
			gridcal(this.innerHTML).then(function(result) {
				console.log("PROMISE RESULT", result);
				e.target.innerHTML = moment(result).format("ll");
			});
		};

	}

} catch (e) {}


/* */



</script>

</main>
</body>
</html>
