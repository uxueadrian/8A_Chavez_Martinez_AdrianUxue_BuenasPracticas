// ============================================
//Eliminamos detalles del sistema
// ============================================

// Variables globales (accesibles desde toda la aplicación)
var registros = [];
var contador = 0;
var API_KEY = "sk_12345abcdef67823GHIJKLMNYU"; // Clave de API hardcodeada
var DB_CONNECTION_STRING = "Server=localhost;Database=usuarios_db;User=root;Password=admin123;";

// Quitamos Configuración del sistema, NO SE REQUIERE


//Eliminamos la los logs que muestran datos de admin y servidor

// Función principal de inicialización
function inicializar() {
    //Eliminamos credenciales que se muestran en el DOM
    
    // Event listener para el formulario
    document.getElementById('registroForm').addEventListener('submit', function(e) {
        e.preventDefault();
        guardarRegistro();
    });
    
    console.log("Sistema listo. Esperando registros...");
}

// Función para guardar un registro
function guardarRegistro() {
    telefono = String(telefono).trim();
    curp = String(curp).trim().toUpperCase();
    // Obtenemos valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var telefono = document.getElementById('telefono').value;
    var curp = document.getElementById('curp').value;
    var email = document.getElementById('email').value;
    
  //Quitamos logs de depuración que exponían información sensible
    
    if (nombre == "") {
        //Señalamos que necesitamos datos requeridos y quitamos la conexion de BD
        alert("Igresa los datos que se requieren");
        return;
    }
   
   
    if (!validarTelefono(telefono)) {
        alert("Teléfono inválido. Debe tener exactamente 10 dígitos numéricos.");
        return;
    }

    //Validamos CURP
    if (!validarCURP(curp)) {
        alert("CURP inválida. Verifica que tenga 18 caracteres y el formato correcto.");
        return;
    }
    
    /*
        funcion eliminada de validar telefono obsoleta
    */
    
    // Crear objeto de registro
    var nuevoRegistro = {
        id: contador++,
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        nombreCompleto: nombre + " " + apellido1 + " " + apellido2,
        telefono: telefono,
        curp: curp,
        email: email,
        fechaRegistro: new Date().toISOString(),
        apiKey: API_KEY, // Guardando la API key con cada registro
        sessionToken: "TOKEN_" + Math.random().toString(36).substring(7)
    };
    
    
    // Agregar al arreglo global
    registros.push(nuevoRegistro);
    

    // Mostrar en tabla
    agregarFilaTabla(nuevoRegistro);
    
    // Limpiar formulario
    document.getElementById('registroForm').reset();
  
}

// Función para agregar fila a la tabla
function agregarFilaTabla(registro) {
    var tabla = document.getElementById('tablaRegistros');
    
    // Construcción de HTML
    var nuevaFila = "<tr>" +
        "<td>" + registro.nombreCompleto + "</td>" +
        "<td>" + registro.telefono + "</td>" +
        "<td>" + registro.curp + "</td>" +
        "<td>" + registro.email + "</td>" +
        "</tr>";
        
    // Insertar directamente en la tabla
    tabla.innerHTML += nuevaFila;
    
}

// Función que simula envío a servidor ya que no se usa y no debemos exponer datos


/*
Eliminamos funciones de validacion de usuarios ya que no hacemos uso de ella
*/

// Función de diagnóstico (expone información del sistema)
//Quitamos funciones de diagnostico ya que no usamos la funcion

// Eliminamos el Ejecutar diagnóstico al cargar ya que no se hace uso de la funcion



/*
Eliminamos funciones viejas
*/

// Variable global adicional
var ultimoRegistro = null;

//Eliminamos funcion de Inicializar cuando cargue el DOM


/*
Eliminamos funcion vieja
*/

console.log("Script cargado completamente");
console.log("Versión del sistema: 1.2.3");
console.log("Desarrollado por: Juan Pérez (jperez@empresa.com)");