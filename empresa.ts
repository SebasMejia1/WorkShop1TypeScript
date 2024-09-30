import { Empleado } from './persona';

export class Empresa {
    nombre: string;
    empleados: Empleado[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.empleados = [];
        console.log(`Empresa "${this.nombre}" creada.`);
    }

    agregarEmpleado(empleado: Empleado): void {
        this.empleados.push(empleado);
        console.log(`Método "agregarEmpleado" ejecutado: ${empleado.nombre} ha sido añadido a la empresa "${this.nombre}".`);
    }

    eliminarEmpleado(nombre: string): void {
        const index = this.empleados.findIndex(emp => emp.nombre === nombre);
        if (index !== -1) {
            const empleadoEliminado = this.empleados.splice(index, 1);
            console.log(`Método "eliminarEmpleado" ejecutado: ${empleadoEliminado[0].nombre} ha sido eliminado de la empresa "${this.nombre}".`);
        } else {
            console.log(`Método "eliminarEmpleado" ejecutado: Empleado con nombre "${nombre}" no encontrado en la empresa "${this.nombre}".`);
        }
    }

    calcularTotalSalarios(): number {
        const totalSalarios = this.empleados.reduce((total, emp) => total + emp.salario, 0);
        console.log(`Método "calcularTotalSalarios" ejecutado: El total de salarios es ${totalSalarios}.`);
        return totalSalarios;
    }
}
