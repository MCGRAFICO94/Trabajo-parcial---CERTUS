// Espera a que cargue la pagina antes de correr el JS
$(document).ready(function () { 
    
    // Cuando el usuario llene las casillas de informacion del formulario, ejecutar esta funcion
    
    $("#formulario-cliente").submit(function (event) {
        // Debemos evitar que nuestro formulario se envie automaticamente
        event.preventDefault();
        
        // Obtener los datos ingresados en el formulario
        let nombre = $("#nombre").val();
        let apellido = $("#apellido").val();
        let correo = $("#correo").val();
        let genero = $("#genero").val();
        let fechaNacimiento = $("#fecha-nacimiento").val();

        // Validacion de los datos
        
        if (nombre == "" || nombre.length > 50 || nombre.length <2) {
            alert("Por favor ingrese su nombre correctamente.");
            return; // detener la funcion
        }
        if (apellido == "" || nombre.length > 80 || nombre.length <2) {
            alert("Por favor ingrese sus apellidos correctamente.");
            return; // detener la funcion
        }
        if (correo == "" || correo.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == null) {
            alert("Por favor ingrese su email correctamente.");
            return; // detener la funcion
        }
        if (genero == "") {
            alert("Por favor ingrese su genero correctamente.");
            return; // detener la funcion
        }
        if (fechaNacimiento == "") {
            alert("Por favor ingrese su fecha de nacimiento correctamente.");
            return; // detener la funcion
        }
        // Confirmar que el cliente desea enviar sus datos
        if (!confirm("¿Está seguro de enviar tus datos?")) {
            return;
        }
        // Mostrar un mensaje de alerta confirmando que se envió el formulario
        alert("El formulario y tus datos han sido enviado, gracias..");
    })
})