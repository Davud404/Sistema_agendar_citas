import { Injectable } from "@nestjs/common";

@Injectable()
export class RolService {
    roles: {nombre: string, descripcion: string}[] = [
        {nombre: 'Administrador', descripcion: 'Rol con permisos de administrador'},
        {nombre: 'Negocio', descripcion: 'Rol con permisos de negocio'},
        {nombre: 'Usuario', descripcion: 'Rol con permisos de usuario'},
    ];

    obtenerRoles() {
        return this.roles;
    }

}