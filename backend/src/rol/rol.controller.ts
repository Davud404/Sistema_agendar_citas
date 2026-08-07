import { Controller, Get } from "@nestjs/common";

@Controller('roles') //localhost:3000/roles
export class RolController {

    @Get()
    obtenerRoles(){
        return "Aquí va el método para obtener roles xd";
    }


}