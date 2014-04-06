
function marks_to_grade(mark) {
	var grade;
	if (mark >= 90)
		grade = "S";
	else if (mark >= 80)
		grade = "A";
	else if (mark >= 70)
		grade = "B";
	else if (mark >= 60)
		grade = "C";
	else if (mark >= 55)
		grade = "D";
	else if (mark > 50)
		grade = "E";
	else
		grade = "F";
	//alert(grade);
	
	return grade;
}

function compute_grade(){
	var marks = document.getElementsByClassName("input_marks");
	//alert(marks.value);
	var result = document.getElementById('result');
	for(i=0; i<marks.length; i++){
		var new_para = document.createElement('p');
		new_para.innerHTML = "Student " + (i+1) + ": " + marks_to_grade(marks[i].value) + "<br>";
		document.body.appendChild(new_para);
	}
	
}
