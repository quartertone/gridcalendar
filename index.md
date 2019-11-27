

<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<script src="gridcalendar.js"></script>
<link rel="stylesheet" type="text/css" href="gridcalendar.css" />

<div id="cal" style="border: 1px solid black; background: #aab; width:10em;cursor: pointer">----------</div>
^^ Click this box

<br/>
<br/>
<input type="date" /><br/>
<input type="date" /><br/>
<input type="date" /><br/>
^^ or try these boxes

<br/>
<hr/>
<br/>

<a href="https://github.com/quartertone/gridcalendar">https://github.com/quartertone/gridcalendar</a>
<br/>

Customizable Javascript calendar with Promise<br/>
by quartertone<br/>
<br/>
Requires Moment.JS: <a href="https://momentjs.com/">https://momentjs.com/</a>
<br/><br/>

<h2>USAGE:</h2>

<pre>
gridcal(startdate, [title], [calendarID])
  .then(function (result) {
		// do someting with result
		console.log("PROMISE RESULT", result);
		document.getElementById("target").innerHTML = moment(result).format("ll");
	});
</pre>

<br/><br/>

<code>startdate</code>: Date string in any format that is compatible with moment.js parser<br/><br/>

<code>title</code>: optional title to put at the top of the calendar.<br/><br/>

<code>calendarID</code>: optional ID, if you want to perform other styling or javascript manipulation to the calendar.<br/><br/>

Returns a Promise that contains the selected date in the result.<br/><br/>

Resulting date is formatted Y-MM-DD (eg - 2019-05-28)<br/><br/>


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
