//DOM = Modelo de objetos del documento (Pagina completa)
var inicio = function()
{
	var dameclic = function()
	{
		$.ajax({
		url: 'https://randomuser.me/api/',
		dataType: 'json',
		success: function(data) {
		$("#txtNombre").val(data.results[0].name.first+" "+data.results[0].name.last);
		$("#imgFoto").attr("src",data.results[0].picture.large);
		console.log(data.results[0].name.first+" "+data.results[0].name.last);
  		}
	});
      
	}
	$("#dameClic").on("click",dameclic);
}
//Inicializar nuestro documento
$(document).on("ready",inicio);
