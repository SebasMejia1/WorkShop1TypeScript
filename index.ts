import { EstadoCivil } from "./enumEstadoCivil";
import { Persona, Empleado, Coche, Moto} from "./persona";

const coche1 = new Coche("ABC123", "Toyota");
const moto1 = new Moto("XYZ987", "Yamaha");
const persona1 = new Persona("Benito", 20, {calle: "24a", ciudad: "El Retiro", pais: "Colombia"}, [coche1, moto1], EstadoCivil.Casado);
const persona2 = new Persona("Antonio", 15, {calle: "19a", ciudad: "Rionegro", pais: "Colombia"},);
const persona3 = new Persona("Martinez", 2, {calle: "12b", ciudad: "Remedios", pais: "Colombia"});
const persona4 = new Persona("Ocasio", 5, {calle: "Palma", ciudad: "La ceja", pais: "Colombia"});
const persona5 = new Persona("Directamente", 30, {calle: "La isla", ciudad: "Medellin", pais: "Colombia"});
const persona6 = new Persona("Del espacio", 12, {calle: "129b", ciudad: "Carmen", pais: "Colombia"});
const persona7 = new Persona("ey", 12, {calle: "11", ciudad: "", pais: "Colombia"});
const persona8 = new Persona("Me pongo", 19, {calle: "WallStreet", ciudad: "Honkong", pais: "Colombia"});
const persona9 = new Persona("Rolex como", 18, {calle: "Bello", ciudad: "Cartagena", pais: "Colombia"});
const persona10 = new Persona("Si fueran casio", 35, {calle: "Lin", ciudad: "Santa Marta", pais: "Colombia"});

const Empleado1 = new Empleado("Benito", 20, 1200000, {calle: "Central", ciudad: "Apartado", pais: "Colombia"},[coche1,moto1]);
const Empleado2 = new Empleado("Antonio", 15, 18000000, {calle: "2900", ciudad: "Manizales", pais: "Colombia"});
const Empleado3 = new Empleado("Martinez", 2, 120300000, {calle: "19as", ciudad: "Cali", pais: "Colombia"});
const Empleado4 = new Empleado("Ocasio", 5, 190000, {calle: "291", ciudad: "El Retiro", pais: "Colombia"});
const Empleado5 = new Empleado("Directamente", 30, 2000000, {calle: "001", ciudad: "El Retiro", pais: "Colombia"});
const Empleado6 = new Empleado("Del espacio", 12, 900000, {calle: "2328", ciudad: "El Retiro", pais: "Colombia"});
const Empleado7 = new Empleado("ey", 12, 1500000, {calle: "199", ciudad: "El Retiro", pais: "Colombia"});
const Empleado8 = new Empleado("Me pongo", 19, 20300000, {calle: "19ssa", ciudad: "El Retiro", pais: "Colombia"});
const Empleado9 = new Empleado("Rolex como", 18, 7000000, {calle: "007", ciudad: "El Retiro", pais: "Colombia"});
const Empleado10 = new Empleado("Si fueran casio", 35, 18000000, {calle: "24a", ciudad: "El Retiro", pais: "Colombia"}  );

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

