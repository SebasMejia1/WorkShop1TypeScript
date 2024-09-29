export class Proyecto {
    nombre: string;
    descripcion: string;
    fechaInicio: Date;
    fechaFin?: Date;

    constructor(nombre: string, descripcion: string, fechaInicio: Date, fechaFin?: Date) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
}
