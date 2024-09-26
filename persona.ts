import { Direccion } from "./interfazDireccion";

export class Persona {
    nombre: string;
    private edad: number;
    direccion: Direccion;

    constructor(nombre: string, edad: number, direccion: Direccion) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }

    saludar(): void{
        console.log('Tu nombre es : ', this.nombre, "Tu edad es : ", this.edad);
        console.log('Tu dirección es : ', this.direccion.calle, this.direccion.ciudad);
    }

    getEdad(): number {
        return this.edad;
    }
 
}


export class Empleado extends Persona {
    salario: number
    constructor(nombre: string, edad: number, salario: number, direccion: Direccion){
        super(nombre, edad, direccion)
        this.salario = salario;
    }
    trabajar(): void{
        console.log(this.nombre, "Las horas que se trabajaran en el dia serán 8 horas");
    }

    saludar(){
        super.saludar();
        console.log('El salario es : ', this.salario);
    }
    

}

abstract class Vehiculo {
    abstract Arrancar(): void
}

class Coche extends Vehiculo {
    Arrancar(): void {
        console.log('El coche esta arrancando');
    }
}

class Moto extends Vehiculo {
    Arrancar(): void {
        console.log('La moto esta arrancando');
    }
}