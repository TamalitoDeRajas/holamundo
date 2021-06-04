function comparar(numero1, numero2, numero3){
	let num1, num2, num3, menor;

	num1=parseInt(numero1);
	num2=parseInt(numero2);
	num3=parseInt(numero3);

	if(num1<num2){
		if(num1<num3){
			alert(num1+" es menor a los demás números");
		}else{
			alert(num3+" es menor a los demás números");
		}
	}else if(num2<num3){
		alert(num2+" es el menor a los demás números");
	}else{
		alert(num3+" es el menor a los demás números");
	}

}


function convertir(numsem){
	let ns;

	ns=parseInt(numsem);

	switch(ns){
		case 1:alert("Lunes");
		break;

		case 2:alert("Martes");
		break;

		case 3:alert("Miércoles");
		break;

		case 4:alert("Jueves");
		break

		case 5:alert("Viernes");
		break;

		case 6:alert("Sábado");
		break;

		case 7:alert("Domingo");
		break;

		default:alert("Error, ingresa un número válido (del 1 al 7 :v)");
	}
}

function validar(edad){
	let E;

	E=parseInt(edad);

	if(E<=3){
		alert("Eres un bebe");

	}else if(E>3 && E<13){
		alert("Eres un niño");
	
	}else if(E>=13 && E<18) {
		alert("Eres un adolescente");

	}if(E>=18){
		alert("Eres un adulto");
	}


}