function evaluate_expr(){
	var expression = document.getElementById("expr").value;
	var result = document.getElementById("result");
	result.value = eval(expression);
}
