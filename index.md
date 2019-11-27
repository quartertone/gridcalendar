

<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<script src="gridcalendar.js"></script>
<link rel="stylesheet" type="text/css" href="gridcalendar.css" />



<style type="text/css">
code {background: #eeee;}
</style>

<div id="cal" style="border: 1px solid black; background: #aab; width:10em;cursor: pointer">----------</div>
^^ Click this box.


<br/>
<br/>
<input type="date" /><br/>
<input type="date" /><br/>
^^ or try these boxes

<br/>
<hr/>
<br/>

<a href="https://github.com/quartertone/gridcalendar">https://github.com/quartertone/gridcalendar</a>
<br/>
<br/>
Customizable Javascript calendar that returns a Promise<br/>
by quartertone<br/>
<br/>
Requires Moment.JS: <a href="https://momentjs.com/">https://momentjs.com/</a>
<br/><br/>

<h3>USAGE:</h3>
<code style="display:block;white-space:pre-wrap">gridcal(startdate, [title], [calendarID])
  .then(function (result) {
    // do someting with result
    console.log("PROMISE RESULT", result);
});
</code>
<br/>
<br/>

<code>startdate</code>: Date string in any format that is compatible with moment.js parser<br/>
<code>title</code>: optional title to put at the top of the calendar.<br/>
<code>calendarID</code>: optional ID, if you want to perform other styling or javascript manipulation to the calendar.<br/><br/>

Returns a Promise that contains the selected date in the result.<br/>
Resulting date is formatted Y-MM-DD (eg - 2019-05-28)<br/><br/>

<a href="https://github.com/quartertone/gridcalendar">https://github.com/quartertone/gridcalendar</a><br/><br/>


<h3>Example:</h3>
<code style="display:block;white-space:pre-wrap;background:#eeee;">&lt;!-- Don't forget to include Moment JS --&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"&gt;&lt;/script&gt;

&lt;script src="gridcalendar.js"&gt;&lt;/script&gt;

&lt;link rel="stylesheet" type="text/css" href="gridcalendar.css" /&gt;

&lt;body&gt;


&lt;div id="cal"&gt;----&lt;/div&gt;


&lt;script type="text/javascript"&gt;

document.getElementById("cal").onclick = function(e) {
  e.preventDefault();
    gridcal(this.innerHTML).then(function(result) {
    	console.log("PROMISE RESULT", result);
    	e.target.innerHTML = moment(result).format("LL");
	});
};

&lt;/script&gt;


[...]
</code>

<br/>



<script type="text/javascript">

document.getElementById("cal").onclick = function(e) {
	e.preventDefault();
	gridcal(this.innerHTML).then(function(result) {
		console.log("PROMISE RESULT", result);
		e.target.innerHTML = moment(result).format("LL");
		//document.getElementById("cal").innerHTML = result;
	});
};





try {
	var datethings = document.querySelectorAll("input[type='date']");

	for (i = 0; i < datethings.length; i++) {
		// Experimental code: replace input date elements with DIVs
		//let newthing = document.createElement("div");
		//newthing.innerHTML = moment().format("ll");
		//datethings[i].parentElement.insertBefore(newthing, datethings[i]);
		//datethings[i].parentElement.removeChild(datethings[i]);

		datethings[i].onclick = function(e) {
			e.preventDefault();
			gridcal(this.innerHTML).then(function(result) {
				console.log("PROMISE RESULT", result);
				e.target.value = result;
			});
		};

	}

} catch (e) {}

</script>

