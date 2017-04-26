var htmlCode = "";
var programBox = document.getElementById("programBox");

for (var i = 1; i <= 100; i++) {
	let fizzBuzz = "";

	if (i % 3 == 0) {
		fizzBuzz += "Fizz";
	}

	if (i % 5 == 0) {
		fizzBuzz += "Buzz";
	}
	
	htmlCode +="<span>" + (fizzBuzz || i) + "</span><br>";  
}

programBox.innerHTML = htmlCode;