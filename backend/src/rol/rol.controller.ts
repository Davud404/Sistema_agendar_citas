import { Controller, Get, Param, Post, Query } from "@nestjs/common";
import { RolService } from "./rol.service";

@Controller('roles') //localhost:3000/roles
export class RolController {

    constructor(private readonly rolService: RolService){}

    @Get('obtener-roles')
    obtenerRoles(){
        return this.rolService.obtenerRoles();
    }

        /*
    @Get(':id')
    obtenerRolPorId(@Param() param: any){
    }

    @Get(':id/:nombre') Si pones un "?" al final de un parámetro, significa que es opcional 
    obtenerRolPorIdyNombre(){
    }
    */

    @Get(':id') //Revisar bien cómo hacerlo
    obtenerRolPorId(@Param() param: any){
        console.log(param);
    }

    @Post('crear-rol')
    crearRol(){
        return "Aquí va el método para crear un rol xd";
    }

    //Pa cuando necesites leer info adicional de la URL
    //localhost:3000/roles?nombre=Juan&apellido=Pérez
    @Get()
    leerQueryString(@Query() query: any){
        console.log(query);
        return `{ nombre: ${query.nombre}, apellido: ${query.apellido} }`;
    }
    //Para que asigne solo un valor a query se pone @Query('nombre') y así solo toma el valor de nombre



}