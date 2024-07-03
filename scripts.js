//SLIDESHOW//

/**
 * Muestra la diapositiva seleccionada en la slideshow
 * @param {number} n Índice de la diapositiva a mostrar
 */
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demodots");
  
  // Ajustar índice fuera de rango
  if (n > x.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = x.length;
  }
  
  // Ocultar todas las diapositivas
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  
  // Remover clase activa de todos los puntos
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  
  // Mostrar la diapositiva seleccionada
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}

/**
 * Avanza o retrocede la slideshow en n diapositivas
 * @param {number} n Número de diapositivas a avanzar o retroceder
 */
function plusDivs(n) {
  showDivs(slideIndex += n);
}

/**
 * Muestra la diapositiva específica
 * @param {number} n Índice de la diapositiva a mostrar
 */
function currentDiv(n) {
  showDivs(slideIndex = n);
}

// Inicializar slideshow
var slideIndex = 1;
showDivs(slideIndex);




//MAPA//
/**
 * Inicializa el mapa de Google Maps
 */
function initMap() {
  // Coordenadas de la ubicación deseada
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



/*Slide*/
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
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}


// JavaScript para abrir la ventana de chat de WhatsApp
document.addEventListener('DOMContentLoaded', function() {
  var whatsappBtn = document.getElementById('whatsapp-chat-btn');

  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function() {
      // Reemplaza este número de teléfono con el número de WhatsApp al que quieres enviar mensajes
      var phoneNumber = '+5492944209775'; // Ejemplo de número de WhatsApp

      // Abre una nueva ventana de chat de WhatsApp
      window.open('https://wa.me/' +5492944209775, '_blank');
    });
  }
});


document.getElementById('newsletter-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  
  if (email) {
    const thanksMessage = document.getElementById('thanks-message');
    thanksMessage.style.display = 'block';
    thanksMessage.classList.add('animate__fadeIn');
    document.getElementById('newsletter-form').style.display = 'none';
  }
});





const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const packs = document.querySelectorAll('.pack');
let currentIndex = 0;

function updateCarousel() {
  packs.forEach((pack, index) => {
    pack.classList.remove('prev', 'active', 'next');
    if (index === currentIndex) {
      pack.classList.add('active');
    } else if (index === (currentIndex - 1 + packs.length) % packs.length) {
      pack.classList.add('prev');
    } else if (index === (currentIndex + 1) % packs.length) {
      pack.classList.add('next');
    }
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + packs.length) % packs.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % packs.length;
  updateCarousel();
});

updateCarousel(); // Inicializar el carrusel
