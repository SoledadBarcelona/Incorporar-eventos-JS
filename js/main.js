const btn1 = document.getElementById("miBoton1");
btn1.addEventListener("click", ()=>{
 hola();
 });

function hola()
{window.location="pages/2.html"};



const input4 = document.getElementById("input4");
 const btn = document.getElementById("miBoton2");
 input4.onchange= ()=> btn.disabled=false;
 
 btn.addEventListener("click", ()=>{
     validarFormulario();

 });

  btn.addEventListener("mouseup", ()=>{
     input4.setAttribute("sryle", "display:none") ;

 });



 function validarFormulario()
 {
     const usuario = document.getElementById("input3");
     const pass = document.getElementById("input4");

           if(usuario.value.trim()!=="" && pass.value.trim()!=="")
           {
               alert("Ingrese Uduario y Contraseña")
                let username = prompt("Ingrese su nombre de usuario");
                let pwd = prompt("Ingrese su password");
                if(usuario.value.trim()=="Sergio" && pass.value.trim()=="Duarte" && username=="Sergio.D" && pwd=="Dragon")
            {
                alert(`Bienvenido Segio Duarte`);
                loginExitoso=true; 

            }
            
             else if(usuario.value.trim()=="Fernando" && pass.value.trim()=="Duarte" && username=="Vegeta" && pwd=="777")
            {
              alert(`Bienvenido Fernando Duarte`);
              loginExitoso=true; 
            }

             else if(usuario.value.trim()=="Alexis" && pass.value.trim()=="Isaguirre" && username=="Divididos" && pwd=="Catupecu")
            {
              alert(`Bienvenido Segio Duarte`);
              loginExitoso=true; 
            }

            else 
            { 
              alert("Alguno de los datos ingresados es erroneo")
             }

     }
     else
     {
         alert("DATOS INVÁLIDOS")
     }


 }