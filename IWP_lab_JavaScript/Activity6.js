function validate_input(){
	var input_form = document.forms[0];
	var name_pattern=/^[a-zA-Z]+$/;
	var email_pattern = /^([a-zA-Z0-9]+)@([a-z]+)\.([a-z]{1,3})$/;
	var err_msgs = new Array();
	var mobile_pattern = /^[0-9]{10}$/;
	var age_pattern = /^([1-9]{1,2}|[1][1-9]{1,2})$/;
	//alert(input_form['f_name']);
	if (!name_pattern.test(input_form["f_name"].value)){
		err_msgs.push("*Invalid First name entered!");
	}
	if (!name_pattern.test(input_form["l_name"].value)){
		err_msgs.push("*Invalid Last name entered!");
	}
	if (!email_pattern.test(input_form["email"].value)){
		err_msgs.push("*Invalid e-mail entered!");
	}
	if (!mobile_pattern.test(input_form["mobile_no"].value)){
		err_msgs.push("*Invalid mobile no. entered!");
	}
	if (!age_pattern.test(input_form["age"].value)){
		err_msgs.push("*Invalid age entered!");
	}
	document.getElementById("errors").innerHTML = err_msgs.join("<br>");
}
