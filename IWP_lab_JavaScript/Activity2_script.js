function Process_input_string() {
	var input_string = document.getElementById("Sentence").value;
	var string_with_name = input_string + " Kushagra";
	var string_to_array = string_with_name.split(" ").reverse();
	var reversed_string_with_name = string_to_array.join(" ");
	var new_para = document.createElement('p');
	new_para.innerHTML = "Appended string: " + string_with_name;
	document.body.appendChild(new_para);
	var new_para = document.createElement('p');
	new_para.innerHTML = "Reversed string: " + reversed_string_with_name;
	document.body.appendChild(new_para);
	var word_count = new Object;
	for(i=0; i<string_to_array.length; i++){
		if(typeof (word_count[string_to_array[i]]) === 'undefined'){
   			word_count[string_to_array[i]] = 1;
 		}
 		else{
 			word_count[string_to_array[i]] = word_count[string_to_array[i]] + 1;
 		}
	}
	for (var property in word_count) {
    if (word_count.hasOwnProperty(property)) {
        var new_para = document.createElement('p');
		new_para.innerHTML = property + ": " + word_count[property];
		document.body.appendChild(new_para);
    }
  
}
}