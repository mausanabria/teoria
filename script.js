
const nav = document.querySelector(".tabs-container");

const offset = nav.offsetTop;

window.addEventListener("scroll", function () {
  if (window.scrollY >= offset) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 100; // Ajusta según tus necesidades
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
  

  document.querySelectorAll('.dropdown-button').forEach(button => {
    button.addEventListener('click', function () {
        const dropdown = this.parentElement;

        // Cierra otros menús abiertos
        document.querySelectorAll('.dropdown').forEach(d => {
            if (d !== dropdown) {
                d.classList.remove('open');
            }
        });

        // Alterna la visibilidad del menú actual
        dropdown.classList.toggle('open');
    });
});

// Cierra el menú si se hace clic fuera de él
window.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
    }
});




// Array con preguntas de ejemplo
const preguntas = [
    "Significado de la palabra Taekwon-do",
    "Nombre del fundador",
    "Nombre de las pre-formas y cantidad de movimientos",
    "Preceptos del Taekwon-do",
    "¿Qué representa el color blanco del cinturón?",
    "Significado y cantidad de movimientos de Chon-ji",
    "¿Qué representa el color amarillo del cinturón?",
    "Significado y cantidad de movimientos de Dan-Gun",
    "Juramento de los Taekwondistas",
    "Instructores que introdujeron el Taekwon-do en la Argentina",
    "Clasificación de instructores",
    "Significado y cantidad de movimientos de Do-San",
    "Fechas importntes en la historia del Taekwon-do",
    "Significado y cantidad de movimientos de Won-Hyo",
    "¿Qué representa el color verde del cinturón?",
    "Modo de proceder en el Taekwon-do",
    "Explicación del saludo",
    "Significado y cantidad de movimientos del Yul-Gok",
    "Relación Instructor-Alumno / Deberes del Alumno",
    "¿Qué representa el color azul del cinturón?",
    "Significado y cantidad de movimientos de Joong-Gun",
    "El porqué del traje blanco (Do-Bok)",
    "Significado y Cantidad de movimientos del Toi-Gye",
    "Explicación de la composición del Taekwon-do",
    "¿Qué es combate? Distintos tipos de combate?",
    "Significado y cantidad de movimientos del Hwa-Rang",
    "¿Qué representa el color rojo del cinturón?",
    "Diferencias entre Arte Marcial y Deporte",
    "Historia del Taekwon-Do Argentino",
    "Secciones del Cuerpo",
    "Significado y Cantidad de Movimientos de Choong-Moo",
    "¿Qué Representa el Color Negro del Cinturón?",
];

const urls = {
    "Diferencias entre Arte Marcial y Deporte":"rojoptanegra.html#diferencias-entre-Arte-marcial-y-deporte",
    "Historia del Taekwon-Do Argentino":"rojoptanegra.html#historia-del-taekwon-Do-argentino",
    "Secciones del Cuerpo":"rojoptanegra.html#secciones-del-cuerpo",
    "Significado y Cantidad de Movimientos de Choong-Moo":"rojoptanegra.html#significado-y-cantidad-de-movimientos-de-choong-moo",
    "¿Qué Representa el Color Negro del Cinturón?":"rojoptanegra.html#¿Que-Representa-el-Color-Negro-del-Cinturon?",
}


const searchInput = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestionsBox");

// Evento para buscar coincidencias en tiempo real
searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();
    suggestionsBox.innerHTML = ""; // Limpia las sugerencias previas

    if (query) {
        const filteredQuestions = preguntas.filter(q => q.toLowerCase().includes(query));
        filteredQuestions.forEach(q => {
            const suggestionItem = document.createElement("div");
            suggestionItem.classList.add("suggestion-item");
            suggestionItem.textContent = q;

            // Redirige o muestra un mensaje al hacer clic en una sugerencia
            suggestionItem.addEventListener("click", () => {
                if (urls[q]) {
                    window.location.href = urls[q]; // Redirige a la URL correspondiente
                } else {
                    alert(`No hay una página asociada para: ${q}`);
                }
            });

            suggestionsBox.appendChild(suggestionItem);
        });

        suggestionsBox.style.display = "block"; // Muestra el desplegable si hay coincidencias
    } else {
        suggestionsBox.style.display = "none"; // Oculta el desplegable si no hay entrada
    }
});

// Oculta las sugerencias al hacer clic fuera del campo
document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-container")) {
        suggestionsBox.style.display = "none";
    }
});

