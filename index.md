<html lang="en">
<head>
<title>Gridcalendar test</title>


</head>
<body>

<main>

<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<script src="gridcalendar.js"></script>
<link rel="stylesheet" type="text/css" href="gridcalendar.css" />

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
