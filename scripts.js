btnAdd = document.getElementById("agregar");
btnHist = document.getElementById("hist");
numeros = document.getElementById("numeros");

number.onkeyup = function(e){
	if(e.which == 13) {
		lista.push(number.value);
		number.value = "";
	}
}