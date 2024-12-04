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
    "Significado y Cantidad de Movimientos del Choong-Moo",
    "¿Qué Representa el Color Negro del Cinturón?",
];

const urls = {
    "Diferencias entre Arte Marcial y Deporte":"rojoptanegra.html#diferencias-entre-Arte-marcial-y-deporte",
    "Historia del Taekwon-Do Argentino":"rojoptanegra.html#historia-del-taekwon-Do-argentino",
    "Secciones del Cuerpo":"rojoptanegra.html#secciones-del-cuerpo",
    "Significado y Cantidad de Movimientos del Choong-Moo":"rojoptanegra.html#significado-y-cantidad-de-movimientos-del-choong-moo",
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
