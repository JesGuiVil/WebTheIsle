
/*
estos scripts hacen que el div de herviboros y carnivoros del index actuen 
como un enlace al apartado correspondiente de la pagina "galeria de dinosaurios"
*/
let hervi = document.querySelectorAll('.hervi');

hervi.forEach(function(boton) {
  boton.addEventListener('click', function() {
    window.location.href = 'gallery.html#hervi';
  });
});

let carni = document.querySelectorAll('.carni');

carni.forEach(function(boton) {
  boton.addEventListener('click', function() {
    window.location.href = 'gallery.html#carni';
  });
});

/*
este script hace que el video se inicie automaticamente al hacer click en el "conocenos" del navbar
*/
let video = document.getElementById("video-background");

  function playVideoWithSound() {
    video.muted = false;
    video.play();
  }

  /*
este script hace que te salga una confirmación al hacer click en cualquier enlance con clase ".confirma" (enlaces a paginas externas)
y te pregunta si estas seguro que deseas ir al enlace externo
*/
let enlaces = document.querySelectorAll('.confirma');
enlaces.forEach(function(link) {
  link.addEventListener('click', function(e) {
    let confirmar = confirm("Está a punto de visitar un enlace externo. ¿Desea continuar?");
    if (!confirmar) {
      e.preventDefault();
    }
  });
});
document.getElementById('search-icon').addEventListener('click', function() {
  searchContent();
});

document.getElementById('search-input').addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    searchContent();
  }
});
 /*
este es el escript que aparece en el pdf de clase para la validacion de formularios, el cual no consigo testear
*/
(function() {
  var forms = document.querySelectorAll('.needs-validation');

  Array.prototype.slice.call(forms).forEach(function(form) {
    form.addEventListener('submit', function(event) {
      if (!this.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();











