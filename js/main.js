const input2 = document.getElementById("input4");
const btn = document.getElementById("miBoton2");
input4.onchange = () => (btn.disabled = false);

btn.addEventListener("click", () => {
  validarFormulario();
});

function validarFormulario() {
  const nombre = document.getElementById("input1");
  const apellido = document.getElementById("input2");
  const ciudad = document.getElementById("input3");
  const provincia = document.getElementById("input4");

  if (
    nombre.value.trim() !== "" &&
    apellido.value.trim() !== "" &&
    ciudad.value.trim() !== "" &&
    provincia.value.trim() !== ""
  ) {
    alert("Ingrese usuario y password");
    let username = prompt("Ingrese su usuario ");
    let pwd = prompt("Ingrese su password");
    if (
      nombre.value.trim() == "Soledad" &&
      apellido.value.trim() == "Barcelona" &&
      username == "s.barcelona" &&
      pwd == "java"
    ) {
      alert(
        `Bienvenido/a ${nombre.value.trim()} ${apellido.value.trim()} de la ciudad de ${ciudad.value.trim()}, provincia de ${provincia.value.trim()}  `
      );
      loginExitoso = true;
    } else {
      alert("Ha ingresado datos erroneos");
    }
  } else {
    alert("Vuelva a ingresar");
  }
}
