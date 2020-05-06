

class Empleado { 
    constructor(nombre, funcion){
        this.nombre = nombre;
        this.funcion= funcion;   
    }

    trabajoRealizado(){
        return "Yo " + this.nombre + " hago :" + this.funcion;
    }
}


var nuevoEmp = new Empleado("Cristian", "el tinto" );

console.log(nuevoEmp.trabajoRealizado());

class Jefe extends Empleado{
    constructor(nombre, funcion, colaboradores){
        super(nombre,funcion);
        this.colaboradores = colaboradores;
    }
    trabajoRealizadoJefe(){
        return "Yo " + this.nombre + " hago :" + this.funcion + " y tengo " + this.colaboradores + " colaboradores.";
    }

}

var nuevoJefe = new Jefe("Ricardo", "Dirige",8 );

console.log(nuevoJefe.trabajoRealizadoJefe());

class analista extends Empleado{ 
    constructor(nombre, funcion, experiencia, nivel_estudios){
        super(nombre,funcion);
        this.experiencia = experiencia;
        this.nivel_estudios= nivel_estudios;   

    }

    trabajoAnalista(){
        return "Nombre Analista " + this.nombre + " funciones :" + this.funcion + " años de experiencia: " + this.experiencia + "nivel de estudios: " + this.nivel_estudios;
    }
}

var nuevoAnalista = new analista("Pepito Perez", "Analista", "1", "profesional");
console.log(nuevoAnalista.trabajoAnalista());
console.log(nuevoAnalista.trabajoRealizado());

class Contratista extends Empleado{
    constructor(nombre,funcion,nocontrato)
    {
        super(nombre,funcion);
        this.nocontrato = nocontrato;
    }    
        trabajoContratista(){
            return "Nombre Contratista " + this.nombre + " funciones : " + this.funcion +  " No contrato: " + this.nocontrato;
    }
}
 
var NuevoContratista = new Contratista("Pedro Perez", "pintor", "1120987" );
console.log(NuevoContratista.trabajoContratista());
   

