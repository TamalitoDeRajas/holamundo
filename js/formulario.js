/*let nombre=prompt("Ingresa tu nombre: ");
let edad=prompt("Ingresa tu edad: ");
document.write("Hola " + nombre);
document.write("<br> Tu edad es: " + edad);


let num1=parseInt(prompt("Ingresa el primer numero: "));
let num2=parseInt(prompt("Ingresa el segundo numero: "));


let suma=num1+num2;
document.write("<br>La suma es: " + suma);*/
function suma (numero1,numero2){
	let num1,num2,sum;

	num1=parseInt(numero1);
	num2=parseInt(numero2);
	sum=num1+num2;

	alert("La suma es: "+sum);

}

function resta (numero1,numero2){
	let num1,num2,res;

	num1=parseInt(numero1);
	num2=parseInt(numero2);
	res=num1-num2;

	alert("La resta es: "+res);

}

function producto (numero1,numero2){
	let num1,num2,prod;

	num1=parseInt(numero1);
	num2=parseInt(numero2);
	prod=num1*num2;

	alert("El producto es: "+prod);

}

function division (numero1,numero2){
	let num1,num2,div;

	num1=parseInt(numero1);
	num2=parseInt(numero2);
	div=num1/num2;

	alert("La resta es: "+div);

}