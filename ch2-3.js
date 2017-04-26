var htmlCode = "";
var programBox = document.getElementById("programBox");

function boardMaker(size) {

	for (let i = 0, spaceOrPound = true; i < size; i++) {
		let boardRow = "";

		for (let j = 0; j < size; j++) {
			spaceOrPound ? boardRow += "#" : boardRow += "&nbsp;".repeat(2);
			spaceOrPound = !spaceOrPound;
		}

		htmlCode +="<span>" + boardRow + "</span><br>";
		spaceOrPound = !spaceOrPound;
	}

	return htmlCode;
}

programBox.innerHTML = boardMaker(8);