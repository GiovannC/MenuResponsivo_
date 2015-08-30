// Se ejecuta la función main cuando todo l documento este cargado 

$(document).ready(main);
 
var contador = 1;
 
function main () {
	$('.menu_bar').click(function(){
		// animate con el objeto left: se desplaza de la izquierda a la derecha hasta la position 0
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			// regresamos la variable a 0
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
 
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}
