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

var username = readCookie("Username");
alert("Hi " + username);
