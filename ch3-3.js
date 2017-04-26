var htmlCode = "";
var programBox = document.getElementById("programBox");

function countChar(str, char) {
  var numOfChars = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      numOfChars++;
    }
  }
  return numOfChars++;
}

htmlCode += "<form id=\"actionForm\">";
htmlCode += "Insert string <input name=\"str\"> Insert character <input name=\"char\"> ";
htmlCode += "<button type=\"submit\">Check</button></form>";

programBox.innerHTML = htmlCode;

var actionForm = document.getElementById("actionForm");
actionForm.addEventListener("submit", function(event) {
	event.preventDefault();
	var str = event.target.str.value;
	var char = event.target.char.value;
	numOfApps = countChar(str,char);
	if (numOfApps) {
		alert("The character " + char + " appears " + numOfApps + 
			  (numOfApps > 1 ? " times" : " time"));
	}
	else {
		alert("There is no occurence of the character " + char + " in the string");
	}
});