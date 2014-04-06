setInterval(function show_time() {
	var d = new Date();
	time_string_24 = d.toTimeString();
	//window.alert(time_string_24);
	document.getElementById("clock_time").innerHTML = time_string_24.slice(0, 8);
},1000);



