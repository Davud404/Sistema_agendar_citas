import { Controller, Get } from "@nestjs/common";
import { CuentaService } from "./cuenta.service";

@Controller('cuentas')
export class CuentaController {

    constructor(private readonly cuentasService: CuentaService){}

    @Get('obtener-cuentas')
    obtnerCuentas(){
        return this.cuentasService.obtenerCuentas();
    }

}