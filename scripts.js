// Slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demodots");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}

// Función para inicializar el mapa
// Función para inicializar el mapa
function initMap() {
  // Nuevas coordenadas de la ubicación deseada
  var location = {lat: -41.13525469601689, lng: -71.29222716366064}; // Ejemplo: Torre Eiffel, París

  // Crear el mapa con las opciones
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15, // Nivel de zoom
      center: location // Centro del mapa
  });

  // Crear un marcador en la ubicación especificada
  var marker = new google.maps.Marker({
      position: location,
      map: map
  });
}





let currentPack = 1;

function moveCarousel(direction) {
    const packs = document.querySelectorAll('.packs-container .pack');
    packs.forEach(pack => pack.classList.remove('active'));

    currentPack = (currentPack + direction + packs.length) % packs.length;

    packs.forEach((pack, index) => {
        pack.style.order = (index - currentPack + packs.length) % packs.length;
    });

    packs[(currentPack + 1) % packs.length].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    moveCarousel(0);
});