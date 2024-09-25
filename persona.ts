export class Persona {
    nombre: string;
    private edad: number;

    constructor(nombre: string, edad: number, ) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log('Tu nombre es : ', this.nombre, "Tu edad es : ", this.edad);
    }

    getEdad(){
        return this.edad;
    }

}


class Empleado extends Persona {
    salario: number
    constructor(nombre: string, edad: number, salario: number){
        super(nombre, edad);
        this.salario = salario;
    }
    trabajar(){
        console.log(this.nombre, "Las horas que se trabajaran en el dia serán 8 horas");
    }

}
