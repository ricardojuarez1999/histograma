txtnombres = document.getElementById("number");
btnAdd = document.getElementById("agregar");
btnHist = document.getElementById("hist");




function myFunction(event) {
	var x = event.which || event.KeyCode;
	document.getElementById("demo").innerHTML = "The Unicode value is: " + x;
}