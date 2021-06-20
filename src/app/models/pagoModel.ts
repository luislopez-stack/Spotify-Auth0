export class pagoModel {
    id: string;
    transaccion: string;
    monto: string;
    descripcion: string;
    estatus: boolean;
    fecha: string;

    constructor() {
        this.estatus = true;
    }
}
