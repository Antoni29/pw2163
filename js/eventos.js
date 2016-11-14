//DOM = Modelo de objetos del documento (Pagina completa)
var inicio = function()
{
	var dameclic = function()
	{
		alert("Le di clic a un botón >0<");
	}
	$("#dameClic").on("click",dameclic);
}
//Inicializar nuestro documento
$(document).on("ready",inicio);