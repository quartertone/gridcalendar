/*
https://github.com/quartertone/gridcalendar
Customizable Javascript calendar with Promise
by quartertone

Requires Moment.JS: https://momentjs.com/

USAGE:

gridcal(startdate, [title], [calendarID])
	.then(function (result) {
		// do someting with result
		console.log("PROMISE RESULT", result);
		document.getElementById("target").innerHTML = moment(result).format("ll");
	});


startdate: Date string in any format that is compatible with moment.js parser

title: optional title to put at the top of the calendar.

calendarID: optional ID, if you want to perform other styling or javascript manipulation to the calendar.

Returns a Promise that contains the selected date in the result.

Resulting date is formatted Y-MM-DD (eg - 2019-05-28)

*/


function gridcal(initdate = null, title = "-GRIDCAL-", calendarboxname = null) {

	var dimbox = document.createElement("div");
	dimbox.style.zIndex = "149";
	dimbox.style.position = "fixed";
	dimbox.style.top = "0";
	dimbox.style.bottom = "0";
	dimbox.style.left = "0";
	dimbox.style.right = "0";
	dimbox.style.background = "var(--dimbg)";
	dimbox.style.transition = "opacity var(--fadespeed) ease";

	var calendarbox = document.createElement("div");
	if (calendarboxname) calendarbox.id = calendarboxname;
	calendarbox.className = "floatingcalbox"; // for CSS styling
	calendarbox.style.transition = "opacity var(--fadespeed) ease";

	document.body.appendChild(calendarbox);
	calendarbox.style.opacity = "0";

	//Create dimmer BG
	this.caldimbg(dimbox, true, calendarbox); // SET BG LISTENER

	makecal(initdate);


	function makecal(caldate = null) {
		//caldate sanity check
		var caldate = (caldate && moment(caldate).isValid()) ? moment(caldate) : moment(new Date());
		var firstday = moment(caldate).date(1);
		var firstdaynum = firstday.day(); //sunday = 0
		var d = 0;
		var outText = '<div class="floatingcal">'
			+ `<div class="calcaption">${title}<br/>${firstday.year()}</div>`
			+ `<div class="calbtns" id="calwayback">&lt;&lt;</div>`
			+ `<div class="calbtns" id="callittleback">&lt;</div>`
			+ `<div class="calbtns" id="calmonthheader">${firstday.format("MMMM")}</div>`
			+ `<div class="calbtns" id="callittlefwd">&gt;</div>`
			+ `<div class="calbtns" id="calwayfwd">&gt;&gt;</div>`;
			
		
		for (let wkday = 0; wkday < 7; wkday++) {
			outText += '<div class="wkday">' + moment().day(wkday).format("dd") + '</div>';
		}

		for (let cell = 0; cell <= 35; cell++) {
			if (cell < firstdaynum) {
				outText += "<div></div>";

			} else {
				let activeday = "";
				let isodate = firstday.format("Y-MM-") + (new String(++d)).padStart(2, "0");
				if (isodate == caldate.format("Y-MM-DD")) {
					activeday = " calactiveday";
				} else {
					activeday = "";
				}
				outText += `<div class="calday${activeday}" id="${isodate}">${d}</div>`;
				if (d == maxDays(firstday)) break;
			}
		}

		outText += '</div>' + '<input type="button" id="calcancel" value="Cancel">';

		calendarbox.innerHTML = outText;

		setTimeout(function() {
			calendarbox.style.opacity = "1"; // slight delay so animation works
		}, 5);

		calendarbox.onclick = function(e) {
			e.preventDefault();
			switch (e.target.id) {
				case "calwayback":
					makecal(moment(firstday).subtract(1, 'year'));
					break;
				case "callittleback":
					makecal(moment(firstday).subtract(1, 'months'));
					break;
				case "callittlefwd":
					makecal(moment(firstday).add(1, 'months'));
					break;
				case "calwayfwd":
					makecal(moment(firstday).add(1, 'year'));
					break;
				case "calcancel":
					calendarbox.parentElement.removeChild(calendarbox);
					caldimbg(dimbox, false); // remove dimmer BG (cancel calendar)
					break;
				case "calmonthheader":
					let newday = prompt("Enter date", firstday.format("YYYY-MM-DD"));
					makecal(moment(newday));
					break;
				default:
					break;
			}
		}
	}

	return new Promise(function(resolve, reject) {
		calendarbox.onmousedown = function(e) {
			e.preventDefault();
		}
		calendarbox.addEventListener("click", function(e) {
			// add listener is ok here bc this is created once per calendar popup
			e.preventDefault();
			if (e.target.id && e.target.classList.contains("calday")) {
				// turn off dimmer, and close calendarbox
				caldimbg(dimbox, false);
				calendarbox.parentElement.removeChild(calendarbox);
				//console.log("Fulfilling promise");
				resolve(e.target.id);
			}
		});
	});
}

function maxDays(dateobj) {
	//console.log("month", dateobj.month());
	return new Date(dateobj.year(), dateobj.month() + 1, 0).getDate();
	//returns "day 0" == "number of days in previous month"
	//month value adjusted to account for this
}

function caldimbg(dimbox, onoff, source = null) {
	if (onoff) { // always set dimmer if this is true
		dimbox.style.opacity = "0";
		document.body.appendChild(dimbox);
		setTimeout(function() {
			dimbox.style.opacity = "1";
		}, 5);
	} else if (!onoff) { // if only "false" is set, hide the dimmer
		dimbox.parentElement.removeChild(dimbox);
	}

	if (source) { // always setup listener if this is set
		//console.log("dimmer source set to " + source.id);
		dimbox.onclick = dimbox.ontouch = function(e) {
			e.preventDefault();
			dimbox.parentElement.removeChild(dimbox);
			source.parentElement.removeChild(source);
		}
	}
}
