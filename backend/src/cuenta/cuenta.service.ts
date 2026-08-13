import { Injectable } from "@nestjs/common";

@Injectable()
export class CuentaService {

    cuentas: {correo: string, contrasena: string, nombre: string}[] = [
        {correo: 'admin@example.com', contrasena: 'admin123', nombre: 'Peter Parker'},
        {correo: 'user@example.com', contrasena: 'user123', nombre: 'Lucho Portuano'}
    ];

    obtenerCuentas() {
        return this.cuentas;
    }

}