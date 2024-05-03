var menu = document.querySelector('.hamburger');

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
var yearNew = (new Date).getFullYear();
var parrafo = document.getElementById('yearDemo');
parrafo.innerHTML =yearNew;