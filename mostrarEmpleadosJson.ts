import empleadosData from './empleados.json'; 
import { Empleado, Coche, Moto } from './persona'; 
import { Direccion } from './interfazDireccion';

// Convertir los datos JSON a instancias de Empleado
const empleados: Empleado[] = empleadosData.map((emp: any) => {
    const direccion: Direccion = {
        calle: emp.direccion.calle,
        ciudad: emp.direccion.ciudad,
        pais: emp.direccion.pais 
    };

    const vehiculos = emp.vehiculos?.map((veh: any) => {
        if (veh.tipo === 'Coche') {
            return new Coche(veh.placa, veh.marca); // Solo pasa placa y marca
        } else if (veh.tipo === 'Moto') {
            return new Moto(veh.placa, veh.marca); // Solo pasa placa y marca
        }
    });

    return new Empleado(emp.nombre, emp.edad, emp.salario, direccion, vehiculos);
});

// Ejemplo de uso
empleados.forEach(empleado => {
    empleado.saludar();
    if (empleado.vehiculos) {
        empleado.vehiculos.forEach(vehiculo => {
            vehiculo.Arrancar(); 
        });
    }
});

function empleadosToJSON(empleados: Empleado[]): string {
    return JSON.stringify(empleados.map(emp => ({
        nombre: emp.nombre,
        edad: emp.getEdad(), // Usar el método para obtener la edad
        salario: emp.salario,
        direccion: {
            calle: emp.direccion.calle,
            ciudad: emp.direccion.ciudad,
            pais: emp.direccion.pais // Asegúrate de que 'pais' esté en tu objeto direccion
        },
        vehiculos: emp.vehiculos?.map(vehiculo => ({
            tipo: vehiculo instanceof Coche ? 'Coche' : 'Moto', // Determinar el tipo del vehículo
            marca: vehiculo.marca,
            placa: vehiculo.placa // Cambié modelo a placa
        }))
    }), 2)); // Solo el 2 para la indentación
}

// Uso de la función
const jsonEmpleados = empleadosToJSON(empleados);
console.log(jsonEmpleados);
