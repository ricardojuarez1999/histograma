number = document.getElementById("number");
btnAdd = document.getElementById("agregar");
btnHist = document.getElementById("hist");
var lista = [];
var contador = [0,0,0,0,0,0,0,0,0,0];

number.onkeyup = function(e){
	if(e.which == 13) {
		var N = parseInt(number.value); 
		if(N < 1 || N > 100 ) {
			alert("unicamente numeros del 1 al 100");
			number.value = "";
		}
		else {
			lista.push(number.value);
			number.value = "";
		}
		numeros1.innerHTML = lista;
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
	numeros1.innerHTML = lista;
}

btnHist.onclick = function(){
	for(j = 0; j<lista.length+1;j++){
		if(lista[j]>0 && lista[j]<=10){
			contador[0]++
		}
		if(lista[j]>10 && lista[j]<=20){
			contador[1]++
		}
		if(lista[j]>20 && lista[j]<=30){
			contador[2]++
		}
		if(lista[j]>30 && lista[j]<=40){
			contador[3]++
		}
		if(lista[j]>40 && lista[j]<=50){
			contador[4]++
		}
		if(lista[j]>50 && lista[j]<=60){
			contador[5]++
		}
		if(lista[j]>60 && lista[j]<=70){
			contador[6]++
		}
		if(lista[j]>70 && lista[j]<=80){
			contador[7]++
		}
		if(lista[j]>80 && lista[j]<=90){
			contador[8]++
		}
		if(lista[j]>90 && lista[j]<=100){
			contador[9]++
		}
	}
	for (i=1;i<=contador.length;i++){
		var div = document.createElement("div");
		var hs = document.createElement("div");
		hs.setAttribute("class", "numero"+i );
		var txt =document.createTextNode((i-1)*10+"-"+i*10);
		hs.appendChild(txt);
		div.appendChild(hs);
		for (h=0;h<contador[i-1];h++){
			var px = document.createElement("div");
			px.setAttribute("class", "pixeles");
			div.appendChild(px);
		}
		var espacio = document.createElement("div");
		espacio.setAttribute("class","espacio")
		div.appendChild(espacio);
		document.getElementById("numeros").appendChild(div)
		
	}
}