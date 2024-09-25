export class Persona {
    nombre: string;
    private edad: number;

    constructor(nombre: string, edad: number, ) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(): void{
        console.log('Tu nombre es : ', this.nombre, "Tu edad es : ", this.edad);
    }

    getEdad(): number {
        return this.edad;
    }
 
}


class Empleado extends Persona {
    salario: number
    constructor(nombre: string, edad: number, salario: number){
        super(nombre, edad);
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
let persona1 = new Empleado("Sebas", 22, 1200000)

persona1.saludar();

