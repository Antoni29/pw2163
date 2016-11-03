//Variable global
var operador = "";

function operadores(ope) // +, -, *, /
{
	operador = ope;
}

function igual()
{
	var valor1 = document.calculadora.operando1.value;
	var valor2 = document.calculadora.operando2.value;
	var resultado = 0;
	document.calculadora.resultado.value = eval(valor1+operador+valor2);
}

function limpiar()
{
	document.calculadora.operando1.value = "0";
	document.calculadora.operando2.value = "0";
	document.calculadora.resultado.value = "0";
	operador = "";
}

function numeros(num)
{
	if(operador== "") //Escribir en el operando1
	{
		//Guardamos el valor del operando1
		var valor = document.calculadora.operando1.value;
		if(valor=="0")
		{
			document.calculadora.operando1.value = " ";
		}
		document.calculadora.operando1.value = document.calculadora.operando1.value + num;
	}
	else //escribir en el operando2
	{
		//Guardamos el valor del operando2
		var valor = document.calculadora.operando2.value;
		if(valor=="0")
		{
			document.calculadora.operando2.value = " ";
		}
		document.calculadora.operando2.value = document.calculadora.operando2.value + num;
	}
}