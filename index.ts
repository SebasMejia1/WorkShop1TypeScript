import { Persona, Empleado} from "./persona";

const persona1 = new Persona("Benito", 20);
const persona2 = new Persona("Antonio", 15);
const persona3 = new Persona("Martinez", 2);
const persona4 = new Persona("Ocasio", 5);
const persona5 = new Persona("Directamente", 30);
const persona6 = new Persona("Del espacio", 12);
const persona7 = new Persona("ey", 12);
const persona8 = new Persona("Me pongo", 19);
const persona9 = new Persona("Rolex como", 18);
const persona10 = new Persona("Si fueran casio", 35);

const Empleado1 = new Empleado("Benito", 20, 1200000);
const Empleado2 = new Empleado("Antonio", 15, 18000000);
const Empleado3 = new Empleado("Martinez", 2, 120300000);
const Empleado4 = new Empleado("Ocasio", 5, 190000);
const Empleado5 = new Empleado("Directamente", 30, 2000000);
const Empleado6 = new Empleado("Del espacio", 12, 900000);
const Empleado7 = new Empleado("ey", 12, 1500000);
const Empleado8 = new Empleado("Me pongo", 19, 20300000);
const Empleado9 = new Empleado("Rolex como", 18, 7000000);
const Empleado10 = new Empleado("Si fueran casio", 35, 18000000);

Empleado1.saludar()
Empleado2.saludar()
Empleado3.saludar()
Empleado4.saludar()
Empleado5.saludar()
Empleado6.saludar()
Empleado7.saludar()
Empleado8.saludar()
Empleado9.saludar()
Empleado10.saludar()


persona1.saludar()
persona2.saludar()
persona3.saludar()
persona4.saludar()
persona5.saludar()
persona6.saludar()
persona7.saludar()
persona8.saludar()
persona9.saludar()
persona10.saludar()
console.log('Edad 1 : ', persona1.getEdad());
