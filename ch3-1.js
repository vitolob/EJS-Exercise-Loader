var htmlCode = "";
var programBox = document.getElementById("programBox");

function min(num1, num2) {
	return num1 < num2 ? num1 : num2;
}

htmlCode += "<form id=\"actionForm\">";
htmlCode += "1st Number <input name=\"num1\"> 2nd Number <input name=\"num2\"> ";
htmlCode += "<button type=\"submit\">Eval</button></form>";

programBox.innerHTML = htmlCode;

var actionForm = document.getElementById("actionForm");

var teste;

actionForm.addEventListener("submit", function(event) {
	event.preventDefault();
	num1 = Number(event.target.num1.value);
	num2 = Number(event.target.num2.value);
	alert("The min value is " + min(num1,num2));
});