import { Empleado } from './persona';
export class Departamento {
    nombre: string;
    empleados: Empleado[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.empleados = [];
        console.log(`Departamento "${this.nombre}" creado.`);
    }

    agregarEmpleado(empleado: Empleado): void {
        this.empleados.push(empleado);
        console.log(`Método "agregarEmpleado" ejecutado: ${empleado.nombre} ha sido añadido al departamento "${this.nombre}".`);
    }

    eliminarEmpleado(nombre: string): void {
        const index = this.empleados.findIndex(emp => emp.nombre === nombre);
        if (index !== -1) {
            const empleadoEliminado = this.empleados.splice(index, 1);
            console.log(`Método "eliminarEmpleado" ejecutado: ${empleadoEliminado[0].nombre} ha sido eliminado del departamento "${this.nombre}".`);
        } else {
            console.log(`Método "eliminarEmpleado" ejecutado: Empleado con nombre "${nombre}" no encontrado en el departamento "${this.nombre}".`);
        }
    }

    listarEmpleados(): void {
        console.log(`Método "listarEmpleados" ejecutado:`);
        if (this.empleados.length === 0) {
            console.log(`No hay empleados en el departamento "${this.nombre}".`);
        } else {
            console.log(`Empleados en el departamento "${this.nombre}":`);
            this.empleados.forEach(emp => {
                console.log(`- ${emp.nombre}`);
            });
        }
    }
}
