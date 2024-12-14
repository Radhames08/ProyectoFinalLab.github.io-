const form = document.getElementById("registerForm");
const responseDiv = document.getElementById("response");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const telefono = document.getElementById("telefono").value;
  const direccion = document.getElementById("direccion").value;

  try {
    const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, correo, telefono, direccion }),
    });

    const data = await response.json();

    if (response.ok) {
      responseDiv.textContent = data.message;
      responseDiv.style.color = "green";
      form.reset();

      setTimeout(() => {
        responseDiv.textContent = "";
      }, 3000);
    } else {
      responseDiv.textContent = data.message;
      responseDiv.style.color = "red";

      setTimeout(() => {
        responseDiv.textContent = "";
      }, 3000);
    }
  } catch (error) {
    responseDiv.textContent = "Error al conectar con el servidor";
    responseDiv.style.color = "red";

    setTimeout(() => {
      responseDiv.textContent = "";
    }, 3000);
  }
});
