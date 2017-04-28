var htmlCode = "";
var programBox = document.getElementById("programBox");
var customStyle = document.getElementById("customStyle");

function boardMaker(size) {

	for (let i = 0, oddity = ""; i < size; i++) {
		htmlCode += "<div class=\"" + (oddity || "odd") + "\">";

		for (let j = 0; j < size; j++) {
			htmlCode += "<div class=\"square\"></div>"
		}

		htmlCode += "</div><div class=\"cf\"></div>";
		oddity ? oddity = "" : oddity = "even";
	}

	return htmlCode;
}

programBox.innerHTML = boardMaker(8);
customStyle.href = "css/ch2-3i.css";