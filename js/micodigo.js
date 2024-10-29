window.onload = function() {
	
	let menu = document.querySelector('.hamburger');

	// methodo para el menu de hamburguesa
	function toggleMenu (event) {
	  document.querySelector('.hamburger').classList.toggle('is-active');
	  document.querySelector( ".menu" ).classList.toggle("is_active");
	  //event.preventDefault(); //evitar que haga la accion por defecto
	}

	// click del menu
	menu.addEventListener('click', toggleMenu, false);

	//click de los enlaces
	document.querySelectorAll('.enlaces').forEach(item => {
	  item.addEventListener('click', toggleMenu, false);
	});

	//calculo del año para el footer para que se recargue cada año el copyrigth
	let yearNew = (new Date).getFullYear();
	let parrafo = document.getElementById('yearFooter');
	let boolYearOk = parrafo.innerHTML == yearNew;
	if( !boolYearOk ) parrafo.innerHTML =yearNew;
	
	//para saber llegar
	document.getElementById('map').addEventListener('click', function (e) {
		window.open("https://maps.app.goo.gl/nEBLGTff1H5sb4icA", "_blank");
	});

};


/* Formulario */
function formulario() {
	alert('Hemos recibido tus datos, nos pondremos en contacto contigo');
	document.getElementById('formulario').reset();
}