// Datos para los ejercicios
const ejercicios = [
  { id: 1, titulo: "Ejercicio 1", enlace: "ejercicio1.html" },
  { id: 2, titulo: "Ejercicio 2. Datos Personales", enlace: "https://radhames08.github.io/Pagina-web.github.io/" },
  { id: 3, titulo: "Ejercicio 3. 102 Etiquetas HTML", enlace: "https://radhames08.github.io/102HTML/" },
  { id: 4, titulo: "Ejercicio 4. Hacer una estructura de menús usando CSS, tomando como ejemplo la página del Banco de Reservas", enlace: "https://radhames08.github.io/Banco.github.io/icio4.html" },
  { id: 5, titulo: "Ejercicio 5. Utilizando el algoritmo del módulo 10, validar si una cédula es correcta", enlace: "https://radhames08.github.io/Cedula.github.io/" },
  { id: 6, titulo: "Ejercicio 6. Crear menú dinámico, utilizando una estructura de datos (JSON, XML.....)", enlace: "https://radhames08.github.io/MenuDinamico.github.io/" },
  { id: 7, titulo: "Ejercicio 7. Crear Formulario con múltiples páginas", enlace: "https://radhames08.github.io/PaginasMultiples.github.io-/" },
  { id: 8, titulo: "Ejercicio 8. Crear un formulario de contactos, generar código QR", enlace: "https://radhames08.github.io/CodigoQR.github.io-/" },
  { id: 9, titulo: "Ejercicio 9. Crear un formulario que integre una librería para realizar gráficos", enlace: "https://radhames08.github.io/Graficos.github.io/" },
  { id: 10, titulo: "Ejercicio 10. Resumen XML", enlace: "https://radhames08.github.io/XML.github.io-/" },
  { id: 11, titulo: "Ejercicio 11. Resumen JSON", enlace: "https://radhames08.github.io/JSON.github.io/" },
  { id: 12, titulo: "Ejercicio 12. Resumen AJAX", enlace: "https://radhames08.github.io/AJAX.github.io/" },
  { id: 13, titulo: "Ejercicio 13. Fomulario con acceso a BD", enlace: "https://radhames08.github.io/FormulBD.github.io-/" },
  { id: 14, titulo: "Ejercicio 14. Resumen Modelo MVC", enlace: "https://radhames08.github.io/MVC.github.io-/" },
  { id: 15, titulo: "Ejercicio 15. Funncionalidades de este Framework", enlace: " https://radhames08.github.io/Spring-Framework.github.io/" },

];

// Generar el menú dinámico
const menu = document.getElementById("menu-dinamico");

ejercicios.forEach(ejercicio => {
  const link = document.createElement("a");
  link.href = ejercicio.enlace;
  link.textContent = ejercicio.titulo;  // Solo el título, sin imagen
  menu.appendChild(link);
});
