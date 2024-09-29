import empleadosData from './empleados.json'; 
import { Empleado, Coche, Moto } from './persona'; 
import { Direccion } from './interfazDireccion';


const empleados: Empleado[] = empleadosData.map((emp: any) => {
    const direccion: Direccion = {
        calle: emp.direccion.calle,
        ciudad: emp.direccion.ciudad,
        pais: emp.direccion.pais 
    };

    const vehiculos = emp.vehiculos?.map((veh: any) => {
        if (veh.tipo === 'Coche') {
            return new Coche(veh.placa, veh.marca); 
        } else if (veh.tipo === 'Moto') {
            return new Moto(veh.placa, veh.marca); 
        }
    });

    return new Empleado(emp.nombre, emp.edad, emp.salario, direccion, vehiculos);
});

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
        edad: emp.getEdad(), 
        salario: emp.salario,
        direccion: {
            calle: emp.direccion.calle,
            ciudad: emp.direccion.ciudad,
            pais: emp.direccion.pais
        },
        vehiculos: emp.vehiculos?.map(vehiculo => ({
            tipo: vehiculo instanceof Coche ? 'Coche' : 'Moto', 
            marca: vehiculo.marca,
            placa: vehiculo.placa 
        }))
    }), 2)); 
}

const jsonEmpleados = empleadosToJSON(empleados);
console.log(jsonEmpleados);
