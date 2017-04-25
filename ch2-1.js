var htmlCode = "";
var programBox = document.getElementById("programBox");

for (var i = 0, pounds = ""; i < 7; i++) {
	pounds += "#";
	htmlCode += "<span>" + pounds + "</span><br>";
}

programBox.innerHTML = htmlCode;