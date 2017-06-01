number = document.getElementById("number");
btnAdd = document.getElementById("agregar");
btnHist = document.getElementById("hist");
numeros = document.getElementById("numeros");
var lista = [];
var contador = [];

number.onkeyup = function(e){
	if(e.which == 13) {
		var N = parseInt(number.value); 
		if(N < 1 || N > 100) {
			alert("unicamente numeros del 1 al 100");
			number.value = "";
		}
		else {
			lista.push(number.value);
			number.value = "";
		}
	}
}

btnAdd.onclick = function(){
	var N = parseInt(number.value); 
	if(N < 1 || N > 100) {
		alert("unicamente numeros del 1 al 100");
		number.value = "";
	}
	else {
		lista.push(number.value);
		number.value = "";
	}
}

btnHist.onclick = function(){
	
}