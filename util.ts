import { Persona, Empleado } from "./persona";
import { Direccion } from "./interfazDireccion";

const crearPersona = (jsonPersona: {nombre: string, edad: number, direccion: Direccion}): Persona =>{
    return new Persona(jsonPersona.nombre, jsonPersona.edad, jsonPersona.direccion);
}

const jsonPersona = {
    nombre: "Sebas",
    edad: 22,
    direccion: {
        calle: "Calle 123",
        ciudad: "El Retiro",
        pais: "Colombia"
    }
}

const persona = crearPersona(jsonPersona);
persona.saludar()
