const bars = document.querySelector(".bars")
bars.onclick =function () {
  var  navBars= document.querySelector(".nav-bars");
    navBars.classList.toggle("active")

}

     // Función para alternar el texto
     function alternarTexto() {
      var texto1 = document.getElementById("texto1");
      var texto2 = document.getElementById("texto2");
      
      if (texto1.style.display === "none") {
          texto1.style.display = "block";
          texto2.style.display = "none";
      } else {
          texto1.style.display = "none";
          texto2.style.display = "block";
      }
  }

  // Llama a la función para alternar el texto cada 3 segundos (3000 milisegundos)
  setInterval(alternarTexto, 3000);