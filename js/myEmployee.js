/**
 * Created by Carmen on 25/04/2016.
 */

//objeto literal con un array de empleados
var myEmployees = {

    //propiedades
    empleados: [],

    //metodos

    /**
     *
     * @param {Empleado} empleado -- objeto de clase Empleado
     * funcion que añade un empleado al array empleados
     */
    addEmpleado: function (empleado) {
        // hace push al array pasando el objeto
        this.empleados.push(empleado);
        return false;
    },

    /**
     * metodo que muestra todos los empleados
     * @param {nodo DOM} nodo -- parametro nodo del dom para incrustar la cadena con la informacion
     */
    showAllEmpleado: function (nodo) {
        var cadena = "";

        // recorro todo el array para pasar por todos los objetos
        for (var i = 0; i < this.empleados.length; i++) {
            //concateno la cadena llamando al metodo showEmpleado
            cadena += this.showEmpleado(i, nodo);

        }
        ;

        nodo.innerHTML = cadena;
        return false;
    },

    /**
     * metodo que muestra al empleado del array que esta en la posicion que se pasa por parametro
     * @param {int} posicion -- entero que pasa una posicion
     */
    showEmpleado: function (posicion) {
        var cadena = "<h2>Empleado Número " + (posicion + 1) + "</h2>";
        cadena += "<p>Nombre: " + this.empleados[posicion].nombre + "</p>";
        cadena += "<p>Departamento: " + this.empleados[posicion].departamento + "</p>";
        cadena += "<p>Fecha Contratación: " + this.empleados[posicion].fecha.toDateString() + "</p>";

        return cadena;

    }
};

//objeto constructor de Employee
var Employee = function (name, dep) {

    //propiedades
    this.nombre = name;
    this.departamento = dep;
    this.fecha = new Date();
};

//funcion de inicializacion del document
function init() {

    //boton añadir
    var btnAdd = document.getElementById('add');

    //evento click del boton añadir
    btnAdd.onclick = function () {
        //capturo los datos del formulario
        var nombreCapturado = document.getElementById('nombre').value;
        var departamentoCapturado = document.getElementById('departamento').value;
        //construyo el objeto employee con los datos capturados
        var emp = new Employee(nombreCapturado, departamentoCapturado);
        //llamo al metodo addEmpleado para añadirlo al objeto myEmployee
        myEmployees.addEmpleado(emp);
    };

    //boton mostrar
    var btnShow = document.getElementById('show');
    //evento click del boton mostrar
    btnShow.onclick = function () {
        //capturo el nodo donde quiero mostrar la informacion
        var nodoInformacion = document.getElementById('informacion');
        // llamo al metodo de myEmployee para mostrar todos los empleados
        myEmployees.showAllEmpleado(nodoInformacion);
    };

}

//inicio el script al cargar window
window.onload = init;

