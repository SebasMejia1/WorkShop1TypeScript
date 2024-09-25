class Persona {
    nombre: string;
    edad: number;

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
let persona1 = new Persona('Juan', 30);

persona1.saludar(); 
