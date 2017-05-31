<<<<<<< HEAD
btnAdd = document.getElementById("agregar");
btnHist = document.getElementById("hist");
numeros = document.getElementById("numeros");

number.onkeyup = function(e){
	if(e.which == 13) {
		lista.push(number.value);
		number.value = "";
	}
=======
txtnombres = document.getElementById("number");
btnAdd = document.getElementById("agregar");
btnHist = document.getElementById("hist");




function myFunction(event) {
	var x = event.which || event.KeyCode;
	document.getElementById("demo").innerHTML = "The Unicode value is: " + x;
>>>>>>> origin/master
}