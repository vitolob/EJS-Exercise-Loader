var htmlCode = "";
var programBox = document.getElementById("programBox");

function isEven(num) {
	num = Math.abs(num);

	if (num == 1) {
		return false;
	}
	else if (num == 0) {
		return true;
	}
	
	return isEven(num - 2);
}

htmlCode += "<form id=\"actionForm\">";
htmlCode += "Insert number <input name=\"num1\"> ";
htmlCode += "<button type=\"submit\">Check</button></form>";

programBox.innerHTML = htmlCode;

var actionForm = document.getElementById("actionForm");

actionForm.addEventListener("submit", function(event) {
	event.preventDefault();
	num1 = Number(event.target.num1.value);
	if (isEven(num1)) {
		alert("The number is Even");
	}
	else {
		alert("The number is Odd");
	}
});