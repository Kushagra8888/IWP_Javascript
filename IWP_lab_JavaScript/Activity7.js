//Create a new cookie taking name of cookie, value of cookies and no. of days to last as arguments.
function createCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	} else
		var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
}

//Reads the value for a given cookie name
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');	//Split the string of cookies into NAME=VALUE entities.
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		//alert("c is:" + c);
		//while (c.charAt(0) == ' ')
		//c = c.substring(1, c.length);
		c= c.trim();
		if (c.indexOf(nameEQ) == 0)
			return c.substring(nameEQ.length, c.length);
	}
	return null;
}

//createCookie("Visits", 0, 1);

if (readCookie("Visits") == null) {
	createCookie("Visits", 0, 1);
}

var visits = parseInt(readCookie("Visits"));
visits = visits + 1;
//alert("visits = " + visits);
//alert("eval result = " + eval(visits+1));
createCookie("Visits", visits, 1);
var username = prompt("Enter your name : ", "your name here");
createCookie("Username", username, 1);
alert("Welcome " + username + "! You are the " + visits + "th visitor!");


